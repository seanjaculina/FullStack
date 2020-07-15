const express = require('express');
const app = express();
const path = require('path')

// to parse incoming JSON data from the form
const bodyParser = require('body-parser');

// config the body parser for json and url encoded data (to do req.body.attribut_from_input_emenent_name) [so we can accept json from client (like react)]
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}))

// to serve static data like images, css etc.
app.use(express.static(__dirname + 'public'));

// saving the index.html fild path into a variable to pass into sendfile (look into dir/path.join logic)
const index = '/Users/tannerbarcelos/OneDrive/DEV/Full_Stack_Absolute/FullStack/express/simplePostAndResponse/index.html';

// send the html file to the root route on port
app.get('/', (req, res) => {
  res.sendFile(index)
})


app.post('/submitData', (req, res) => {
  // req.body will contian all fields from the specified form sending data to this route via the 'name' attribute on all the form fields
  res.send(`Name: ${req.body.name}  Comment: ${req.body.comment}`)

  // often we like to send json back as a response for certain things.. the key thing here is that we can get the form data via req.body.NAME_ATTRIBUTE_ON_PARTICULAR_FORM_FIELD
  // res.json({
  //   name: req.body.name,
  //   comment: req.body.comment
  // })
})

const PORT = 3000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))