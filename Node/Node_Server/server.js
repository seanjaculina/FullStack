const http = require("http"); // import http module

//const html = "<h1>Hello there!</h1><div><p>My name is tanner</p></div>";

const server = http.createServer((req, res) => {
  // console.log(req.statusCode);
  const url = req.url;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html"); // sets response headers (some meta data for the response packet to tell the browser what is going on)
    res.write(
      `<h1>Hello there! Enter some data</h1>
        <div>
          <form action="/hello" method="POST">
            <label for"name" >Enter your name</label>
            <input type="text" id="name">
            <button>submit</button>
          </form>
        </div>
      `
    );
    res.end();
  } else if (url === "/hello") {
    res.write("<h1>Hello</h1>");
    res.end();
  } else {
    res.write("<h1>not form</h1>");
    res.end();
  }
});
const PORT = process.env.PORT || 8080;

server.listen(PORT, console.log(`Server listening on port ${PORT}`));
