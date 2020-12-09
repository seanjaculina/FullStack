import express from 'express';

const router = express.Router();

// Importing our controllers for returning all products and a single product
import {
  getProducts,
  getProductById,
} from '../controllers/productController.js';

// get all products (using the contoller)
router.route('/').get(getProducts);

router.route('/:id').get(getProductById);

export default router;
