import transporter from './nodemailer.js';

export const sendEmail = async (req, res) => {
  const { name, email, message } = req.body;

  // Server-side configuration check
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.EMAIL_RECEIVER) {
    console.error('ERROR: Nodemailer environment variables are not set. Please check your Vercel project settings.');
    return res.status(500).json({ success: false, message: 'Server configuration error. Please contact the site administrator.' });
  }

  // Simple validation to ensure all fields are present
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  const mailOptions = {
    from: `"${name}" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_RECEIVER, // Your personal email to receive messages
    replyTo: email, // Allows you to reply directly to the sender
    subject: `New Portfolio Contact from ${name}`,
    html: `
      <h1>New Message from Portfolio</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <hr />
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `
  };

  try {
    // Final check of credentials right before sending the email
    console.log('[Nodemailer] Attempting to send email with user:', process.env.EMAIL_USER);
    console.log('[Nodemailer] Password exists:', !!process.env.EMAIL_PASS);

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Email send error:', error);
    res.status(500).json({ success: false, message: 'Failed to send message. Please try again later.' });
  }
};