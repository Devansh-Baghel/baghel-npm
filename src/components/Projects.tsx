// src/components/Projects.tsx
import React from "react";
import { Box, Text } from "ink";

const projects = [
  {
    name: "CodeStash",
    description: "The best way to save, store and share your code snippets.",
    tech: ["Next.js", "React Query", "MongoDB", "Node.js"],
  },
  {
    name: "SpendSync",
    description: "An all in one financial planning and money tracking tool.",
    tech: ["Vite", "React", "TypeScript", "Express.js"],
  },
];

const TechBadge = ({ children }: { children: string }) => (
  <Text backgroundColor="#333" color="#84cc16">
    {" "}{children}{" "}
  </Text>
);

const Projects = () => (
  <Box flexDirection="column" height="100%">
    <Text bold underline>Selected Work</Text>
    
    <Box flexDirection="column" overflow="hidden" flexGrow={1}>
      {projects.map((project) => (
        <Box
          key={project.name}
          borderStyle="round"
          borderColor="gray"
          flexDirection="column"
          padding={1}
          marginTop={1}
        >
          <Text bold color="green">{project.name}</Text>
          <Text>{project.description}</Text>
          <Box marginTop={1} flexWrap="wrap">
            {project.tech.map((tech) => (
              <Box marginRight={1} key={tech}>
                <TechBadge>{tech}</TechBadge>
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
    
    {/* Spacer to maintain consistent height */}
    <Box flexGrow={1} />
  </Box>
);

export default Projects;
