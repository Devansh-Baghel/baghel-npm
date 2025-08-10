// src/index.tsx
import React, { useState } from "react";
import { render, Box, useInput } from "ink";
import Header from "./components/Header";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Github from "./components/GitHubActivity";
import Navigation from "./components/Navigation";
import Terminal from "./components/Terminal";
import Loader from "./components/Loader";

const App = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [currentSection, setCurrentSection] = useState("home");

	const sections = ["home", "projects", "tech", "github"];

	useInput((input, key) => {
		if (isLoading) return; // Disable input during loading

		if (key.tab) {
			const currentIndex = sections.indexOf(currentSection);
			const nextIndex = (currentIndex + 1) % sections.length;
			setCurrentSection(sections[nextIndex]);
		} else if (key.shift && key.tab) {
			const currentIndex = sections.indexOf(currentSection);
			const prevIndex = (currentIndex - 1 + sections.length) % sections.length;
			setCurrentSection(sections[prevIndex]);
		} else if (key.escape) {
			process.exit(0);
		}
	});

	const renderCurrentSection = () => {
		switch (currentSection) {
			case "home":
				return <Header />;
			case "projects":
				return <Projects />;
			case "tech":
				return <TechStack />;
			case "github":
				return <Github />;
			default:
				return <Header />;
		}
	};

	// Show loader during startup
	if (isLoading) {
		return <Loader onComplete={() => setIsLoading(false)} />;
	}

	// Show main portfolio after loading
	return (
		<Box flexDirection="column">
			<Navigation currentSection={currentSection} />

			<Box
				borderStyle="double"
				borderColor="lime"
				padding={2}
				flexDirection="column"
			>
				<Box overflow="hidden">
					{renderCurrentSection()}
				</Box>
			</Box>

			<Terminal
				onSectionChange={setCurrentSection}
				currentSection={currentSection}
			/>
		</Box>
	);
};

render(<App />);
