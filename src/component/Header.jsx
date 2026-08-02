// frontend/src/component/Header.jsx
import React, { useState, useEffect, useRef } from 'react';

export default function Header({ currentTheme, onThemeChange }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const closeMenu = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener("mousedown", closeMenu);
    return () => document.removeEventListener("mousedown", closeMenu);
  }, []);

  const DRIVE_LINK = "https://drive.google.com/file/d/14zxkZzwJrGUqEcmeXVy-1_kI9wuLK1qL/view?usp=drive_link";

  const navLinks = [
    { target: "#about", label: "About" },
    { target: "#projects", label: "Projects" },
    { target: "#certification", label: "Certifications"},
    { target: "#contact", label: "Contact"},
    { target: DRIVE_LINK, label: "Resume", isExternal: true }

  ];

  return (
    <nav className="sticky top-0 flex justify-between items-center h-20 px-6 sm:px-10 border-b border-[var(--border)] z-50 bg-[var(--bg)]/90 backdrop-blur-lg w-full">
      {/* BRAND IDENTITY */}
      <a href="#about" className="text-xl font-bold tracking-tight text-[var(--text-h)] flex items-center gap-2 select-none shrink-0">
        <span className="bg-[var(--accent)] text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black shadow-xs">SB</span>
        <span className="font-mono tracking-tight text-lg">Sourav.dev</span>
      </a>

      <div className="flex items-center gap-6">
        {/* DESKTOP NAV ANCHORS */}
        <ul className="hidden md:flex items-center space-x-1 justify-stretch lg:space-x-2 font-medium text-sm">
          {navLinks.map((link) => (
            <li key={link.target}>
              <a 
                href={link.target}
                target={link.isExternal ? "_blank" : "_self"}
                rel={link.isExternal ? "noreferrer" : undefined}
                className="flex items-center gap-2 px-2 py-2 rounded-lg transition-all text-[var(--text)] hover:text-[var(--text-h)] hover:bg-[var(--code-bg)]"
              >
                <i className={`bi ${link.icon}`}></i>
                <span>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* THEME PILLS */}
        <div className="hidden lg:flex bg-[var(--code-bg)] p-1 rounded-lg border border-[var(--border)] text-xs font-bold shadow-xs">
          {["light", "dark", "system"].map((t) => (
            <button
              key={t}
              onClick={() => onThemeChange(t)}
              className={`px-3 py-1 rounded-lg transition-all capitalize cursor-pointer ${currentTheme === t ? "bg-[var(--bg)] text-[var(--accent)] shadow-xs font-extrabold" : "text-gray-400 hover:text-[var(--text-h)]"}`}
            >
              {t === "system" ? "Sys" : t}
            </button>
          ))}
        </div>

        {/* MOBILE RESPONSIVE HAMBURGER */}
        <div className="lg:hidden relative" ref={menuRef}>
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="p-2 border border-[var(--border)] rounded-lg text-lg hover:bg-[var(--code-bg)] transition h-10 w-10 flex items-center justify-center cursor-pointer text-[var(--text-h)]"
          >
            <i className={`bi ${menuOpen ? 'bi-x-lg text-sm' : 'bi-three-dots'}`}></i>
          </button>

          {menuOpen && (
            <div className="absolute right-0 top-12 w-48 rounded-xl bg-[var(--bg)] p-1.5 shadow-xl border border-[var(--border)] text-left animate-in fade-in slide-in-from-top-2 duration-150">
              {navLinks.map((link) => (
                <a 
                  key={link.target} 
                  href={link.target}
                  target={link.isExternal ? "_blank" : "_self"}
                  rel={link.isExternal ? "noreferrer" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-[var(--code-bg)] hover:text-[var(--text-h)] transition"
                >
                  <i className={`bi ${link.icon} text-gray-400`}></i> {link.label}
                </a>
              ))}
              <div className="border-t border-[var(--border)] my-1.5 pt-1.5 px-3">
                <p className="text-[10px] uppercase font-bold tracking-wider text-gray-400 mb-1.5">Display Mode</p>
                <div className="grid grid-cols-3 gap-1 bg-[var(--code-bg)] p-0.5 rounded-lg text-center text-[11px] font-bold">
                  {["light", "dark", "system"].map((t) => (
                    <button key={t} onClick={() => onThemeChange(t)} className={`py-1 rounded capitalize cursor-pointer ${currentTheme === t ? 'bg-[var(--bg)] text-[var(--accent)] font-extrabold shadow-xs' : 'text-gray-400'}`}>
                      {t === "system" ? "Sys" : t}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}