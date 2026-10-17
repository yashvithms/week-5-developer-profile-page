import { useState } from "react";
import About from "../About";
import Skills from "../Skills";
import Projects from "../Projects";
import Contact from "../Contact";
import "./App.css";

const skills = [
  { name: "Python", category: "Languages", icon: "PY" },
  { name: "JavaScript", category: "Languages", icon: "JS" },
  { name: "React", category: "Frontend", icon: "⚛" },
  { name: "Flask", category: "Backend", icon: "F" },
  { name: "SQLite", category: "Database", icon: "DB" },
  { name: "Tailwind", category: "Frontend", icon: "TW" },
  { name: "Git & GitHub", category: "Tools", icon: "GH" },
  { name: "AI / ML", category: "Specialty", icon: "AI" },
];

const projects = [
  {
    title: "Number Guessing Game",
    description:
      "A fun browser game where the player guesses a random number, gets hints, and tries to win within a limited number of attempts.",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Career Portfolio Website",
    description:
      "A responsive personal portfolio built with HTML and CSS to showcase projects, skills, and contact details.",
    stack: ["HTML", "CSS"],
  },
  {
    title: "Smart Task Tracker",
    description:
      "A task manager built with HTML and JavaScript DOM manipulation to organize and manage daily tasks.",
    stack: ["HTML", "JavaScript", "DOM Manipulation"],
  },
];

function App() {
  const [theme, setTheme] = useState("dark");
  const [activeSkill, setActiveSkill] = useState("All");

  const categories = ["All", ...new Set(skills.map((skill) => skill.category))];
  const filteredSkills =
    activeSkill === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeSkill);

  return (
    <div className={`portfolio ${theme}`}>
      <header className="topbar">
        <div className="brand">Yashvith</div>
        <button
          type="button"
          className="theme-toggle"
          onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? "Light mode" : "Dark mode"}
        </button>
      </header>

      <main>
        <About
          name="Yashvith M S"
          role="2nd-Year B.Tech Student | AIML at NMAMIT"
          description="Hi, I'm Yashvith M S, a second-year Artificial Intelligence and Machine Learning engineering student at NMAMIT. I'm passionate about programming, web development, and exploring AI technologies. I enjoy building practical projects, learning new technologies, and improving my problem-solving skills. Currently, I'm strengthening my skills in Python, React, and full-stack web development while working on projects that turn ideas into useful solutions."
        />

        <Skills
          skills={filteredSkills}
          categories={categories}
          activeSkill={activeSkill}
          setActiveSkill={setActiveSkill}
        />

        <Projects projects={projects} />

        <Contact
          email="yashvithms@example.com"
          location="Mangaluru, Karnataka"
          github="https://github.com"
          linkedin="https://linkedin.com"
        />
      </main>
    </div>
  );
}

export default App;