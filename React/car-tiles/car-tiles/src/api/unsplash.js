import axios from "axios";
import { key, url } from "../config"; //config file holding our env_vars {only pull out key and the url to base off of}

//create a cusom request: takes the url to search and the headers as an object:
//i imported my env vars which is why i am using string interpolation
export default axios.create({
  //create takes in the base url and any headers to do the request: in the get method in client, we pass the sub route (search/images only)
  baseURL: `${url}`,
  headers: {
    Authorization: `Client-ID ${key}` //string interpolation since we are using a variable to store this
  }
});
