import React from "react";
import { Box, Text } from "ink";
import Gradient from "ink-gradient";
import Link from "ink-link";
import { COLORS, PROJECT_DATA } from "../utils/colors.js";

const Projects: React.FC = () => {
	return (
		<Box flexDirection="column" paddingX={2}>
			<Box marginBottom={3}>
				<Gradient name="summer">
					<Text bold fontSize={16}>
						🎯 Selected Work
					</Text>
				</Gradient>
			</Box>

			{PROJECT_DATA.map((project, index) => (
				<Box
					key={project.name}
					flexDirection="column"
					borderStyle="round"
					borderColor={COLORS.accent}
					padding={2}
					marginBottom={2}
				>
					<Box marginBottom={1}>
						<Text color={COLORS.accent} bold>
							{project.icon} {project.name}
						</Text>
					</Box>

					<Box marginBottom={2} maxWidth={70}>
						<Text color={COLORS.text}>{project.description}</Text>
					</Box>

					<Box flexDirection="row" marginBottom={2}>
						<Box
							borderStyle="single"
							borderColor="green"
							paddingX={2}
							paddingY={1}
							backgroundColor="green"
						>
							<Link url={project.liveUrl}>
								<Text color="black" bold>
									🌐 Live Demo
								</Text>
							</Link>
						</Box>

						<Box
							marginLeft={2}
							borderStyle="single"
							borderColor={COLORS.border}
							paddingX={2}
							paddingY={1}
						>
							<Link url={project.sourceUrl}>
								<Text color={COLORS.text} bold>
									💻 Source Code
								</Text>
							</Link>
						</Box>
					</Box>

					<Box flexDirection="column">
						<Text color={COLORS.accent} bold>
							🛠️ Tech Stack:
						</Text>
						<Box flexDirection="row" flexWrap="wrap" marginTop={1}>
							{project.techStack.map((tech, techIndex) => (
								<Box key={techIndex} marginRight={1} marginBottom={1}>
									<Text
										color={COLORS.muted}
										backgroundColor={COLORS.bgLight}
										bold
									>
										{" "}
										{tech}{" "}
									</Text>
								</Box>
							))}
						</Box>
					</Box>
				</Box>
			))}

			<Box
				borderStyle="round"
				borderColor={COLORS.border}
				padding={2}
				justifyContent="center"
			>
				<Link url="https://github.com/devansh-baghel">
					<Text color={COLORS.accent} bold>
						🔗 More projects on GitHub
					</Text>
				</Link>
			</Box>
		</Box>
	);
};

export default Projects;
