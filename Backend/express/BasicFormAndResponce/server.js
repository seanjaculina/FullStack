const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use static contents - html,css,images etc
app.use(express.static(path.join(__dirname, "static")));

app.get("/", (req, res) => {
  // render the html file that we have in statc -> our static middleware will tell all routes to render stuff from static folder first from responses we make as we did below
  res.sendFile("index.html");
});

// gets form data
app.post("/formSubmission", (req, res) => {
  // Pull out the form body data - this is how we pull out form data submitted to a server! Not the same as req.query or req.params
  const { name, age, id } = req.body;
  res.send(`Name: ${name}  Age: ${age}  ID: ${id}`);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
