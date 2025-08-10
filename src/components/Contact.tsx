import React, { useState } from "react";
import { Box, Text, useInput } from "ink";
import Gradient from "ink-gradient";
import Link from "ink-link";
import { COLORS, SOCIAL_LINKS } from "../utils/colors.js";

const Contact: React.FC = () => {
	const [selectedMethod, setSelectedMethod] = useState(0);
	const contactMethods = [
		{
			emoji: "📧",
			label: "Email",
			value: SOCIAL_LINKS.email,
			action: `mailto:${SOCIAL_LINKS.email}`,
		},
		{
			emoji: "💼",
			label: "LinkedIn",
			value: "@devanshbaghel",
			action: SOCIAL_LINKS.linkedin,
		},
		{
			emoji: "🐦",
			label: "Twitter",
			value: "@DevanshBaghel5",
			action: SOCIAL_LINKS.twitter,
		},
		{
			emoji: "🐙",
			label: "GitHub",
			value: "@devansh-baghel",
			action: SOCIAL_LINKS.github,
		},
	];

	useInput((input, key) => {
		if (key.upArrow && selectedMethod > 0) {
			setSelectedMethod(selectedMethod - 1);
		} else if (key.downArrow && selectedMethod < contactMethods.length - 1) {
			setSelectedMethod(selectedMethod + 1);
		} else if (key.return) {
			// In a real implementation, you'd open the URL
			console.log(`Opening: ${contactMethods[selectedMethod].action}`);
		}
	});

	return (
		<Box flexDirection="column" paddingX={2}>
			<Box marginBottom={3}>
				<Gradient name="passion">
					<Text bold fontSize={16}>
						📞 Contact Me
					</Text>
				</Gradient>
			</Box>

			<Box
				flexDirection="column"
				borderStyle="double"
				borderColor={COLORS.accent}
				padding={3}
			>
				<Box marginBottom={3}>
					<Text color={COLORS.text}>
						Let's connect! I'm always excited to discuss new opportunities,
						collaborate on projects, or just chat about technology.
					</Text>
				</Box>

				<Box flexDirection="column" marginBottom={3}>
					<Text color={COLORS.accent} bold marginBottom={2}>
						📬 Get in touch via:
					</Text>

					{contactMethods.map((method, index) => (
						<Box
							key={index}
							borderStyle={selectedMethod === index ? "double" : "single"}
							borderColor={
								selectedMethod === index ? COLORS.accent : COLORS.border
							}
							backgroundColor={
								selectedMethod === index ? COLORS.bgLight : undefined
							}
							padding={1}
							marginBottom={1}
						>
							<Link url={method.action}>
								<Text
									color={selectedMethod === index ? COLORS.accent : COLORS.text}
									bold
								>
									{method.emoji} {method.label}: {method.value}
								</Text>
							</Link>
						</Box>
					))}
				</Box>

				<Box
					borderStyle="round"
					borderColor="green"
					padding={2}
					backgroundColor="green"
					justifyContent="center"
					marginBottom={2}
				>
					<Text color="black" bold>
						⚡ Available for freelance work and full-time opportunities!
					</Text>
				</Box>

				<Box flexDirection="column">
					<Text color={COLORS.accent} bold marginBottom={1}>
						🌍 Location & Availability:
					</Text>
					<Text color={COLORS.text}>📍 India (Remote-friendly)</Text>
					<Text color={COLORS.text}>⏰ UTC+5:30 timezone</Text>
					<Text color={COLORS.text}>✅ Open to global opportunities</Text>
				</Box>
			</Box>

			<Box
				marginTop={2}
				padding={1}
				borderStyle="single"
				borderColor={COLORS.border}
			>
				<Text color={COLORS.muted}>
					💡 Use arrow keys to navigate contact options • Press Enter to open
				</Text>
			</Box>
		</Box>
	);
};

export default Contact;
