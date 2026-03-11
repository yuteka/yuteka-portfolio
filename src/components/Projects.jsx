import { FiCpu, FiPlusSquare } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Projects = () => {
  const projectList = [
    {
      title: "Hybrid LSTM Model for Energy Consumption Detection",
      technologies: ["LSTM", "BWO", "Deep Learning", "Python"],
      description: "Developed a novel hybrid LSTM-Beluga Whale Optimization model to accurately forecast electricity usage, achieving a low RMSE of 1.34%.",
      icon: <FiCpu />
    },
    {
      title: "Advanced Ambulance Rescue System",
      technologies: ["OpenCV", "Python", "Real-Time Systems", "Threading"],
      description: "Engineered an intelligent traffic control system using Python threading and OpenCV to prioritize emergency vehicle routes, reducing response times.",
      icon: <FiPlusSquare />
    }
  ];

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text pb-2">
            My Projects
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            A couple of my favorite projects I've worked on.
          </p>
        </div>
        
        <div className="mt-16 grid md:grid-cols-2 gap-8 lg:gap-12 hover:bg-rose-100/20">
          {projectList.map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-white/40 backdrop-blur-xl border border-white/60 shadow-xl rounded-3xl p-8 flex flex-col transform hover:scale-[1.03] transition-all duration-300 ease-in-out"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
            >
              <div className="flex-shrink-0 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-white/60 flex items-center justify-center">
                  <span className="text-3xl text-deep-rose">{project.icon}</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
              </div>
              <div className="mt-auto pt-6 border-t border-white/60">
                <h4 className="font-semibold text-gray-700 mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech}
                      className="bg-lavender-blush/60 text-gray-800 font-medium px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
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

export default Projects;