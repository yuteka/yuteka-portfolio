import { FiAward, FiFileText } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Certification = () => {
  const certifications = [
    {
      type: 'certification',
      title: "Java Full Stack Development",
      issuer: "JSpiders Training & Development Center",
      date: "Completed January 2026",
      skills: ["Core Java", "J2EE", "SQL", "Web Technology", "Frameworks"],
      icon: <FiAward />
    },
    {
      type: 'achievement',
      title: "Paper Presentation at ICAIHMS'25",
      issuer: "Karpagam Institute of Technology (AICTE Sponsored)",
      date: "March 2025",
      details: "Presented a research paper titled: 'Advanced Ambulance Rescue System Using Prioritized Traffic Switching'.",
      icon: <FiFileText />
    }
  ];

  return (
    <section id="certification" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            Certifications & Achievements
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            My dedication to continuous learning and growth.
          </p>
        </div>
        
        <div className="mt-16 grid md:grid-cols-2 gap-8 lg:gap-12">
          {certifications.map((cert, index) => (
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
                  <span className="text-3xl text-deep-rose">{cert.icon}</span>
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{cert.title}</h3>
                <p className="font-semibold text-deep-rose mb-1">{cert.issuer}</p>
                <p className="text-sm text-gray-500 mb-4">{cert.date}</p>
              </div>
              <div className="mt-auto pt-4">
                {cert.skills ? (
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map(skill => (
                      <span key={skill} className="bg-lavender-blush/60 text-gray-800 font-medium px-3 py-1 rounded-full text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600 italic">{cert.details}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certification;