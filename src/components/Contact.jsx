import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'; // Using react-icons for a cleaner look
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Placeholder for Axios POST request
    console.log("Form submitted. Data:", formData);
    // try {
    //   const response = await axios.post('YOUR_BACKEND_ENDPOINT/send-email', formData);
    //   console.log('Email sent successfully!', response.data);
    //   alert('Thank you for your message! I will get back to you shortly.');
    // } catch (error) {
    //   console.error('There was an error sending the email:', error);
    //   alert('Sorry, there was an issue sending your message. Please try again later.');
    // }
    alert("Thank you for your message! I'll be in touch soon.");
    setFormData({ name: '', email: '', message: '' });
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
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 hover:bg-rose-100/20">
            {/* Left Side: Contact Info */}
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
                className="w-full font-bold text-lg text-white py-4 px-8 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;