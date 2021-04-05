const express = require('express');
const cors = require('cors');
const searchMovies = require('./scraper');
const connectDB = require('./config');
const Movie = require('./models/Movie');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to the DB
connectDB();

// Search for a movie - performs a scrape on the request
app.post('/movies', async (req, res) => {
  const { term } = req.body;
  const exists = await Movie.find({ title: { $regex: term, $options: 'i' } }); // see if the term being searched already exists to enhance performance time
  if (!exists) {
    const movies = await searchMovies(term);
    res.status(200).json(movies);
  } else {
    res.status(200).json(exists);
  }
});

// Get movie by its ID
app.get('/movies/:id', async (req, res) => {
  const { id } = req.params;
  res.status(200).json(await Movie.findById(id));
});

const PORT = process.env.PORT || 4040;

app.listen(PORT, console.log(`Server listening on port: ${PORT}`));
