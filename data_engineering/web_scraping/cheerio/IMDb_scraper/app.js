const express = require('express');
const cors = require('cors');
const searchMovies = require('./scraper');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/movies', async (req, res) => {
  const { term } = req.body;
  const movies = await searchMovies(term);
  res.status(200).json(movies);
});

app.get('/movies:id', (req, res) => {
  const { id } = req.params;
  // const movieData = await searchMovieById(id);
  // res.status(200).json(movieData);
  res.status(200).json(id);
});

const PORT = process.env.PORT || 4040;

app.listen(PORT, console.log(`Server listening on port: ${PORT}`));
