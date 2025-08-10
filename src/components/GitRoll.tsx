import React from "react";
import { Box, Text } from "ink";
import Gradient from "ink-gradient";
import Link from "ink-link";
import { COLORS } from "../utils/colors.js";

const GitRoll: React.FC = () => {
	return (
		<Box flexDirection="column" paddingX={2}>
			<Box marginBottom={3}>
				<Gradient name="retro">
					<Text bold fontSize={16}>
						🎖️ GitRoll Profile
					</Text>
				</Gradient>
			</Box>

			<Box
				flexDirection="column"
				borderStyle="double"
				borderColor={COLORS.accent}
				padding={3}
				alignItems="center"
			>
				<Text color={COLORS.accent} bold fontSize={14} marginBottom={1}>
					🏅 Developer Profile Badge
				</Text>

				<Box
					borderStyle="round"
					borderColor="green"
					padding={2}
					backgroundColor="green"
					marginBottom={2}
				>
					<Text color="black" bold>
						⭐ GITROLL VERIFIED DEVELOPER ⭐
					</Text>
				</Box>

				<Box flexDirection="column" alignItems="center" marginBottom={2}>
					<Text color={COLORS.text}>👤 Devansh Baghel</Text>
					<Text color={COLORS.accent}>🚀 Full Stack Developer</Text>
					<Text color={COLORS.muted}>📊 Profile Score: 92/100</Text>
				</Box>

				<Box flexDirection="row" marginBottom={2}>
					<Box marginRight={3}>
						<Text color="cyan" bold>
							📈 Repositories: 25+
						</Text>
					</Box>
					<Box marginRight={3}>
						<Text color="green" bold>
							⭐ Stars: 150+
						</Text>
					</Box>
					<Box>
						<Text color="magenta" bold>
							🔀 Forks: 45+
						</Text>
					</Box>
				</Box>

				<Box flexDirection="column" alignItems="center" marginBottom={3}>
					<Text color={COLORS.accent} bold marginBottom={1}>
						🏆 Skills Highlighted:
					</Text>
					<Box flexDirection="row" flexWrap="wrap" justifyContent="center">
						{["TypeScript", "React", "Next.js", "Node.js", "MongoDB"].map(
							(skill, index) => (
								<Box key={index} marginX={1} marginBottom={1}>
									<Text color="white" backgroundColor="blue" bold>
										{" "}
										{skill}{" "}
									</Text>
								</Box>
							)
						)}
					</Box>
				</Box>

				{/* Fixed: Moved Box outside of Link */}
				<Box
					borderStyle="round"
					borderColor={COLORS.accent}
					paddingX={2}
					paddingY={1}
				>
					<Link url="https://gitroll.io/profile/uEYBeQmpK8LQdxyyFmiTOicIEPrG2">
						<Text color={COLORS.accent} bold>
							🔗 View Full GitRoll Profile
						</Text>
					</Link>
				</Box>
			</Box>

			<Box borderStyle="single" borderColor="green" padding={2} marginTop={2}>
				<Gradient name="morning">
					<Text bold>
						✨ GitRoll showcases my coding journey and project contributions
						with detailed analytics!
					</Text>
				</Gradient>
			</Box>
		</Box>
	);
};

export default GitRoll;
