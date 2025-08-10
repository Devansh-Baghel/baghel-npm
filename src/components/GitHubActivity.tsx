// src/components/Github.tsx
import React from 'react';
import { Box, Text } from 'ink';

// You can later use a library like 'axios' or 'node-fetch' to get real data
const getCommitData = async () => {
  return {
    '2024': 1234,
    '2023': 987,
  };
};

const Github = () => {
  // In a real app, you'd use state and effects here
  const commitData = { '2024': 1234, '2023': 987 };

  return (
    <Box flexDirection="column" marginTop={1}>
      <Text bold underline>
        Commit History
      </Text>
      <Box flexDirection="column" marginTop={1}>
        {Object.entries(commitData).map(([year, commits]) => (
          <Text key={year}>
            <Text bold color="green">{year}</Text>: {commits} contributions
          </Text>
        ))}
      </Box>
    </Box>
  );
};

export default Github;
