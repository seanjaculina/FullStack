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

  $('div ol.row li').each((index, element) => {
    const book = $(element);
    const bookTitle = book.find('h3 a').attr('title');
    const bookImage = book.find('div.image_container a img').attr('src');
    const bookPrice = convertToUSD(
      book.find('div.product_price p:first-child').text().trim().slice(1),
    );
    console.log(bookPrice);
  });
};

scrapeAllProducts();
