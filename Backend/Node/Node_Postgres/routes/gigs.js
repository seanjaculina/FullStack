const express = require('express');
const router = express.Router();
const db = require('../config/database');
const gig = require('../models/Gig');

// Get all current gigs
router.get('/', async (req, res) => {
  const entries = await gig.findAll();
  res.status(200).json({ gigs: entries });
});

module.exports = router;
