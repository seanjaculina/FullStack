//third party imports first
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; //import the provider needed for react-redux : this will provide us a store as prop to be globally used anywhere in our app (which is why we wrap app in it)
import {
  createStore, //function to create a global store (state) for the app (an app should only have one store!) and also a function to use redux thunk on async methods
  applyMiddleware,
} from "redux";
import App from "./components/App";
import thunk from "redux-thunk";

//local project imports here
import reducers from "./reducers"; //importing our reducers [notice no {} this is because we are using the default export of the combined reducers, so it is unnamed, therefore no {}]

//better to make store in a variable and then put it in the provider
const store = createStore(reducers, applyMiddleware(thunk));

//index renders the top level app
ReactDOM.render(
  //wrap our whole app in a provider
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
