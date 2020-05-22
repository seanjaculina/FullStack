/**
 * this folder creates a default axios instance to configure the object for anywhere in the project
 */

import axios from 'axios';

export default axios.create ({
  baseURL: 'https://jsonplaceholder.typicode.com', //leave off the trailing routes we pull from because we want our actions and events to control what routes we go to with our axios requests
});
