const express = require('express');
const router = express.Router();
const db = require('../config/database');
const gig = require('../models/Gig');

// Get all current gigs
router.get('/', async (req, res) => {
  const gigs = await gig.findAll();
  res.render('gigs', { gigs });
});

// Add gig form
router.get('/add', (req, res) => {
  res.render('add');
});

router.post('/add', async (req, res) => {
  let { title, technologies, budget, description, contact_email } = req.body;
  try {
    // Insert this data into the table as a new record - returns a promise
    // REMEMBER: This is with sequelize ORM which allows the sql code to be abstracted away and we can use JS objects to insert data and let
    // the library insert for us. We could just use the postgres library and write raw SQL also but using an ORM is more efficient and
    // does not reinvent the wheel when we do not need to
    const newGig = await gig.create({
      title,
      technologies,
      description,
      budget,
      contact_email,
    });
    res.status(200).redirect('/gigs');
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
