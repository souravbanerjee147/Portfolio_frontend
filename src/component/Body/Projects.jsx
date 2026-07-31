// // frontend/src/component/Body/Projects.jsx
// import React from 'react';

// export default function Projects() {
//   const codeShowcases = [
//     {
//       title: "Swiggy Infrastructure Clone",
//       desc: "An end-to-end food ordering platform dashboard interface. Engineered clean dynamic restaurant menus filtering, persistent custom cart management systems state flows, and modular API backend endpoints routing.",
//       stack: ["React", "Redux Toolkit", "Tailwind v4", "Node.js", "MongoDB"],
//       git: "https://github.com/souravbanerjee147/Swiggy_clone"
//     },
//     {
//       title: "Online Digital Library Controller",
//       desc: "A clean architectural tracking inventory engine designed to record book indexing metrics, monitor complex search streams, and handle resource borrow tracking records securely.",
//       stack: ["React", "Node.js", "Express", "Mongoose"],
//       git: "https://github.com/souravbanerjee147"
//     }
//   ];

//   return (
//     <div className="px-6 sm:px-10 py-12 max-w-4xl mx-auto w-full text-left animate-in fade-in duration-300 flex-grow">
//       <div className="mb-8 border-b border-[var(--border)] pb-4">
//         <h2 className="text-xl sm:text-2xl font-extrabold text-[var(--text-h)] tracking-tight">Featured Projects</h2>
//         <p className="text-xs text-gray-400 mt-1">A curated directory of software engineering projects and technical repositories.</p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//         {codeShowcases.map((project, index) => (
//           <div key={index} className="bg-[var(--bg)] border border-[var(--border)] p-5 rounded-2xl shadow-xs flex flex-col justify-between hover:border-[var(--accent-border)] transition-all duration-300">
//             <div className="space-y-4">
//               <div className="flex justify-between items-start">
//                 <h3 className="text-base sm:text-lg font-bold text-[var(--text-h)] tracking-tight">{project.title}</h3>
//                 <a href={project.git} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[var(--accent)] transition text-lg"><i className="bi bi-github"></i></a>
//               </div>
//               <p className="text-xs sm:text-sm text-[var(--text)] leading-relaxed font-normal">{project.desc}</p>

//               <div className="flex flex-wrap gap-1.5 pt-1">
//                 {project.stack.map((tech) => (
//                   <span key={tech} className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[var(--code-bg)] text-[var(--text-h)] border border-[var(--border)] uppercase tracking-wide">
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }











// ============================================================== new code ==============================================================


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// export default function Projects() {
//   const [codeShowcases, setCodeShowcases] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // useEffect(() => {
//   //   // Connects straight to your clean backend router endpoint matrix
//   //   axios.get('http://localhost:8080/api/projects')
//   //     .then((res) => {
//   //       if (res.data && res.data.success) {
//   //         setCodeShowcases(res.data.data);
//   //       }
//   //       setLoading(false);
//   //     })
//   //     .catch((err) => {
//   //       console.error("Error pulling database records:", err);
//   //       setLoading(false);
//   //     });
//   // }, []);


// // ====================================== new integration dode ============================================
// //   useEffect(() => {
// //   // Connects straight to your clean backend router endpoint matrix
// //   axios.get('http://localhost:8080/api/projects')
// //     .then((res) => {
// //       // FIXED: Added check for your backend's specific "Project Found is" string key
// //       if (res.data) {
// //         if (res.data["Project Found is"]) {
// //           setCodeShowcases(res.data["Project Found is"]);
// //         } else if (res.data.success && res.data.data) {
// //           setCodeShowcases(res.data.data);
// //         }
// //       }
// //       setLoading(false);
// //     })
// //     .catch((err) => {
// //       console.error("Error pulling database records:", err);
// //       setLoading(false);
// //     });
// // }, []);




// // ========================================== new code ===============================================
// // Inside frontend/src/component/Body/Projects.jsx

// useEffect(() => {
//   // Connects straight to your backend port 8080 process channel
//   axios.get('http://localhost:8080/api/projects')
//     .then((res) => {
//         if (res.data && res.data.success) {
//             setCodeShowcases(res.data.data); // Changed from 'Project Found is' to 'data'
//         } else {
//             setLoading(false);
//         }
//     })
//     .catch((err) => {
//       console.error("Error pulling database records:", err);
//       setLoading(false);
//     });
// }, []);

//   if (loading) {
//     return (
//       <div className="text-center py-20 font-mono text-xs tracking-widest text-gray-400">
//         FETCHING LIVE REPOSITORIES FROM ATLAS...
//       </div>
//     );
//   }

//   return (
//     <div className="px-6 sm:px-10 py-12 max-w-4xl mx-auto w-full text-left animate-in fade-in duration-300 flex-grow">
//       <div className="mb-8 border-b border-[var(--border)] pb-4">
//         <h2 className="text-xl sm:text-2xl font-extrabold text-[var(--text-h)] tracking-tight">Featured Projects</h2>
//         <p className="text-xs text-gray-400 mt-1">A curated directory of software engineering projects and technical repositories.</p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//         {codeShowcases.map((project) => (
//           <div key={project._id} className="bg-[var(--bg)] border border-[var(--border)] p-5 rounded-2xl shadow-xs flex flex-col justify-between hover:border-[var(--accent-border)] transition-all duration-300">
//             <div className="space-y-4">
//               <div className="flex justify-between items-start">
//                 <h3 className="text-base sm:text-lg font-bold text-[var(--text-h)] tracking-tight">{project.title}</h3>
//                 <a href={project.git} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[var(--accent)] transition text-lg">
//                   <i className="bi bi-github"></i>
//                 </a>
//               </div>
//               <p className="text-xs sm:text-sm text-[var(--text)] leading-relaxed font-normal">{project.desc}</p>

//               <div className="flex flex-wrap gap-1.5 pt-1">
//                 {(project.stack || []).map((tech) => (
//                   <span key={tech} className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[var(--code-bg)] text-[var(--text-h)] border border-[var(--border)] uppercase tracking-wide">
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }












// ================================================== new code 2.1=======================================================



import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Projects() {
  const [codeShowcases, setCodeShowcases] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   axios.get('http://localhost:8080/api/projects')
  //   .then((res) => {
  //     if (res.data && res.data.success) {
  //       setCodeShowcases(res.data.data);
  //     } else {
  //       setLoading(false);
  //     }
  //   })
  //   .catch((err) => {
  //     console.error("Error pulling database records:", err);
  //     setLoading(false);
  //   });
  // }, []);


// ============================================= new code ==============================================================


  useEffect(() => {
    axios.get('http://localhost:8080/api/projects')
      .then((res) => {
        console.log("API Response:", res.data); 
        if (res.data && res.data.data) {
          setCodeShowcases(res.data.data);
        } 
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error pulling database records:", err);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return (
      <div className="text-center py-20 font-mono text-xs tracking-widest text-gray-400">
        FETCHING LIVE REPOSITORIES FROM ATLAS...
      </div>
    );
  }

  return (
    <div className="px-6 sm:px-10 py-12 max-w-4xl mx-auto w-full text-left animate-in fade-in duration-300 flex-grow">
      <div className="mb-8 border-b border-[var(--border)] pb-4">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[var(--text-h1)] tracking-tight">Featured Projects</h2>
        <p className="text-xs text-gray-400 mt-1">A curated directory of software engineering projects and technical resources.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {codeShowcases.length > 0 ? (
          codeShowcases.map((project) => (
            <div key={project._id} className="bg-[var(--bg)] border border-[var(--border)] p-5 rounded-2xl shadow-xs flex flex-col justify-between hover:border-[var(--accent-border)] transition-all duration-300">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-base sm:text-lg font-bold text-[var(--text-h)] tracking-tight">{project.title}</h3>
                  {project.git && (
                    <a href={project.git} target="_blank" rel="noopener noreferrer" className="text-xs underline">read more</a>
                  )}
                </div>
                <p className="text-sm text-gray-500">{project.desc}</p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.stack && Array.isArray(project.stack) ? (
                    project.stack.map((tech) => (
                      <span key={tech} className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[var(--code-bg)] text-[var(--text-h)] border border-[var(--border)] uppercase tracking-wide">
                        {tech}
                      </span>
                    ))
                  ) : null}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-2 text-center text-gray-400 py-10">No projects found</div>
        )}
      </div>
    </div>
  );
}