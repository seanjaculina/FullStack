const express = require("express"); // express
const path = require("path");

const router = express.Router(); //router for our more dynamic routing service

router.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

// we see that we run in to an issue! We want to serve dynamic html from the server from a users input
// but you cannot do that with base express and sending files so we need a template system or a proxy from front end to backend//
// and send json responses and render the data from json on the client.. so, we will see later how we can use pug and
// do dynamic server side rendered apps
router.post("/gatherInfo", (req, res) => {
  // grab the form data from the request body - use req.body to parse the form data sent
  // use req.params to get query params like a dynamic ID in the front end being sent over through the server
  // etc.
  const { name, age, email } = req.body;
  res.send(`
    <div class="container">
      <h3>Name: ${name}</h3>
      <p>Age: ${age}</p>
      <small>Email: ${email}</small>
    </div>
  `);
});

module.exports = router;
