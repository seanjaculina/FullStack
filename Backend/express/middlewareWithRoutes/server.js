const express = require("express"); // import express
const path = require("path");
const app = express(); // create a new instance of an express app

// middlewares - this is first in the pipeline! All requests slide through the middleware pipeline before parsing the requestrs and sending
// responses. Hence, when we use express router and we use imported sub-routers we make in a routes file

app.use(express.json()); // will parse url query strings

app.use((req, res, next) => {
  console.log("This will always run!");
  next();
});

// routes (non-router)
app.get("/", (req, res) => {
  res.send(`<form action="/hello" method="POST">
  <input type="text" name="name" id="name" />
</form>`);
});

app.post("/hello", (req, res) => {
  console.log(req.body);
  return res.status(200).json({
    message: `${req.url} was hit`,
  });
  /**
   * can send html, json, etc. [json is usually for API and such for large apps, we can send html too if we make a purely server side rendered app]
   */
});

// port instantiation
const PORT = process.env.PORT || 5500;

// Listen on port
app.listen(PORT, console.log(`Server listening on port: ${PORT}`));
