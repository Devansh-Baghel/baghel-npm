// src/components/Navigation.tsx
import React from "react";
import { Box, Text } from "ink";
import Gradient from "ink-gradient";
import { COLORS } from "../utils/colors.js";

interface NavigationProps {
  currentSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ currentSection }) => {
  const navItems = [
    { key: "Tab", label: "Home", value: "home", emoji: "🏠" },
    { key: "Tab", label: "Projects", value: "projects", emoji: "💼" },
    { key: "Tab", label: "Tech Stack", value: "tech", emoji: "⚡" },
    { key: "Tab", label: "GitHub", value: "github", emoji: "📊" },
  ];

  return (
    <Box borderStyle="double" borderColor={COLORS.accent} padding={1}>
      {/* <Gradient name="rainbow">
        <Text bold>DEVANSH BAGHEL - TERMINAL PORTFOLIO</Text>
      </Gradient> */}
      <Box marginLeft={4} flexDirection="row">
        {navItems.map((item, index) => (
          <React.Fragment key={item.value}>
            <Box
              paddingX={1}
              backgroundColor={
                currentSection === item.value ? COLORS.accent : undefined
              }
            >
              <Text
                color={currentSection === item.value ? "black" : COLORS.text}
                bold={currentSection === item.value}
              >
                {item.emoji} {item.label}
                {currentSection === item.value ? " ◀" : ""}
              </Text>
            </Box>
            {index < navItems.length - 1 && (
              <Text color={COLORS.muted}> | </Text>
            )}
          </React.Fragment>
        ))}
      </Box>
      <Box marginTop={1}>
        <Text color={COLORS.muted}>
          Tab: Navigate • ESC: Exit • Type commands below ↓
        </Text>
      </Box>
    </Box>
  );
};

export default Navigation;
