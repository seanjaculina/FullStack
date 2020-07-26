const express = require('express');
const router = express.Router(); // sets up routing


// all routes here will be prefixed with /articles from our server.js file
// since we are using router, we can encapsulate all routes related to /articles
// in here, export it, and then .use() this file to server routes based off /articles

// this logic would be used for any routing where we want to separate similar routes into a file,
// but that might not relate to other routes. This is the point of express.Router

router.get('/', (req, res) => {
  res.render('index', {
    articles: articles
  });
})

module.exports = router;