// src/components/Header.tsx
import React from "react";
import { Text, Box } from "ink";
import BigText from "ink-big-text";
import Gradient from "ink-gradient";

const Header = () => (
	<Box flexDirection="column" alignItems="center">
		<Gradient colors={["#84cc16", "#bef264"]}>
			<BigText text="Devansh Baghel" />
		</Gradient>
		<Text color="cyan">Fullstack Developer</Text>
		<Text>Hello there 👋, I build full-stack web apps with modern tools.</Text>
	</Box>
);

export default Header;
