const axios = require('axios');
const cheerio = require('cheerio');
const convertToUSD = require('./conversion');

let URL = 'http://books.toscrape.com/';

// Gets the HTML page - returns promise as it is an async func
const getPage = async (url = URL) => {
  const { data } = await axios.get(url);
  return data;
};

// Get number of pages of books to scrape
const getNumberPages = async ($) => {
  // Get total results and the amount of results per page so we can loop all pages and get all data
  const totalResults = $('.form-horizontal strong:first-of-type').text();
  const totalOnPage = $('.form-horizontal strong:last-of-type').text();
  const totalPages = totalResults / totalOnPage;
  return totalPages;
};

const parseHTML = ($, URL, books) => {
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
  console.log(books);
};

const scrapeAllProducts = async () => {
  // Init cheerio
  const html = await getPage();
  const $ = cheerio.load(html);
  const totalPages = getNumberPages($);

  const books = [];

  for (let i = 1; i < totalPages + 1; i++) {
    // Index page - page 1
    if (i === 1) {
      parseHTML($, URL, books);
    } else {
      URL = `${URL}catalogue/page-${i}.html`;
      const html = await getPage(URL);
      const $ = cheerio.load(html);
      parseHTML($, URL, books);
    }
  }
  return books;
};

scrapeAllProducts().then((books) => console.log(books));
