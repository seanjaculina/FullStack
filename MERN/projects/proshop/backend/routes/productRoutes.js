import express from 'express';
import asyncHandler from 'express-async-handler'; // see this package on NPM. It does all the TRY/CATCH exception handling for us

import Product from '../models/productModel.js';

const router = express.Router();

// these routes will be prefixed with /api/products from the server file using router middleware

/**
 * @desc    Fetch all products
 * @route   GET /api/products
 * @access  public
 */
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({}); // get ALL products
    res.json(products);
  })
);

/**
 * @desc    Fetch a singular product by its ID
 * @route   GET /api/products/:id
 * @access  public
 */
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const productFoundByID = await Product.findById(id); // find the product in the products collection using that Product model

    if (productFoundByID) {
      return res.json(productFoundByID);
    } else {
      res.status(404);
      throw new Error('Product not found'); // this will throw error with a stack trace, this message and the custom message. Cool
    }
  })
);

export default router;
