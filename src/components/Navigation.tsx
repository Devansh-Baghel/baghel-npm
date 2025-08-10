import React from "react";
import { Box, Text } from "ink";
import Gradient from "ink-gradient";
import { COLORS } from "../utils/colors.js";

interface NavigationProps {
	currentSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ currentSection }) => {
	const navItems = [
		{ key: "1", label: "Home", value: "home", emoji: "🏠" },
		{ key: "2", label: "Projects", value: "projects", emoji: "💼" },
		{ key: "3", label: "Tech Stack", value: "tech", emoji: "⚡" },
		{ key: "4", label: "GitHub", value: "github", emoji: "📊" },
		{ key: "5", label: "GitRoll", value: "gitroll", emoji: "🎖️" },
		{ key: "6", label: "Contact", value: "contact", emoji: "📞" },
	];

	return (
		<Box borderStyle="double" borderColor={COLORS.accent} padding={1}>
			<Gradient name="rainbow">
				<Text bold>DEVANSH BAGHEL - TERMINAL PORTFOLIO</Text>
			</Gradient>
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
								{item.emoji} {item.key}.{item.label}
							</Text>
						</Box>
						{index < navItems.length - 1 && (
							<Text color={COLORS.muted}> | </Text>
						)}
					</React.Fragment>
				))}
			</Box>
		</Box>
	);
};

export default Navigation;
