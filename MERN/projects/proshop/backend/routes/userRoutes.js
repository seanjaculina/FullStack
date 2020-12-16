import express from 'express';

const router = express.Router();

// Importing our controllers for returning all products and a single product
import {
  authUser,
  registerUser,
  getUserProfile,
} from '../controllers/userController.js';

// JWT auth middleware
import { protect } from '../middlewares/authMiddleware.js';

// These routes are all prefixed with /api/users utilizing router in our server.js as middleware

router.route('/').post(registerUser);
router.post('/login', authUser);
router.route('/profile').get(protect, getUserProfile); // this route is protected using our jwt auth middleware which is put as protect here

export default router;
