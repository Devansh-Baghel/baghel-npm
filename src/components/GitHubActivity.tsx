import React, { useState, useEffect } from "react";
import { Box, Text } from "ink";
import Spinner from "ink-spinner";
import Gradient from "ink-gradient";
import Link from "ink-link";
import { COLORS } from "../utils/colors.js";

interface GitHubData {
	totalCommits: number;
	currentStreak: number;
	longestStreak: number;
	contributionsThisYear: number;
}

const GitHubActivity: React.FC = () => {
	const [loading, setLoading] = useState(true);
	const [gitHubData, setGitHubData] = useState<GitHubData>({
		totalCommits: 1250,
		currentStreak: 15,
		longestStreak: 47,
		contributionsThisYear: 420,
	});

	useEffect(() => {
		// Simulate API call
		const timer = setTimeout(() => {
			setLoading(false);
		}, 2000);
		return () => clearTimeout(timer);
	}, []);

	const renderCommitGraph = () => {
		const weeks = 52;
		const days = 7;
		const graph = [];

		for (let week = 0; week < weeks; week++) {
			const weekRow = [];
			for (let day = 0; day < days; day++) {
				const intensity = Math.floor(Math.random() * 5);
				const colors = ["#161B22", "#0E4429", "#006D32", "#26A641", "#39D353"];
				const char = intensity === 0 ? "⬛" : "🟩";
				weekRow.push(char);
			}
			graph.push(weekRow.join(""));
		}

		return graph;
	};

	if (loading) {
		return (
			<Box flexDirection="column" paddingX={2}>
				<Box marginBottom={2}>
					<Gradient name="atlas">
						<Text bold fontSize={16}>
							📊 GitHub Activity
						</Text>
					</Gradient>
				</Box>
				<Box justifyContent="center" alignItems="center" minHeight={10}>
					<Text color={COLORS.accent}>
						<Spinner type="dots" /> Loading GitHub activity...
					</Text>
				</Box>
			</Box>
		);
	}

	return (
		<Box flexDirection="column" paddingX={2}>
			<Box marginBottom={3}>
				<Gradient name="atlas">
					<Text bold fontSize={16}>
						📊 GitHub Activity
					</Text>
				</Gradient>
			</Box>

			<Box flexDirection="row" marginBottom={3}>
				<Box
					flexDirection="column"
					borderStyle="round"
					borderColor="green"
					padding={2}
					marginRight={2}
				>
					<Text color="green" bold>
						🔥 Current Streak
					</Text>
					<Text color={COLORS.text} bold fontSize={14}>
						{gitHubData.currentStreak} days
					</Text>
				</Box>

				<Box
					flexDirection="column"
					borderStyle="round"
					borderColor="yellow"
					padding={2}
					marginRight={2}
				>
					<Text color="yellow" bold>
						📈 This Year
					</Text>
					<Text color={COLORS.text} bold fontSize={14}>
						{gitHubData.contributionsThisYear} commits
					</Text>
				</Box>

				<Box
					flexDirection="column"
					borderStyle="round"
					borderColor="magenta"
					padding={2}
				>
					<Text color="magenta" bold>
						🏆 Best Streak
					</Text>
					<Text color={COLORS.text} bold fontSize={14}>
						{gitHubData.longestStreak} days
					</Text>
				</Box>
			</Box>

			<Box flexDirection="column" marginBottom={3}>
				<Text color={COLORS.accent} bold marginBottom={1}>
					📅 Contribution Graph (2024-2025):
				</Text>
				<Box
					borderStyle="single"
					borderColor={COLORS.border}
					padding={1}
					flexDirection="column"
				>
					{renderCommitGraph()
						.slice(0, 8)
						.map((week, index) => (
							<Text key={index} color="green">
								{week}
							</Text>
						))}
					<Text color={COLORS.muted} marginTop={1}>
						🟩 High activity ⬛ Low activity
					</Text>
				</Box>
			</Box>

			<Box
				borderStyle="round"
				borderColor={COLORS.accent}
				padding={2}
				justifyContent="center"
			>
				<Link url="https://github.com/devansh-baghel">
					<Text color={COLORS.accent} bold>
						🔗 Visit my GitHub profile
					</Text>
				</Link>
			</Box>
		</Box>
	);
};

export default GitHubActivity;
