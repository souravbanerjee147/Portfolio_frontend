// Footer.jsx



// frontend/src/component/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="py-6 border-t border-[var(--border)] flex flex-col items-center justify-center gap-3 px-6 text-xs text-gray-400 font-medium select-none bg-[var(--bg)]">
      <span>&copy; {new Date().getFullYear()} Sourav Banerjee. All rights reserved.</span>

      <span className="text-gray-600">•</span>

      <div className="flex items-center gap-4">
        <a 
          href="https://github.com/souravbanerjee147" 
          target="_blank" 
          rel="noreferrer" 
          className="flex items-center gap-1 text-gray-400 hover:text-[var(--text-h)] transition"
        >
          <i className="bi bi-github text-sm"></i>
          <span>GitHub</span>
        </a>

        <a href="https://www.linkedin.com/in/sourav-banerjee-8372aa232/" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-gray-400 hover:text-[var(--text-h)] transition">
          <i className="bi bi-linkedin text-sm"></i>
          <span>LinkedIn</span>
        </a>
      </div>
    </footer>
  );
}