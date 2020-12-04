"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
//const URL = 'https://jsonplaceholder.typicode.com/todos/1'; <-- fetches one todo
var URL = 'https://jsonplaceholder.typicode.com/todos'; // <-- fetches ALL todos
axios_1["default"].get(URL).then(function (res) { return console.log(res.data); });
