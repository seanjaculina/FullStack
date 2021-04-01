/**
 * this folder creates a default axios instance to configure the object for anywhere in the project
 * 
 * in normal projects: make a .env file for api key, make a config file that returns all our env vars as importable variables so we can  
 * deeply nest our vars 
 * 
 */

import axios from 'axios';

export default axios.create ({
  baseURL: 'https://jsonplaceholder.typicode.com', //leave off the trailing routes we pull from because we want our actions and events to control what routes we go to with our axios requests
});
