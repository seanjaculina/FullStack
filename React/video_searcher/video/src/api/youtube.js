import axios from 'axios';

//creating a baseline axios instance: in this case, we put the query params in the app components axios call
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3'
});