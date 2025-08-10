import React from "react";
import { Box, Text, Spacer } from "ink";
import Gradient from "ink-gradient";
import BigText from "ink-big-text";
import Link from "ink-link";
import { COLORS, SOCIAL_LINKS } from "../utils/colors.js";

const Header: React.FC = () => {
	return (
		<Box flexDirection="column" paddingX={2}>
			<Box marginBottom={2}>
				<Gradient name="cristal">
					<BigText text="Devansh Baghel" font="block" />
				</Gradient>
			</Box>

			<Box marginBottom={2}>
				<Gradient name="teen">
					<Text bold fontSize={18}>
						🚀 Fullstack Developer
					</Text>
				</Gradient>
			</Box>

			<Box marginBottom={3} maxWidth={80}>
				<Text color={COLORS.text}>
					Hello there 👋, I'm Devansh Baghel, and I build full-stack web apps
					with{" "}
					<Text color={COLORS.accent} bold>
						modern tools
					</Text>
					.
				</Text>
			</Box>

			<Box flexDirection="row" marginBottom={2}>
				<Box
					borderStyle="round"
					borderColor={COLORS.accent}
					paddingX={2}
					paddingY={1}
					backgroundColor={COLORS.accent}
				>
					<Link url={SOCIAL_LINKS.resume}>
						<Text color="black" bold>
							📄 Résumé
						</Text>
					</Link>
				</Box>

				<Box marginLeft={2}>
					<Box
						borderStyle="round"
						borderColor={COLORS.border}
						paddingX={2}
						paddingY={1}
					>
						<Text color={COLORS.accent} bold>
							📧 Contact me (Press 6)
						</Text>
					</Box>
				</Box>
			</Box>

			<Box flexDirection="column" marginBottom={2}>
				<Text color={COLORS.accent} bold>
					🔗 Connect with me:
				</Text>
				<Box flexDirection="row" marginTop={1}>
					<Link url={SOCIAL_LINKS.github}>
						<Text color={COLORS.text}>🐙 GitHub</Text>
					</Link>
					<Text color={COLORS.muted}> • </Text>
					<Link url={SOCIAL_LINKS.linkedin}>
						<Text color={COLORS.text}>💼 LinkedIn</Text>
					</Link>
					<Text color={COLORS.muted}> • </Text>
					<Link url={SOCIAL_LINKS.twitter}>
						<Text color={COLORS.text}>🐦 Twitter</Text>
					</Link>
					<Text color={COLORS.muted}> • </Text>
					<Link url={`mailto:${SOCIAL_LINKS.email}`}>
						<Text color={COLORS.text}>📧 Email</Text>
					</Link>
				</Box>
			</Box>

			<Box
				borderStyle="double"
				borderColor={COLORS.accent}
				padding={1}
				marginTop={2}
			>
				<Gradient name="fruit">
					<Text bold>
						✨ Welcome to my terminal portfolio! Navigate using numbers 1-6
					</Text>
				</Gradient>
			</Box>
		</Box>
	);
};

export default Header;
