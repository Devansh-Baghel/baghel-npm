#!/usr/bin/env node
import React, { useState, useEffect } from "react";
import { render, Box, Text, useInput } from "ink";
import Gradient from "ink-gradient";
import BigText from "ink-big-text";
import Header from "./components/Header.js";
import Projects from "./components/Projects.js";
import TechStack from "./components/TechStack.js";
import GitHubActivity from "./components/GitHubActivity.js";
import GitRoll from "./components/GitRoll.js";
import Contact from "./components/Contact.js";
import Navigation from "./components/Navigation.js";
import { COLORS } from "./utils/colors.js";

type Section = "home" | "projects" | "tech" | "github" | "gitroll" | "contact";

const App: React.FC = () => {
	const [currentSection, setCurrentSection] = useState<Section>("home");
	const [showWelcome, setShowWelcome] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => setShowWelcome(false), 2000);
		return () => clearTimeout(timer);
	}, []);

	useInput((input, key) => {
		if (key.escape || input === "q") {
			process.exit(0);
		}

		switch (input) {
			case "1":
				setCurrentSection("home");
				break;
			case "2":
				setCurrentSection("projects");
				break;
			case "3":
				setCurrentSection("tech");
				break;
			case "4":
				setCurrentSection("github");
				break;
			case "5":
				setCurrentSection("gitroll");
				break;
			case "6":
				setCurrentSection("contact");
				break;
		}
	});

	if (showWelcome) {
		return (
			<Box
				flexDirection="column"
				alignItems="center"
				justifyContent="center"
				minHeight={20}
			>
				<Gradient name="rainbow">
					<BigText text="BAGHEL.DEV" />
				</Gradient>
				<Text color={COLORS.accent}>Loading terminal portfolio...</Text>
			</Box>
		);
	}

	const renderSection = () => {
		switch (currentSection) {
			case "home":
				return <Header />;
			case "projects":
				return <Projects />;
			case "tech":
				return <TechStack />;
			case "github":
				return <GitHubActivity />;
			case "gitroll":
				return <GitRoll />;
			case "contact":
				return <Contact />;
			default:
				return <Header />;
		}
	};

	return (
		<Box flexDirection="column" minHeight={30}>
			<Navigation currentSection={currentSection} />
			<Box marginTop={1}>{renderSection()}</Box>
			<Box
				marginTop={2}
				borderStyle="single"
				borderColor={COLORS.border}
				padding={1}
			>
				<Text color={COLORS.muted}>
					Use numbers 1-6 to navigate • Press 'q' or ESC to quit • Visit
					https://baghel.dev for web version
				</Text>
			</Box>
		</Box>
	);
};

render(<App />);
