// // frontend/src/component/Body/Contact.jsx
// import React from 'react';

// export default function Contact() {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Message pipeline complete. Form mock dispatch loop finished successfully!");
//   };

//   return (
//     <div className="px-6 sm:px-10 py-12 max-w-xl mx-auto w-full text-left animate-in fade-in duration-300 flex-grow">
//       <div className="mb-6 border-b border-[var(--border)] pb-4">
//         <h2 className="text-xl sm:text-2xl font-extrabold text-[var(--text-h)] tracking-tight">Get In Touch</h2>
//         <p className="text-xs text-gray-400 mt-1">Have an optimization problem or looking to discuss code architecture? Send a line below.</p>
//       </div>

//       <form onSubmit={handleSubmit} className="space-y-4 text-xs font-bold uppercase tracking-wider text-[var(--text-h)]">
//         <div className="space-y-1">
//           <label>Your Name</label>
//           <input required type="text" className="w-full border border-[var(--border)] bg-[var(--bg)] p-3 rounded-xl text-[var(--text-h)] font-normal normal-case focus:border-[var(--accent)] outline-hidden transition shadow-xs" placeholder="Sourav Banerjee" />
//         </div>

//         <div className="space-y-1">
//           <label>Email Address</label>
//           <input required type="email" className="w-full border border-[var(--border)] bg-[var(--bg)] p-3 rounded-xl text-[var(--text-h)] font-normal normal-case focus:border-[var(--accent)] outline-hidden transition shadow-xs" placeholder="sourav@example.com" />
//         </div>

//         <div className="space-y-1">
//           <label>Message Details</label>
//           <textarea required rows="4" className="w-full border border-[var(--border)] bg-[var(--bg)] p-3 rounded-xl text-[var(--text-h)] font-normal normal-case focus:border-[var(--accent)] outline-hidden transition leading-relaxed resize-none shadow-xs" placeholder="Let's build something scalable..."></textarea>
//         </div>

//         <button type="submit" className="w-full bg-[var(--accent)] text-white font-bold py-3 px-4 rounded-xl shadow-xs hover:opacity-95 transition-all active:scale-95 text-center cursor-pointer tracking-widest text-xs uppercase mt-2">
//           Send Message
//         </button>
//       </form>
//     </div>
//   );
// }









// ================================================================ new code ==================================================================






import React, { useState } from 'react';
import axios from 'axios';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      const response = await axios.post('http://localhost:8080/api/contact', formData);
      if (response.data && response.data.success) {
        alert(`Thank you, ${formData.name}! Your message has been sent successfully.`);
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (err) {
      console.error("Email delivery failed:", err);
      alert("Failed to forward your message. Please verify your backend SMTP configurations.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="px-6 sm:px-10 py-12 max-w-xl mx-auto w-full text-left animate-in fade-in duration-300 flex-grow">
      <div className="mb-6 border-b border-[var(--border)] pb-4">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[var(--text-h)] tracking-tight">Get In Touch</h2>
        <p className="text-xs text-gray-400 mt-1">Looking to discuss engineering architecture? Leave a message below.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 text-xs font-bold uppercase tracking-wider text-[var(--text-h)]">
        <div className="space-y-1">
          <label>Your Name</label>
          <input 
            required 
            type="text" 
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full border border-[var(--border)] bg-[var(--bg)] p-3 rounded-xl text-[var(--text-h)] font-normal normal-case focus:border-[var(--accent)] outline-hidden transition shadow-xs" 
            placeholder="John Doe" 
          />
        </div>

        <div className="space-y-1">
          <label>Email Address</label>
          <input 
            required 
            type="email" 
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full border border-[var(--border)] bg-[var(--bg)] p-3 rounded-xl text-[var(--text-h)] font-normal normal-case focus:border-[var(--accent)] outline-hidden transition shadow-xs" 
            placeholder="johndoe@example.com" 
          />
        </div>

        <div className="space-y-1">
          <label>Message Details</label>
          <textarea 
            required 
            rows="4" 
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full border border-[var(--border)] bg-[var(--bg)] p-3 rounded-xl text-[var(--text-h)] font-normal normal-case focus:border-[var(--accent)] outline-hidden transition leading-relaxed resize-none shadow-xs" 
            placeholder="Let's build something scalable..."
          ></textarea>
        </div>

        <button 
          type="submit" 
          disabled={sending}
          className="w-full bg-[var(--accent)] text-white font-bold py-3 px-4 rounded-xl shadow-xs hover:opacity-95 transition-all active:scale-95 text-center cursor-pointer tracking-widest text-xs uppercase mt-2 disabled:opacity-50"
        >
          {sending ? "Sending message..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}