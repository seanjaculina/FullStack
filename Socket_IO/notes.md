# DISCLAIMER

- Socket.IO requires almost no knowledge of Node or Socket.IO itself, therefore, for new users and programmers alike, the basics can be easy to pick up!

<br>

## Introduction

- Sockets are the solution to most real-time chat systems and how they are architected (built/designed)
- They provide a bi-directional communication channel between the client and the server

<br>

## Starting Up

- Ensure NodeJS is installed globally
- Create a new project and instantiate it as a node project (using package.JSON), install express and nodemon

```terminal
npm init -y
npm i --save express
npm i --save -d nodemon
```

- From here we can create a simple express server to start up our project

```javascript
//import express
const express = require('express');

//create the app
const app = express();

//create a simple route
app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>');
});

//create a development port
const PORT = 3000 || process.env.PORT;

//listen (starts the server)
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
```

- In terminal run the server

```terminal
node index.js
```

- If using nodemon (see how to configure in their docs: I configured my script as npm start)

```terminal
npm start
```
