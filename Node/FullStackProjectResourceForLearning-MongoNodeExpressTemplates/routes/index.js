const express = require('express');
const router = express.Router(); // sets up routing

router.get('/', (req, res) => {
  res.render('index'); // we set the view engine to ejs and 
})

module.exports = router;