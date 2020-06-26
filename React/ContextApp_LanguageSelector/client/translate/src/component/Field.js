import React, {Component} from 'react';

// context
import LanguageContext from './context/LanguageContext';

class Field extends Component {
  // hook into context -> must follow the exact naming on  the left of = and reference the name of the file(s) we give for app context
  static contextType = LanguageContext;

  render () {
    // determine the text for the name field from context
    const text = this.context === 'english' ? 'Name' : 'Nome';

    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;
