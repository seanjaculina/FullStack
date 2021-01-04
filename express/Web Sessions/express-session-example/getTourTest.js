/* Testing the GET /tours API */
const fetch = require("node-fetch");
const urlBase = require('./testURL');

fetch(urlBase + 'tours')
  .then(function (res) {
	// Look at the cookie
	console.log(res.headers.raw()['set-cookie']);
    return res.json();
  })
  .then(function (data) {
    data.forEach(function (tour, i) {
      console.log(`Tour ${i + 1} name ${tour.name}, date: ${tour.date}`);
    });
  })
  .catch(function (err) {
    console.log(`Error: ${err}`);
  });
