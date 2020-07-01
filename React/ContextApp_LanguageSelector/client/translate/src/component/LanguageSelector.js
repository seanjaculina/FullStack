import React, {Component} from 'react';

import ContextStore from './context/ContextStore';

class LanguageSelector extends Component {
  // this component only relies on language context therefore, we are not using multiple contexts [which contextType cannot point to multiple]
  // so this makes life easy and we can create a context type singularly here and access the state
  static contextType = ContextStore;

  render() {
    // passed the onChange method from the store to change the language state
    return (
      <div>
        Select a language:
        <i
          className="flag us"
          onClick={() => this.context.onChange('english', 'blue')}
          style={{cursor: 'pointer'}}
        />
        <i
          className="flag pt"
          onClick={() => this.context.onChange('portuguese', 'green')}
          style={{cursor: 'pointer'}}
        />
      </div>
    );
  }
}
export default LanguageSelector;
