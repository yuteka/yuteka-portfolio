import express from 'express';
import { sendEmail } from './contactController.js';

const router = express.Router();

// Defines the route: POST /api/contact
router.post('/', sendEmail);

export default router;