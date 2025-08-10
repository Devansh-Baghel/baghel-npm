// src/cli.tsx
import React from 'react';
import { render, Box, Newline } from 'ink';
import Header from './components/Header';
import Projects from './components/Projects';
import Stack from './components/TechStack';
import Github from './components/GitHubActivity';

const App = () => (
  <Box
    borderStyle="double"
    borderColor="lime"
    padding={2}
    flexDirection="column"
  >
    <Header />
    <Newline />
    <Projects />
    <Newline />
    <Stack />
    <Newline />
    <Github />
  </Box>
);

render(<App />);
