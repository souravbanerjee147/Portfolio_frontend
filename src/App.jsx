// frontend/src/App.jsx
import React, { useState, useEffect } from 'react';
import Header from './component/Header.jsx';
import About from './component/Body/About.jsx';
import Projects from './component/Body/Projects.jsx';
import Certification from './component/Body/Certification.jsx';
import Contact from './component/Body/Contact.jsx';
import Footer from './component/Footer.jsx';
import Education from './component/Body/Education.jsx';
import Experience from './component/Body/Experience.jsx';
import Skills from './component/Body/Skills.jsx';
import './App.css';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("portfolio-theme") || "system");

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    
    // Enable smooth scrolling across the entire document
    root.classList.add("scroll-smooth");

    const applySystemTheme = () => {
      const systemMatchesDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.classList.add(systemMatchesDark ? "dark" : "light");
    };

    if (theme === "system") {
      applySystemTheme();
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      mediaQuery.addEventListener("change", applySystemTheme);
      return () => mediaQuery.removeEventListener("change", applySystemTheme);
    } else {
      root.classList.add(theme);
    }

    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] font-sans border-x border-[var(--border)] max-w-[1126px] mx-auto flex flex-col box-border transition-colors duration-300">
      <Header currentTheme={theme} onThemeChange={setTheme} />
      
      {/* Sections stacked sequentially on a single page */}
      <main className="flex flex-col">
        <section id="about" className="min-h-[calc(100vh-5rem)] flex items-center">
          <About />
        </section>

        {/* 1. TECHNICAL STACK SECTION */}
        <section id="skills" className="py-12 border-t border-[var(--border)]">
          <Skills />
        </section>
        
        {/* 2. PROJECTS SECTION*/}
        <section id="projects" className="py-12 border-t border-[var(--border)]">
          <Projects />
        </section>

        {/* 3. EXPERIENCE SECTION */}
        <section id="experience" className="py-12 border-t border-[var(--border)]">
          <Experience />
        </section>

        {/* 5. EDUCATION SECTION */}
        <section id="education" className="py-12 border-t border-[var(--border)]">
          <Education />
        </section>
        
        {/* 6. CERTIFICATION SECTION */}
        <section id="certification" className="py-12 border-t border-[var(--border)]">
          <Certification />
        </section>
        
        {/* 7. CONTACT SECTION */}
        <section id="contact" className="py-12 border-t border-[var(--border)]">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;