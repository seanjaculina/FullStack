require("dotenv").config()

//export the api key from the env var (and whatever else)
export default {
    key : process.env.REACT_APP_API_KEY
}
