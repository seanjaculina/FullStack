/*
    This method works with `node-fetch` to retreive cookies from
    a response in a suitable form so they can be simply
    added to a request.

*/

function getCookies(res) {
  let rawStrings = res.headers.raw()["set-cookie"]
  let cookies = [];
  rawStrings.forEach(function (ck) {
    cookies.push(ck.split(";")[0]); // Just grabs cookie name=value part
  });
  return cookies.join(";"); // If more than one cookie join with ;
}

module.exports = getCookies;