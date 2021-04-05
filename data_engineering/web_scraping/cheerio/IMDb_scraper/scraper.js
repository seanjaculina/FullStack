const fetch = require('node-fetch');
const cheerio = require('cheerio');
require('dotenv').config();

const Movie = require('./models/Movie');
const baseURI = process.env.IMDB_URI;

/**
 * Performs the request to the website to scrape based off the term user enters from the client
 *  - Scrape the data  for all movies with the search term
 *  - add all these new movie documents to an array to return as our JSON for this route
 *  - Save all documents to the database (extract, translate and load done here [E.T.L])
 */
const searchMovies = async (term) => {
  const page = await fetch(`${baseURI}${term}`);
  const html = await page.text();

  const movies = [];

  // Init cheerio to load the html being requested
  const $ = cheerio.load(html);

  // Get every element in the table and for every element, do some processing [notice the API is just like jQuery]
  $('.findResult').each(async (index, element) => {
    const el = $(element);
    const title = el.find('td.result_text a').text().trim(); // get the title of the element
    const image = el.find('td a img').attr('src'); // get the image source
    const moreInfoLink = el.find('td.result_text a').attr('href'); // get the link to more info on this movie
    // create a new movie document for our mongoddb store
    const newMovie = new Movie({
      title,
      image_url: image,
      info_url: `https://imdb.com/${moreInfoLink}`,
    });
    movies.push(newMovie);
    await newMovie.save(); // commit it
  });
  return movies;
};

// Performs scrape on specific movie information
const searchMovieById = async (id) => {
  console.log(id);
};

module.exports = { searchMovies, searchMovieById };
