//third party imports first
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'; //import the provider needed for react-redux : this will provide us a store as prop to be globally used anywhere in our app (which is why we wrap app in it)
import {createStore, applyMiddleware} from 'redux'; //function to create a global store (state) for the app (an app should only have one store!) and also a function to use redux thunk on async methods
import App from './components/App';
import thunk from 'redux-thunk';

//local project imports here
import reducers from './reducers'; //importing our reducers [notice no {} this is because we are using the default export of the combined reducers, so it is unnamed, therefore no {}]

//readability: just create the store here and stil pass it as prop to the provider: and if we need thunk, that is the second param : applyMiddlewate(thunk_var)
const store = createStore (reducers, applyMiddleware (thunk));

//index renders the top level app as we know (or whatever we want it to render at top level of course)
ReactDOM.render (
  //wrap our whole app in a provider (like the design needed to accomplish all this redux stuff) and then as we saw in the architecture drawing (See ipad or class)
  // the store must be passed to the provider! So, we pass it as a property to provider and we basically need to createStore() and pass it our combined reducers we made in the reducer file
  //remember in our notes and codepen, we did this as well. This is just in a prop in actual code but this is how you pass reducer to create store
  //and pass the priovider the store as a prop MUST BE DONE LIKE THIS: reducers is referencing the exported default combined reducers from our reducer files

  //now the whole app and all the components have access to the store (state) simply by using the connect layer to act as a middleman betweeen the provider and store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById ('root')
);
