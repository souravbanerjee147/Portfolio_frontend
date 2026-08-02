// frontend/src/component/Body/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';
// IMPORT THE IMAGE HERE
// import profilePic from '../../assets/PHOTO-2026-07-28-23-35-32.jpg'

export default function About() {

    // const PROFILE_IMAGE_URL = "https://lh3.googleusercontent.com/d/1i-HqNeDq9-4wW0SkR6x8w7O_7YD4VJ8g";
    // const PROFILE_IMAGE_URL = "../../assets/PHOTO-2026-07-28-23-35-32.jpg";
    const profilePic = "/profile.jpg";

    return (
        <div className="flex-grow flex flex-col justify-center items-center px-6 md:px-16 py-16 text-center gap-6 animate-in fade-in duration-300 select-none max-w-3xl mx-auto">

            {/* SHIELD ICON EMBLEM */}
            {/* <div className="relative mb-2">
                <div className="bg-[var(--accent-bg)] border border-[var(--accent-border)] rounded-2xl w-16 h-16 flex items-center justify-center shadow-xs transform rotate-6 hover:rotate-0 transition-transform duration-300">
                    <i className="bi bi-terminal-box text-3xl text-[var(--accent)]"></i>
                </div>
            </div> */}


            <div className="relative mb-2">
                <div className="rounded-full w-28 h-28 sm:w-32 sm:h-32 overflow-hidden border-2 border-[var(--accent)] shadow-md hover:scale-105 transition-transform duration-300 p-1 bg-[var(--bg)]">
                    <img 
                        src={profilePic} 
                        alt="Sourav Banerjee" 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover rounded-full"
                    />
                </div>
            </div>

            <div className="space-y-3">
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[var(--accent)] bg-[var(--accent-bg)] px-3 py-1 rounded-full border border-[var(--accent-border)]">
                    Full-Stack Web Engineer
                </span>
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[var(--text-h)] leading-tight">
                    Hi, I'm Sourav Banerjee
                </h1>
            </div>

            <p className="text-sm sm:text-base text-[var(--text)] leading-relaxed max-w-xl mx-auto font-normal">
                I design and build responsive full-stack applications with modular architectures. Specializing in ecosystem design across **React, Redux Toolkit, Node.js, and MongoDB Atlas**, I focus on building crisp, semantic code pipelines.
            </p>

            {/* CALL TO ACTION LINK CLUSTER */}
      
            <div className="flex items-center gap-2 mt-2 font-bold text-xs">
                <a href="#projects" className="bg-[var(--accent)] text-white px-3 py-3 rounded-xl shadow-xs hover:opacity-95 transition-all active:scale-95 uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                        Explore Projects                   
                        <i className="bi bi-file-earmark-arrow-down-fill ml-1"></i>
                    </div>
                </a>
                <a href="#contact" className="border border-[var(--border)] text-[var(--text-h)] bg-[var(--social-bg)] px-5 py-3 rounded-xl shadow-xs hover:bg-[var(--code-bg)] transition-all active:scale-95 uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                        Get In Touch
                        <i className="bi bi-telephone-fill ml-1"></i>
                    </div>
                    {/* <i class="bi bi-telephone-fill"></i> */}
                </a>
            </div>
        </div>
    );
}