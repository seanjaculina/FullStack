const express = require('express');
const cors = require('cors');
const { searchMovies, searchMovieById } = require('./scraper');
const connectDB = require('./config');
const Movie = require('./models/Movie');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Connect to the DB
connectDB();

// Get the top movies on IMDB - home route
app.get('/', (req, res) => {
  res.send('hello');
});

// Search for a movie - performs a scrape on the request if the requested term movies does not already exist in the db
app.post('/movies', async (req, res) => {
  const { term } = req.body;

  // Check the DB for this term. If there is already a collection of movies with this title, return the collection
  // else, scrape for this new term, save to db and return. I am taking this step to ensure performance update
  // We still have overhead on the scraping as unless a user searches for a movie that is in our database, we will need
  // to save the new searched movies from a scrape and then later searches will be fast. The only way to fix this is of course
  // to just use a movie API or literally search all possible movies ever and make our own db. The former is better than the latter
  // but this whole application is an exercise of building an API from scraped data

  const movies = await Movie.find({
    title: { $regex: `^${term}`, $options: 'i' },
  });

  if (movies && movies.length > 0) {
    res.status(200).json(movies);
  } else {
    res.status(200).json(await searchMovies(term));
  }
});

// Get movie by its ID
app.get('/movies/:id', async (req, res) => {
  const { id } = req.params;
  // const movieInformation = await searchMovieById(id);
  res.status(200).json(await Movie.findById(id));
});

const PORT = process.env.PORT || 4040;

app.listen(PORT, console.log(`Server listening on port: ${PORT}`));
