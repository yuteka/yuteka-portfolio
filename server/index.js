import express from 'express';
import cors from 'cors';
import 'dotenv/config'; // Load variables early
import contactRoutes from './contactRoutes.js';

const app = express();

// Vercel provides the production URL in an environment variable.
const vercelUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null;

const corsOptions = {
  // Allow local development and the live Vercel URL.
  // The filter(Boolean) removes any null/undefined values.
  origin: ["http://localhost:5173", vercelUrl].filter(Boolean),
  methods: ["POST", "GET"],
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

// API Routes
app.use('/api/contact', contactRoutes);

// 2. Local Development Support
// Vercel ignores this part, but it lets you run 'node index.js' locally
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running locally on http://localhost:${PORT}`);
  });
}

// Export for Vercel
export default app;