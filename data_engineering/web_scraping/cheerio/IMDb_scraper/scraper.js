const fetch = require('node-fetch');
const cheerio = require('cheerio');
require('dotenv').config();

const Movie = require('./models/Movie');
const baseURI = process.env.IMDB_URI;

/**
 * Performs the request to the website to scrape based off the term user enters from the client
 * - Scrape the data, add it to the db, then return all documents in the database that match the query
 *
 */
const searchMovies = async (term) => {
  const page = await fetch(`${baseURI}${term}`);
  const html = await page.text();

  const movies = [];

  // Init cheerio to load the html being requested
  const $ = cheerio.load(html);

  // Get every element in the table
  $('.findResult').each(async (index, element) => {
    const el = $(element);
    const title = el.find('td.result_text a').text(); // get the title of the element
    const image = el.find('td a img').attr('src'); // get the image source attribute
    const moreInfoLink = el.find('td.result_text a').attr('href'); // get the link to more info on this movie
    const newMovie = new Movie({
      title,
      image_url: image,
      info_url: `${baseURI}${moreInfoLink}`,
    });
    movies.push(newMovie);
    await newMovie.save();
  });
  return movies;
};

module.exports = searchMovies;
