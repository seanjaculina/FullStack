const fetch = require('node-fetch');
const cheerio = require('cheerio');
require('dotenv').config();

const baseURI = process.env.IMDB_URI;

// Performs the request - returns promise to be resolved
const searchMovies = async (term) => {
  const page = await fetch(`${baseURI}${term}`);
  const html = await page.text();

  // Init cheerio to load the html being requested
  const $ = cheerio.load(html);

  const movies = [];

  // Get every element in the table
  $('.findResult').each((index, element) => {
    const el = $(element);
    const title = el.find('td.result_text a').text(); // get the title of the element
    const image = el.find('td a img').attr('src'); // get the image source attribute
    const moreInfoLink = el.find('td.result_text a').attr('href'); // get the link to more info on this movie
    const movie = {
      title,
      image,
      url_: `${baseURI}${moreInfoLink}`,
    };
    movies.push(movie);
  });
  return movies;
};

module.exports = searchMovies;
