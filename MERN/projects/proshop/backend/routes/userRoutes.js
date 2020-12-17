import express from 'express';

const router = express.Router();

// Importing our controllers for returning all products and a single product
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
} from '../controllers/userController.js';

// JWT auth middleware
import { protect } from '../middlewares/authMiddleware.js';

// These routes are all prefixed with /api/users utilizing router in our server.js as middleware

router.route('/').post(registerUser);
router.post('/login', authUser);

// these routes are protected and use the controllers we made to make this more modular
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
export default router;
