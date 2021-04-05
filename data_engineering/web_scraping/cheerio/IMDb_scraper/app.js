const express = require('express');
const cors = require('cors');
const searchMovies = require('./scraper');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
  const { term } = req.body;
  const movies = await searchMovies('star wars');
  res.status(200).json(movies);
});

const PORT = process.env.PORT || 4040;

app.listen(PORT, console.log(`Server listening on port: ${PORT}`));
