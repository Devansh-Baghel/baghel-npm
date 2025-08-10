// src/components/TechStack.tsx
import React from 'react';
import { Box, Text } from 'ink';

const frontend = ['Next.js', 'TypeScript', 'React', 'Tailwind CSS'];
const backend = ['MongoDB', 'Node.js', 'Express.js', 'Docker'];
const misc = ['Linux', 'Git', 'GitHub', 'Neovim', 'Bash'];

const StackSection = ({ title, items }: { title: string, items: string[] }) => (
  <Box flexDirection="column" width="33%">
    <Text bold color="yellow">{title}</Text>
    {items.map(item => <Text key={item}>- {item}</Text>)}
  </Box>
);

const TechStack = () => (
  <Box flexDirection="column" height="100%">
    <Text bold underline>Tech Stack / Tools</Text>
    <Box flexDirection="row" marginTop={1} flexGrow={1}>
      <StackSection title="Frontend" items={frontend} />
      <StackSection title="Backend" items={backend} />
      <StackSection title="Misc." items={misc} />
    </Box>
    
    {/* Spacer to maintain consistent height */}
    <Box flexGrow={1} />
  </Box>
);

export default TechStack;
