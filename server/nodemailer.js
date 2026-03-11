import nodemailer from 'nodemailer';

// The main server entry point (index.js) is responsible for loading environment
// variables using dotenv. This ensures they are loaded once, at the very top.

// Create the transporter. It will automatically use the environment variables
// loaded by index.js.
const transporter = nodemailer.createTransport({
  service: 'gmail',
  // Note: host, port, and secure are automatically configured for the 'gmail' service.
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export default transporter;