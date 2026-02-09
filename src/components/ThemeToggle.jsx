import React from "react";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={`Passer au mode ${theme === "light" ? "sombre" : "clair"}`}
            title={`Passer au mode ${theme === "light" ? "sombre" : "clair"}`}
        >
            {theme === "light" ? "🌙" : "☀️"}
        </button>
    );
};

export default ThemeToggle;
