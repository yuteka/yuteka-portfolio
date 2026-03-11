import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Background Gradient Blobs */}
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full filter blur-3xl opacity-30 animate-blob-float"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tr from-lavender-blush to-purple-200 rounded-full filter blur-3xl opacity-30 animate-blob-float [animation-delay:3s]"></div>
        </div>

        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            About Me
          </h2>
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto hover:bg-rose-100/20">
          <motion.div 
            className="bg-white/50 backdrop-blur-xl border border-white/60 shadow-2xl rounded-3xl p-8 lg:p-12 transition-all duration-500 hover:shadow-3xl hover:scale-[1.02]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-xl text-center text-gray-700 leading-relaxed">
              I am an <strong className="font-semibold text-deep-rose">AI & Data Science Engineering</strong> with a deep passion for building 
              beautiful, scalable web applications. Currently, I'm honing my skills as a 
              <strong className="font-semibold text-deep-rose"> Full Stack Intern</strong> at Brain Bric, where I get to bring ideas to life.
            </p>
            <p className="mt-6 text-xl text-center text-gray-700 leading-relaxed">
              I thrive on solving complex problems with the <strong className="font-semibold text-gray-800">MERN stack</strong> and am endlessly fascinated by the 
              limitless possibilities of <strong className="font-semibold text-gray-800">Artificial Intelligence</strong>.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default About;