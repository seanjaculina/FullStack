import axios from "axios";
import { key, url } from "../config";

// Create an axios instance to be used in any file to submit axios calls
export default axios.create({
  baseURL: `${url}`,
  headers: {
    Authorization: `Client-ID ${key}`,
  },
});
