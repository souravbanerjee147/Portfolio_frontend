// Skills.jsx 








import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Skills() {
  const [skillCategories, setSkillCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://portfolio-backend-262i.onrender.com/api/skills')
      .then((res) => {
        if (res.data && res.data.success) setSkillCategories(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching skills:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-10 font-mono text-xs text-gray-400">LOADING TECHNICAL STACK...</div>;

  return (
    <div className="px-6 sm:px-10 py-12 max-w-4xl mx-auto w-full text-left animate-in fade-in duration-300">
      <div className="mb-8 border-b border-[var(--border)] pb-4">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[var(--text-h)] tracking-tight">Technical Stack</h2>
        <p className="text-xs text-gray-400 mt-1">Technologies and tools managed across my development stack.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skillCategories.map((cat) => (
          <div key={cat._id} className="bg-[var(--bg)] border border-[var(--border)] p-5 rounded-2xl shadow-xs space-y-3">
            <h3 className="text-sm font-bold text-[var(--accent)] uppercase tracking-wider">{cat.category}</h3>
            <div className="flex flex-wrap gap-2">
              {(cat.skills || []).map((skill) => (
                <span key={skill} className="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-[var(--code-bg)] text-[var(--text-h)] border border-[var(--border)] hover:border-[var(--accent-border)] transition">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}