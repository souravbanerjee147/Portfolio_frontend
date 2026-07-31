// Experience.jsx



import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Experience() {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8080/api/experience')
      .then((res) => {
        if (res.data && res.data.success) setExperiences(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching experience logs:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-10 font-mono text-xs text-gray-400">FETCHING WORK EXPERIENCE...</div>;

  return (
    <div className="px-6 sm:px-10 py-12 max-w-2xl mx-auto w-full text-left animate-in fade-in duration-300">
      <div className="mb-8 border-b border-[var(--border)] pb-4">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[var(--text-h)] tracking-tight">Experience</h2>
        <p className="text-xs text-gray-400 mt-1">Professional timeline and engineering roles.</p>
      </div>

      <div className="relative border-l-2 border-[var(--border)] ml-2 space-y-8 py-2">
        {experiences.map((exp) => (
          <div key={exp._id} className="relative pl-6 group">
            <div className="absolute -left-[7px] top-1.5 bg-[var(--bg)] border-2 border-[var(--border)] group-hover:border-[var(--accent)] w-3 h-3 rounded-full transition-colors duration-200"></div>
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono font-bold text-[var(--accent)] bg-[var(--accent-bg)] border border-[var(--accent-border)] px-2 py-0.5 rounded uppercase tracking-wide">
                {exp.duration}
              </span>
              <h3 className="text-base font-bold text-[var(--text-h)] tracking-tight">{exp.role}</h3>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-tight">{exp.company}</p>
              <p className="text-xs sm:text-sm text-[var(--text)] font-normal leading-relaxed">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}