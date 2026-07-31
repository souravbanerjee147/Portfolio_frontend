// frontend/src/component/Body/Certification.jsx

// ======================================= new code snippet =======================================

import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Certification() {
  const [credentials, setCredentials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8080/api/certifications')
      .then((res) => {
        if (res.data && res.data.success) {
          setCredentials(res.data.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading certifications:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20 font-mono text-xs tracking-widest text-gray-400">
        LOADING CREDENTIALS MATRIX...
      </div>
    );
  }

  return (
    <div className="px-6 sm:px-10 py-12 max-w-2xl mx-auto w-full text-left animate-in fade-in duration-300 flex-grow">
      <div className="mb-8 border-b border-[var(--border)] pb-4">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[var(--text-h)] tracking-tight">
          Certifications & Experience
        </h2>
        <p className="text-xs text-gray-400 mt-1">
          Timeline logs of verified professional credentials and milestones.
        </p>
      </div>

      <div className="relative border-l-2 border-[var(--border)] ml-2 space-y-8 py-2">
        {credentials.map((cert) => (
          <div key={cert._id} className="relative pl-6 group">
            <div className="absolute -left-[7px] top-1.5 bg-[var(--bg)] border-2 border-[var(--border)] group-hover:border-[var(--accent)] w-3 h-3 rounded-full transition-colors duration-200"></div>

            <div className="space-y-1.5">
              <span className="text-[10px] font-mono font-bold text-[var(--accent)] bg-[var(--accent-bg)] border border-[var(--accent-border)] px-2 py-0.5 rounded uppercase tracking-wide">
                {cert.date}
              </span>
              <h3 className="text-base font-bold text-[var(--text-h)] tracking-tight">
                {cert.title}
              </h3>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-tight">
                {cert.organization}
              </p>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-tight">
                {cert.date} || {cert.Affiliation}
              </p>
              <p className="text-xs sm:text-sm text-[var(--text)] font-normal leading-relaxed">
                {cert.details}
              </p>

              {/* PDF Certificate Button - ADD THIS SECTION */}
              {cert.certificateUrl && (
                <div className="mt-2">
                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-medium text-[var(--accent)] hover:text-[var(--accent-hover)] border border-[var(--accent-border)] px-3 py-1.5 rounded-lg transition-all duration-200 hover:bg-[var(--accent-bg)]"
                    onClick={() => console.log("Opening PDF:", cert.certificateUrl)} // ← Add this
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
          </div>
        ))}
      </div>
    </div>
  );
}