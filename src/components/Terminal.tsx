// src/components/Terminal.tsx
import React, { useState } from 'react';
import { Box, Text, useInput } from 'ink';
import { COLORS, SOCIAL_LINKS } from '../utils/colors';
import open from 'open';

interface TerminalProps {
  onSectionChange: (section: string) => void;
  currentSection: string;
}

const Terminal: React.FC<TerminalProps> = ({ onSectionChange, currentSection }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([
    'Welcome to Devansh Baghel\'s interactive portfolio! Type "help" for commands.'
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  useInput((inputChar, key) => {
    if (key.return) {
      processCommand(input);
      setInput('');
      setHistoryIndex(-1);
    } else if (key.backspace || key.delete) {
      setInput(prev => prev.slice(0, -1));
    } else if (key.upArrow) {
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < 0 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (key.downArrow) {
      if (historyIndex >= 0) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    } else if (inputChar && !key.ctrl) {
      setInput(prev => prev + inputChar);
    }
  });

  const processCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    setCommandHistory(prev => [...prev, cmd]);
    setHistory(prev => [...prev, `> ${cmd}`]);

    let response = '';

    switch (trimmedCmd) {
      case 'help':
        response = `Available commands:
• home, projects, tech, github - Navigate to sections
• open [github|linkedin|email|website] - Open links
• about - Show bio
• clear - Clear terminal
• exit - Exit portfolio`;
        break;

      case 'home':
        onSectionChange('home');
        response = 'Switched to Home section';
        break;

      case 'projects':
        onSectionChange('projects');
        response = 'Switched to Projects section';
        break;

      case 'tech':
        onSectionChange('tech');
        response = 'Switched to Tech Stack section';
        break;

      case 'github':
        onSectionChange('github');
        response = 'Switched to GitHub section';
        break;

      case 'about':
        response = 'Hello there 👋, I build full-stack web apps with modern tools. I\'m passionate about creating efficient, scalable solutions.';
        break;

      case 'clear':
        setHistory(['Welcome to Devansh Baghel\'s interactive portfolio! Type "help" for commands.']);
        return;

      case 'exit':
        process.exit(0);
        break;

      default:
        if (trimmedCmd.startsWith('open ')) {
          const target = trimmedCmd.split(' ')[1];
          response = handleOpenCommand(target);
        } else if (trimmedCmd === '') {
          return;
        } else {
          response = `Command not found: ${trimmedCmd}. Type "help" for available commands.`;
        }
    }

    setHistory(prev => [...prev, response]);
  };

  const handleOpenCommand = (target: string): string => {
    switch (target) {
      case 'github':
        open(SOCIAL_LINKS.github);
        return 'Opening GitHub profile...';
      case 'linkedin':
        open(SOCIAL_LINKS.linkedin);
        return 'Opening LinkedIn profile...';
      case 'email':
        open(`mailto:${SOCIAL_LINKS.email}`);
        return 'Opening email client...';
      case 'website':
        open(SOCIAL_LINKS.website);
        return 'Opening website...';
      default:
        return `Cannot open '${target}'. Available: github, linkedin, email, website`;
    }
  };

  const displayHistory = history.slice(-8); // Show last 8 lines

  return (
    <Box flexDirection="column" borderStyle="single" borderColor={COLORS.accent} height={12}>
      <Box borderColor="cyan" paddingX={1}>
        <Text color="cyan" bold>Terminal</Text>
      </Box>
      
      <Box flexDirection="column" paddingX={1} flexGrow={1}>
        {displayHistory.map((line, index) => (
          <Text key={index} color={line.startsWith('>') ? COLORS.accent : COLORS.text}>
            {line}
          </Text>
        ))}
      </Box>

      <Box borderStyle="single" borderColor={COLORS.border} paddingX={1}>
        <Text color={COLORS.accent}>devansh@portfolio:~$ </Text>
        <Text color={COLORS.text}>{input}</Text>
        <Text color={COLORS.accent}>█</Text>
      </Box>
    </Box>
  );
};

export default Terminal;
