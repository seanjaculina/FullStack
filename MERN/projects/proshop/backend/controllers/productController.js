import asyncHandler from 'express-async-handler'; // see this package on NPM. It does all the TRY/CATCH exception handling for us

import Product from '../models/productModel.js';

/**
 * @desc    Fetch all products
 * @route   GET /api/products
 * @access  public
 */
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}); // get ALL products
  res.json(products);
});

/**
 * @desc    Fetch a singular product by its ID
 * @route   GET /api/products/:id
 * @access  public
 */
const getProductById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const productFoundByID = await Product.findById(id); // find the product in the products collection using that Product model

  if (productFoundByID) {
    return res.json(productFoundByID);
  } else {
    res.status(404);
    throw new Error('Product not found'); // this will throw error with a stack trace, this message and the custom message. Cool
  }
});

export { getProducts, getProductById };
