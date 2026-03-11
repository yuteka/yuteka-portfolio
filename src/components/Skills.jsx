import { FaCode, FaDatabase, FaReact, FaTools } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    { title: "Programming", skills: ["Java", "SQL", "JavaScript"], icon: <FaCode className="w-8 h-8 text-deep-rose" /> },
    { title: "Web Technologies", skills: ["HTML5", "CSS3", "React", "Tailwind CSS", "Node.js"], icon: <FaReact className="w-8 h-8 text-deep-rose" /> },
    { title: "Databases", skills: ["MySQL", "Oracle", "MongoDB"], icon: <FaDatabase className="w-8 h-8 text-deep-rose" /> },
    { title: "Tools & IDEs", skills: ["VS Code", "Git", "SQL*Plus", "Postman"], icon: <FaTools className="w-8 h-8 text-deep-rose" /> }
  ];

  return (
    <section id="skills" className="py-24 sm:py-32 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            Technical Skills
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            A look at the technologies, languages, and tools I work with.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 hover:bg-rose-100/20">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="bg-white/40 backdrop-blur-xl border border-white/60 shadow-xl rounded-3xl p-6 transform hover:scale-[1.03] transition-all duration-300 ease-in-out"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-white/50 rounded-full mb-4">
                  {category.icon}
                </div>
                <h3 className="font-bold text-xl mb-4 text-deep-rose">{category.title}</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {category.skills.map(skill => (
                    <span 
                      key={skill} 
                      className="bg-lavender-blush/60 text-gray-800 font-medium px-4 py-2 rounded-full text-sm hover:bg-white transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;