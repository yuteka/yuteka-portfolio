const Footer = () => {
  return (
    <footer className="bg-white/30 backdrop-blur-lg border-t border-white/40 text-gray-600 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-deep-rose mb-2">Yuteka S J</h2>
        <p className="text-gray-500 mb-6">
          AI & Data Science Engineer | Full Stack Developer
        </p>
        
        <div className="flex justify-center space-x-6 mb-8">
          <a href="mailto:yutekahema003@gmail.com" className="hover:text-deep-rose font-medium transition-colors duration-300">Email</a>
          <a href="https://www.linkedin.com/in/yuteka-jayamadhu-3a6110239/" target="_blank" rel="noopener noreferrer" className="hover:text-deep-rose font-medium transition-colors duration-300">LinkedIn</a> 
          <a href="https://github.com/yutekahemamalini" target="_blank" rel="noopener noreferrer" className="hover:text-deep-rose font-medium transition-colors duration-300">GitHub</a> 
        </div>

        <div className="text-sm text-gray-400 border-t border-white/60 pt-6">
          <p>Based in Chennai, Tamil Nadu, India</p>
          <p className="mt-1">© {new Date().getFullYear()} | Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;