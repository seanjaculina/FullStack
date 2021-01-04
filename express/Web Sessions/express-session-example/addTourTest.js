/* Testing the POST /tours/add API */
const fetch = require("node-fetch");

const urlBase = require('./testURL');


function extractCookies(rawStrings) {
  let cookies = [];
  rawStrings.forEach(function (ck) {
    cookies.push(ck.split(";")[0]); // Just grabs cookie name=value part
  });
  return cookies.join(";"); // If more than one cookie join with ;
}

let addTour = {
  url: urlBase + "addTour",
  options: {
    method: "POST",
    body: JSON.stringify({
      name: "Windsurf K2-18b, 110 Light Years",
      date: "Sometime in 2025",
    }),
    headers: { "Content-Type": "application/json" },
  },
};

let loginAdmin = {
  url: urlBase + "login",
  options: {
    method: "POST",
    body: JSON.stringify({
      // admin user, see users.json file
      email: "antisun1921@outlook.com",
      password: "R.r<E&xt",
    }),
    headers: { "Content-Type": "application/json" },
  },
};

let loginCust = {
  url: urlBase + "login",
  options: {
    method: "POST",
    body: JSON.stringify({
      // admin user, see users.json file
      email: "stedhorses1903@yahoo.com",
      password: "nMQs)5Vi",
    }),
    headers: { "Content-Type": "application/json" },
  },
};

async function someTests() {
  console.log("Try adding tour without logging in");
  try {
    let res = await fetch(addTour.url, addTour.options);
    console.log(`Add Tour result: ${res.statusText}`);
  } catch (e) {
    console.log(`Error: ${e}\n`);
  }

  console.log("Login as admin, then adding tour");
  try {
    let res = await fetch(loginAdmin.url, loginAdmin.options);
    console.log(`login results: ${res.statusText}`);
    // Look at the cookie
	let savedCookie = extractCookies(res.headers.raw()["set-cookie"]);
	console.log(`Saved cookie: ${savedCookie}`);
	addTour.options.headers.cookie = savedCookie;
	// User info from login
	let userInfo = await res.json();
	console.log(userInfo);
    res = await fetch(addTour.url, addTour.options);
	console.log(`Add Tour result: ${res.statusText}\n`);
	let data = await res.json();
	console.log(data);
  } catch (e) {
    console.log(`Error: ${e}\n`);
  }

  console.log("Login as customer, then try adding tour");
  try {
    let res = await fetch(loginCust.url, loginCust.options);
    console.log(`login results: ${res.statusText}`);
    // Look at the cookie
	let savedCookie = extractCookies(res.headers.raw()["set-cookie"]);
	console.log(`Saved cookie: ${savedCookie}`);
	addTour.options.headers.cookie = savedCookie;
	// User info from login
	let userInfo = await res.json();
	console.log(userInfo);
    res = await fetch(addTour.url, addTour.options);
	console.log(`Add Tour result: ${res.statusText}\n`);
	let data = await res.json();
	console.log(data);
  } catch (e) {
    console.log(`Error: ${e}\n`);
  }
}

someTests();
