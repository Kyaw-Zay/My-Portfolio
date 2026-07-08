import { useState, useEffect } from "react";
import Stars from "./components/Stars";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

const defaultConfig = {
  background_color: "#f9fafb",
  surface_color: "#ffffff",
  text_color: "#1f2937",
  primary_action_color: "#8b5cf6",
  secondary_action_color: "#6366f1",
  font_family: "system-ui, -apple-system, sans-serif",
  font_size: 16,
  hero_name: "Kyaw Zay Ya (Ali)",
  hero_tagline:
    "A Developer Who Believes in Stories, Choices, and Possibilities",
  about_title: "About Me",
  about_text:
    "I'm a fresh graduate with a strong interest in web development. I have experience with HTML, CSS, JavaScript, Python, React, Nextjs and MySQL through academic and personal projects. I'm eager to start my career, gain real-world experience, and grow as a software developer.",
  projects_title: "My Work",
  skills_title: "What I Bring",
  contact_title: "Let's Connect",
  footer_quote: "I can be anyone — and still be myself.",
};

function App() {
  const [config] = useState(defaultConfig);
  const [isDarkMode, setIsDarkMode] = useState(true); // DEFAULT: true

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.setAttribute(
      "data-theme",
      newMode ? "dark" : "light"
    );
  };

  const updateThemeColors = (darkMode) => {
    const root = document.documentElement;
    if (darkMode) {
      root.style.setProperty("--bg-primary", "#0f172a");
      root.style.setProperty("--bg-secondary", "#1e293b");
      root.style.setProperty("--text-primary", "#f1f5f9");
      root.style.setProperty("--text-secondary", "#94a3b8");
      root.style.setProperty("--border-color", "#334155");
    } else {
      root.style.setProperty("--bg-primary", config.background_color);
      root.style.setProperty("--bg-secondary", config.surface_color);
      root.style.setProperty("--text-primary", config.text_color);
      root.style.setProperty("--text-secondary", "#6b7280");
      root.style.setProperty("--border-color", "#e5e7eb");
    }
    root.style.setProperty("--accent-primary", config.primary_action_color);
    root.style.setProperty("--accent-secondary", config.secondary_action_color);
  };

  const observeSections = () => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    sections.forEach((section) => observer.observe(section));
  };

  useEffect(() => {
    document.body.classList.add("smooth-scroll");
    document.documentElement.setAttribute("data-theme", "dark"); // Force dark on load
    observeSections();
    updateThemeColors(true); // Apply dark mode immediately
  }, []);

  useEffect(() => {
    updateThemeColors(isDarkMode);
  }, [isDarkMode, config]);

  return (
    <div className="bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Stars />
      <Navigation
        config={config}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />
      <HeroSection config={config} />
      <AboutSection config={config} />
      <ProjectsSection config={config} />
      <SkillsSection config={config} />
      <ContactSection config={config} />
      <Footer config={config} />
    </div>
  );
}

export default App;
