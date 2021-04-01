import React, {Component} from 'react';

// this is about it for creating a context object for our data for the app
// can take in the default string or defult data we would want to start with when app loads
//export default React.createContext('english');

// making a global 'store' using context instead of redux

// create context -> create the store for the app
const Context = React.createContext('english', 'blue');

// named export class to use in any component to use as a context.provider wrapper to give any component in our app access to the store
// this is ideally how we should set up the context store system! separate business logic from store
export class Store extends Component {
  // can access this state [since provider provides state to all children who use a consumer or context type and we would access it with the key from this state!]
  state = {
    language: 'english', // initial language === english
    color: 'blue', // and color is blue for usa
  };

  // callback method to change language : can go anywhere in our app. This is like a 'action creator' in redux: can be called
  // by simply hooking into the context with contextType or consumer in any componnet and using this.context or consumer to get the state
  // to change
  onChange = (language, color) => {
    this.setState({
      language,
      color,
    });
  };

  render() {
    return (
      // 'provide' the app the state from the  'context' object we made including any callbacks etc to change the state like an action creator
      <Context.Provider value={{...this.state, onChange: this.onChange}}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;

/**

Context object is now made! We can now pass data for our app anywhere to children by importing this
file, and simply creating a static contextType = thisFilesName;

and then we can LITERALLY access context using this.context 

this is amazing and makes the use of app level starte 'easier' however still, redux is king

 */
