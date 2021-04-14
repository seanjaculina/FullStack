const axios = require('axios');
const cheerio = require('cheerio');
const convertToUSD = require('./conversion');

const URL = 'http://books.toscrape.com/';

// Gets the HTML page - returns promise as it is an async func
const getPage = async () => {
  const { data } = await axios.get(URL);
  return data;
};

const scrapeAllProducts = async () => {
  const html = await getPage();

  // Init cheerio
  const $ = cheerio.load(html);

  // Get total results and the amount of results per page so we can loop all pages and get all data
  const totalResults = $('.form-horizontal strong:first-of-type').text();
  const totalOnPage = $('.form-horizontal strong:last-of-type').text();
  const totalPages = totalResults / totalOnPage;

  const books = [];

  for (let i = 1; i < totalPages + 1; i++) {
    if (i === 1) {
    }
  }

  $('div ol.row li').each((index, element) => {
    const book = $(element);
    const bookTitle = book.find('h3 a').attr('title');
    const bookMoreInfo = `${URL}${book.find('h3 a').attr('href')}`;
    const bookImage = book.find('div.image_container a img').attr('src');
    const bookPrice = `$${convertToUSD(
      book.find('div.product_price p:first-child').text().trim().slice(1),
    )}`;
    const bookDetails = {
      title: bookTitle,
      img: bookImage,
      price: bookPrice,
      more_info: bookMoreInfo,
    };
    books.push(bookDetails);
  });
  return books;
};

scrapeAllProducts().then((books) => console.log(books));
