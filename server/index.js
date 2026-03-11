import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// --- Absolute Path Configuration for .env ---
// This makes your server robust, ensuring it finds the .env file
// regardless of where you run the 'node' command from.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envPath = path.resolve(__dirname, '.env');

dotenv.config({ path: envPath });

// --- Professional Debug Logs for Brain Bric ---
// These logs confirm if the server is loading your credentials correctly.
console.log(`[Server Startup] Email User Loaded: ${!!process.env.EMAIL_USER}`);
console.log(`[Server Startup] Email Pass Loaded: ${!!process.env.EMAIL_PASS}`);

import express from 'express';
import cors from 'cors';
import contactRoutes from './contactRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

// CORS Configuration to allow requests from your React app
const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json()); // To parse JSON request bodies

// API Routes
app.use('/api/contact', contactRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server elegantly running on port ${PORT}`);
});