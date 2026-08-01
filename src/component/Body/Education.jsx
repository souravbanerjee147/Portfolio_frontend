// Education.jsx


import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Education() {
  const [educationList, setEducationList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://portfolio-backend-262i.onrender.com/api/education')
      .then((res) => {
        if (res.data && res.data.success) setEducationList(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching education records:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-10 font-mono text-xs text-gray-400">LOADING ACADEMIC RECORDS...</div>;

  return (
    <div className="px-6 sm:px-10 py-12 max-w-2xl mx-auto w-full text-left animate-in fade-in duration-300">
      <div className="mb-8 border-b border-[var(--border)] pb-4">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[var(--text-h)] tracking-tight">Education</h2>
        <p className="text-xs text-gray-400 mt-1">Academic credentials and degree background.</p>
      </div>

      <div className="space-y-6">
        {educationList.map((edu) => (
          <div key={edu._id} className="bg-[var(--bg)] border border-[var(--border)] p-5 rounded-2xl shadow-xs space-y-2 hover:border-[var(--accent-border)] transition">
            <div className="flex justify-between items-start flex-wrap gap-2">
              <h3 className="text-base font-bold text-[var(--text-h)] tracking-tight">{edu.degree}</h3>
              <span className="text-[10px] font-mono font-bold text-[var(--accent)] bg-[var(--accent-bg)] border border-[var(--accent-border)] px-2 py-0.5 rounded uppercase tracking-wide">
                {edu.duration}
              </span>
            </div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-tight">{edu.institution}</p>
            <p className="text-xs sm:text-sm text-[var(--text)] leading-relaxed pt-1">{edu.details}</p>
            {edu.url && (
              <div className="mt-2">
                <a
                  href={edu.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium text-[var(--accent)] hover:text-[var(--accent-hover)] border border-[var(--accent-border)] px-3 py-1.5 rounded-lg transition-all duration-200 hover:bg-[var(--accent-bg)]"
                  onClick={() => console.log("Opening PDF:", edu.url)} // ← Add this
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  View Certificate
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

