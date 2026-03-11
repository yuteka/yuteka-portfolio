import nodemailer from 'nodemailer';

// Fail-fast check: This is a professional practice to ensure the application
// doesn't start if critical configurations are missing.
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  throw new Error('FATAL_ERROR: Nodemailer environment variables EMAIL_USER or EMAIL_PASS are not set. Check Vercel project settings.');
}

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