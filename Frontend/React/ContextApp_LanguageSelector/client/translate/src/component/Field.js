import React, {Component} from 'react';

// context from our main context store
import Context from './context/ContextStore';

class Field extends Component {
  // hook into context -> must follow the exact naming on  the left of = and reference the name of the file(s) we give for app context
  static contextType = Context;

  render() {
    // determine the text for the name field from context
    const text = this.context.language === 'english' ? 'Name' : 'Nome';

    return (
      <div className="ui field">
        <label> {text} </label> <input />
      </div>
    );
  }
}

export default Field;
