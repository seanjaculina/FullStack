import React, {Component} from 'react';

// context import -> App is source of truth (data) in our app so we need to hook into context to change the state of it with a Provider
//import LanguageContext from './context/LanguageContext'; <- without the wrapper
import {Store} from './context/ContextStore';

import UserCreate from './UserCreate';
import LanguageSelector from './LanguageSelector';

/**
 * we have not getten to hooks so as of now we must use class components when we need
 * consturcotrs, lifecycle hooks, and a lot of methods
 */

class App extends Component {
  render() {
    return (
      <div className="ui container">
        {/**wrap the component children in our root store context so we can pass all state and callbacks as props to any component in our app: see react course */}
        <Store>
          <LanguageSelector />
          <UserCreate />
        </Store>
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
