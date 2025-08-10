// src/components/Loader.tsx
import React, { useState, useEffect } from 'react';
import { Box, Text } from 'ink';
import { COLORS } from '../utils/colors';

interface LoaderProps {
  onComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const steps = [
    'Initializing portfolio...',
    'Loading components...',
    'Setting up terminal...',
    'Preparing interactive features...',
    'Ready to launch!'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 2; // Increase by 2 each time for faster loading
        
        // Update step based on progress
        const stepIndex = Math.floor(newProgress / 20);
        if (stepIndex !== currentStep && stepIndex < steps.length) {
          setCurrentStep(stepIndex);
        }
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500); // Small delay before showing portfolio
          return 100;
        }
        return newProgress;
      });
    }, 80); // Update every 80ms for smooth animation

    return () => clearInterval(interval);
  }, [onComplete, currentStep, steps.length]);

  const progressBar = '█'.repeat(Math.floor(progress / 2.5)) + 
                     '░'.repeat(40 - Math.floor(progress / 2.5));

  return (
    <Box 
      flexDirection="column" 
      alignItems="center" 
      justifyContent="center" 
      height={25}
      borderStyle="double"
      borderColor="lime"
      padding={2}
    >
      <Box marginBottom={3}>
        <Text color="lime" bold fontSize={16}>
          🚀 Devansh Baghel's Portfolio
        </Text>
      </Box>
      
      <Box marginBottom={2}>
        <Text color="cyan">
          {steps[currentStep] || steps[steps.length - 1]}
        </Text>
      </Box>
      
      <Box marginBottom={2} width={42}>
        <Text color="lime">
          {progressBar}
        </Text>
      </Box>
      
      <Box>
        <Text color="white" bold>
          {progress}% Complete
        </Text>
      </Box>
      
      {progress >= 100 && (
        <Box marginTop={2}>
          <Text color="green" bold>
            ✓ Loading complete!
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default Loader;
