const express = require('express');
const router = express.Router();
const gig = require('../models/Gig');
const Sequelize = require('sequelize');
const Op = Sequelize.Op; // operations on specific queries in the pg sql db

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
  console.log(req.body);
  let errors = [];

  // Error handling fields that should have data
  if (!title) {
    errors.push({ text: 'Please add a title' });
  }
  if (!technologies) {
    errors.push({ text: 'Please add technologies' });
  }
  if (!description) {
    errors.push({ text: 'Please add a description' });
  }
  if (!contact_email) {
    errors.push({ text: 'Please add an email' });
  }

  // Check if any errors exust - if the array of errors > 0
  if (errors.length > 0) {
    // re-render the form to show the errors plus pre-fill the form with the data entered before
    res.render('add', {
      errors,
      title,
      technologies,
      budget,
      description,
      contact_email,
    });
  } else {
    if (!budget) budget = 'Unknown';
    else budget = `$${budget}`;

    // Edit the comma sepatated list of technologies by making lowercase and removing spaces after commas
    technologies = technologies.toLowerCase().replaceAll(' ', '');

    try {
      // Insert this data into the table as a new record - returns a promise
      // REMEMBER: This is with sequelize ORM which allows the sql code to be abstracted away and we can use JS objects to insert data and let
      // the library insert for us. We could just use the postgres library and write raw SQL also but using an ORM is more efficient and
      // does not reinvent the wheel when we do not need to
      await gig.create({
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
  }
});

// Find all gigs with the specified search term
router.get('/search', async (req, res) => {
  let { searchTerm } = req.query; // the name is a query param in the qauery string since we are using a GET request
  searchTerm = searchTerm.toLowerCase();
  try {
    const allGigs = await gig.findAll({
      where: { technologies: { [Op.like]: `%${searchTerm}%` } },
    });
    res.render('gigs', { gigs: allGigs }); // render all the gigs in the DB that contain some portion of the searchTerm using sql LIKE operator
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
