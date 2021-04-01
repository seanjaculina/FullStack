//include dotenv : refactor and make a config file
require("dotenv").config();

export const key = process.env.REACT_APP_API_KEY;
export const secret = process.env.REACT_APP_SECRET;
export const url = process.env.REACT_APP_REQUESTER;
