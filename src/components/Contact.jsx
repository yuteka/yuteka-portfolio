import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'; // Using react-icons for a cleaner look
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submissionStatus, setSubmissionStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus('loading');
    setErrorMessage('');
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        // If server responds with an error, use its message
        throw new Error(data.message || 'Something went wrong on the server.');
      }

      setSubmissionStatus('success');
      setFormData({ name: '', email: '', message: '' }); // Clear form on success
    } catch (error) {
      console.error('There was an error sending the email:', error);
      setSubmissionStatus('error');
      setErrorMessage(error.message || 'Sorry, there was an issue sending your message. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team.
          </p>
        </div>
        
        <motion.div 
          className="mt-16 bg-white/40 backdrop-blur-xl border border-white/60 shadow-2xl rounded-3xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            <div className="flex flex-col justify-center space-y-8">
              <h3 className="text-3xl font-bold text-gray-800">Let's Connect</h3>
              <div className="space-y-6">
                <a href="mailto:yutekahema003@gmail.com" className="flex items-center group">
                  <FiMail className="w-6 h-6 text-deep-rose group-hover:text-purple-600 transition-colors duration-300" />
                  <span className="ml-4 text-lg text-gray-700 group-hover:text-gray-900">yutekahema003@gmail.com</span>
                </a>
                <div className="flex items-center group">
                  <FiPhone className="w-6 h-6 text-deep-rose group-hover:text-purple-600 transition-colors duration-300" />
                  <span className="ml-4 text-lg text-gray-700 group-hover:text-gray-900">+91 6369591821</span>
                </div>
                <div className="flex items-center group">
                  <FiMapPin className="w-6 h-6 text-deep-rose group-hover:text-purple-600 transition-colors duration-300" />
                  <span className="ml-4 text-lg text-gray-700 group-hover:text-gray-900">Chennai, Tamil Nadu</span>
                </div>
              </div>
            </div>

            {/* Right Side: The Form */}
            {submissionStatus === 'success' ? (
              <div className="flex flex-col items-center justify-center text-center bg-lavender-blush/60 border border-pink-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-deep-rose mb-2">Thank you! ✨</h3>
                <p className="text-gray-700">Your message has been sent. I will reach out soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input 
                    type="text" name="name" id="name" placeholder="Your Name" 
                    value={formData.name} onChange={handleChange} required
                    className="w-full p-4 bg-white/70 border-2 border-transparent rounded-xl placeholder-gray-500 text-gray-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-deep-rose focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input 
                    type="email" name="email" id="email" placeholder="Your Email" 
                    value={formData.email} onChange={handleChange} required
                    className="w-full p-4 bg-white/70 border-2 border-transparent rounded-xl placeholder-gray-500 text-gray-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-deep-rose focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea 
                    name="message" id="message" rows="5" placeholder="Your Message" 
                    value={formData.message} onChange={handleChange} required
                    className="w-full p-4 bg-white/70 border-2 border-transparent rounded-xl placeholder-gray-500 text-gray-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-deep-rose focus:border-transparent"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={submissionStatus === 'loading'}
                  className="w-full font-bold text-lg text-white py-4 px-8 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100"
                >
                  {submissionStatus === 'loading' ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>
                {submissionStatus === 'error' && (
                  <p className="text-center text-red-600 font-medium mt-4">{errorMessage}</p>
                )}
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;