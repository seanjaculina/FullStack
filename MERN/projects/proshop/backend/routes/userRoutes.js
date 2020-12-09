import express from 'express';

const router = express.Router();

// Importing our controllers for returning all products and a single product
import { authUser, getUserProfile } from '../controllers/userController.js';

// JWT auth middleware
import { protect } from '../middlewares/authMiddleware.js';

// handle login post request (is prefixed with /api/users in our app.use for the routing in server.js)
router.post('/login', authUser);
router.route('/profile').get(protect, getUserProfile); // this route is protected using our jwt auth middleware

export default router;
