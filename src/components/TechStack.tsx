import React from "react";
import { Box, Text } from "ink";
import Gradient from "ink-gradient";
import { COLORS, TECH_STACK } from "../utils/colors.js";

const TechStack: React.FC = () => {
	const renderTechCategory = (
		title: string,
		emoji: string,
		technologies: string[],
		color: string
	) => (
		<Box
			flexDirection="column"
			borderStyle="round"
			borderColor={color}
			padding={2}
			marginBottom={2}
			minWidth={30}
		>
			<Box marginBottom={2}>
				<Text color={color} bold>
					{emoji} {title}
				</Text>
			</Box>
			<Box flexDirection="row" flexWrap="wrap">
				{technologies.map((tech, index) => (
					<Box key={index} marginRight={1} marginBottom={1}>
						<Text color="white" backgroundColor={color} bold>
							{" "}
							{tech}{" "}
						</Text>
					</Box>
				))}
			</Box>
		</Box>
	);

	return (
		<Box flexDirection="column" paddingX={2}>
			<Box marginBottom={3}>
				<Gradient name="rainbow">
					<Text bold fontSize={16}>
						⚡ Tech Stack / Tools
					</Text>
				</Gradient>
			</Box>

			<Box flexDirection="row" flexWrap="wrap">
				<Box flexDirection="column" marginRight={2} flexGrow={1}>
					{renderTechCategory("Frontend", "🎨", TECH_STACK.frontend, "cyan")}
					{renderTechCategory("Backend", "⚙️", TECH_STACK.backend, "green")}
				</Box>

				<Box flexDirection="column" flexGrow={1}>
					{renderTechCategory("Misc", "🔧", TECH_STACK.misc, "magenta")}
				</Box>
			</Box>

			<Box
				borderStyle="double"
				borderColor={COLORS.accent}
				padding={2}
				marginTop={2}
			>
				<Gradient name="vice">
					<Text bold>
						💡 I love working with modern technologies to build scalable and
						efficient applications!
					</Text>
				</Gradient>
			</Box>
		</Box>
	);
};

export default TechStack;
