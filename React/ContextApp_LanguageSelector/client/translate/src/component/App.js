import React, {Component} from 'react';

// context import -> App is source of truth (data) in our app so we need to hook into context to change the state of it with a Provider
import LanguageContext from './context/LanguageContext';
import ColorContext from './context/ColorContext';

import UserCreate from './UserCreate';

/**
 * we have not getten to hooks so as of now we must use class components when we need 
 * consturcotrs, lifecycle hooks, and a lot of methods 
 */

class App extends Component {
  // and actually the constructor, too, is unecessary if not using local fields
  // constructor (props) {
  //   super (props);

  //   // negate this is possible if we make the methods arrow methods such that arrow methods need not to care about 'this' and will just bind to the object automatically
  //   //this.onLanguageChange = this.onLanguageChange.bind (this);
  // }
  state = {
    language: 'english',
    color: 'primary',
  };

  // on click callback to change state of lang
  onChange = (language, color) => {
    this.setState ({
      language, // in JS when key/val share same name, we can condense the code and just use the value name and it will decipher this for us
      color,
    });
  };

  render () {
    return (
      <div className="ui container">
        {/**onclick event: make sure its bount! use arrow function to bind correctly */}
        <div>
          Select a language:
          <i
            className="flag us"
            onClick={() => this.onChange ('english', 'blue')}
          />
          <i
            className="flag pt"
            onClick={() => this.onChange ('portuguese', 'green')}
          />
        </div>
        {/*wrap the UserCreate form which renders all the oither components in the ContextFileNameImported.Provider
        this is a must! this is not the same thing as react-redux provider but plays the same sort of role: wrapping children components as so
        in a Provider from context will allow us to hook into context with the intent/ability to change that context state
        WE MUST PASS IT A PROP CALLED value and assign it the state of the object [or anything we want but think about it: does fixed text mean anything? No, so, state makes sense as state changes]
         -> the state here is the langauge selected by the user that will change the language of the button and name fields in the ui
        key thing here: provider itself is its own component! refer context section react course
        */}
        <LanguageContext.Provider value={this.state.language}>
          {/*
          *UserCreate has access to the color context too: does not matter if this provider is inside the other one we have, or outside wrapping all this
          there is no right way: this is just my way. Only thing that matters is that all children we want to use context  MUST be wrapped in all the providers for that context we wish to give components access to 
          i saved correspondginc colors to state and the default was primary such that the state change in color can be passed as value to the provider
          and in our context object, the value, or state can be accessed to change coor, or whatever in any app using a consumer or this.context (see the different and when to use it above)
          */}
          <ColorContext.Provider value={this.state.color}>
            <UserCreate />
          </ColorContext.Provider>
        </LanguageContext.Provider>

      </div>
    );
  }
}

export default App;

/**
 * one gotcha on providers: provider will render a new component for every time it is called to wrap some portion of children components
 * therefore, we will lose state referencing if we use context in many different places to wrap things so, we need to ALWAYS keep this in mind
 * this is why using ocntext is not really seen as a large app solution for state.. redux still will be king
 * 
 * 
 * 
 * we saw hooking into the context object is as easy as this.context however there is one more way we can hook in to it:
 * 
 *    using a Consumer [this lives as a property inside the createContext function itself in the context file we made]
 * 
 */
