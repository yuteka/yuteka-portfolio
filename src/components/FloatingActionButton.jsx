import React, { useState } from 'react';

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  // User can replace this with their actual LinkedIn profile URL
  const linkedInUrl = "https://www.linkedin.com/in/yuteka-hema/"; 
  const email = "yutekahema003@gmail.com";

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Expanded Card */}
      <div
        className={`absolute bottom-20 right-0 w-64 bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-4 border border-white/30 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <h3 className="font-bold text-lg text-slate-800 mb-3 text-center">Quick Contact</h3>
        <div className="flex flex-col space-y-3">
          <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-slate-700 hover:text-pink-600 transition-colors duration-300 p-2 rounded-lg hover:bg-white/50">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-purple-600">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            <span className="font-medium">LinkedIn</span>
          </a>
          <a href={`mailto:${email}`} className="flex items-center space-x-3 text-slate-700 hover:text-pink-600 transition-colors duration-300 p-2 rounded-lg hover:bg-white/50">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-purple-600">
                <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.107 10-8.107v11.817h-20z"/>
             </svg>
            <span className="font-medium">Email Me</span>
          </a>
        </div>
      </div>
      
      {/* FAB Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 text-white shadow-lg flex items-center justify-center focus:outline-none transition-all duration-300 ease-in-out hover:shadow-2xl transform hover:scale-110 ${!isOpen && 'animate-pulse'}`}
        aria-expanded={isOpen}
        aria-label="Toggle Quick Contact Menu"
      >
        {isOpen ? (
          // Close Icon (X)
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          // Chat/Contact Icon
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default FloatingActionButton;
