import React from "react";
import LightButton from "../assets/website/light-mode-button.png";
import DarkButton from "../assets/website/dark-mode-button.png";
import { useTheme } from "../customHooks/ThemeProvider";

export default function DarkMode() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <img
        className="w-12 cursor-pointer"
        onClick={toggleTheme}
        src={theme === "dark" ? DarkButton : LightButton}
      />
    </div>
  );
}
