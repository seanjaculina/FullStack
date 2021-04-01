const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser"); // to parse incoming JSON data from the form

// config the body parser for json and url encoded data (to do req.body.attribut_from_input_emenent_name) [so we can accept json from client (like react)]
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// to serve static data like images, css etc.
app.use(express.static(__dirname + "public"));

// send the html file to the root route on port
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/submitData", (req, res) => {
  // we can destructure the data from the request body (form fields) too
  const { name, comment } = req.body;

  // if either or no data is entered
  if (!name || !comment) {
    return res.json({
      msg: "Please enter data",
    });
  }

  //IMPORTANT!
  // req.body will contian all fields from the specified form sending data to this route via the 'name' attribute on all the form fields
  res.status(200).send(`Name: ${name}  Comment: ${comment}`);

  // often we like to send json back as a response for certain things.. the key thing here is that we can get the form data via req.body.NAME_ATTRIBUTE_ON_PARTICULAR_FORM_FIELD
  // res.json({
  //   name: req.body.name,
  //   comment: req.body.comment
  // })
});

const PORT = 3000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
