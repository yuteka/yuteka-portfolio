import express from 'express';
import cors from 'cors';
import contactRoutes from './contactRoutes.js';

const app = express();

// Middleware
// Use cors middleware. By default, this allows all origins, which is
// suitable for a portfolio contact form and will work on Vercel.
app.use(cors());
app.use(express.json()); // To parse JSON request bodies

// API Routes
app.use('/api/contact', contactRoutes);


// Export the app for Vercel to use as a serverless function
export default app;