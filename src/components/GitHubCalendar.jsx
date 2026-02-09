import React from "react";
import GitHubCalendar from "react-activity-calendar";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { useTheme } from "../context/ThemeContext";

const GitHubActivity = () => {
    const { theme } = useTheme();

    return (
        <div className="github-calendar-container" style={{ marginTop: "2rem", padding: "1rem", borderRadius: "var(--radius-md)", backgroundColor: "var(--card-bg)", boxShadow: "var(--shadow-sm)" }}>
            <h3 style={{ marginBottom: "1rem", textAlign: "center" }}>Activité GitHub</h3>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <GitHubCalendar
                    username="AmadouTidianeDiallo03"
                    colorScheme={theme === 'dark' ? 'dark' : 'light'}
                    blockMargin={5}
                    blockSize={15}
                    fontSize={14}
                >
                    <ReactTooltip html />
                </GitHubCalendar>
            </div>
        </div>
    );
};

export default GitHubActivity;
