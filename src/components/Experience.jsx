import { FiBriefcase } from 'react-icons/fi';
import { FaRegCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Background Gradient Blobs */}
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-10 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full filter blur-3xl opacity-30 animate-blob-float"></div>
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gradient-to-tr from-lavender-blush to-purple-200 rounded-full filter blur-3xl opacity-30 animate-blob-float [animation-delay:3s]"></div>
        </div>

        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text pb-2">
            Work Experience
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey and what I've been working on.
          </p>
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto">
          <motion.div 
            className="bg-white/50 backdrop-blur-xl border border-white/60 shadow-2xl rounded-3xl p-8 lg:p-12 transition-all duration-500 hover:shadow-3xl hover:scale-[1.02]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative hover:bg-rose-100/20">
              {/* Timeline Line */}
              <div className="absolute left-9 top-1 h-full w-0.5 bg-gradient-to-b from-purple-200 to-pink-200" aria-hidden="true"></div>
              
              <div className="relative pl-20">
                {/* Timeline Dot */}
                <div className="absolute left-0 -translate-x-1/2 top-1">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/80 ring-8 ring-white/50">
                    <FiBriefcase className="h-8 w-8 text-deep-rose" />
                  </span>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-1 ">
                  <h3 className="text-3xl font-bold text-gray-800">Full Stack Intern</h3>
                  <p className="font-semibold text-deep-rose italic mt-2 sm:mt-0">Present</p>
                </div>
                <p className="text-lg font-medium text-gray-600 mb-4">Brain Bric</p>
                
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <FaRegCheckCircle className="w-5 h-5 text-deep-rose mr-3 mt-1 flex-shrink-0" />
                    <span>Developing and maintaining responsive frontend components using React and Tailwind CSS.</span>
                  </li>
                  <li className="flex items-start">
                    <FaRegCheckCircle className="w-5 h-5 text-deep-rose mr-3 mt-1 flex-shrink-0" />
                    <span>Building and integrating backend APIs with Node.js, Express, and MongoDB.</span>
                  </li>
                  <li className="flex items-start">
                    <FaRegCheckCircle className="w-5 h-5 text-deep-rose mr-3 mt-1 flex-shrink-0" />
                    <span>Collaborating with senior developers in an Agile environment to deliver software solutions.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Experience;