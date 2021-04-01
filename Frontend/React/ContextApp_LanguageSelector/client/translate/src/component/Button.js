import React, {Component} from 'react';

// context hookup -> context is essentially the 'global store' for various data. We see though how this is a bit less interesting than redux and a little bit
// less senseful
import Context from './context/ContextStore';

class Button extends Component {
  // hookup to context: must be named contextType for React context to work and must be static [class level variable: non-instance variable WE KNOW THIS!]
  // if we use a Consumer, though, we do not need this: things are easier, so, i will have this commented out bUT this is one of the two ways
  // we can hook into our context and get the data there

  // get the current context state : this is a callback to the actual function the Consumer needs to call to get that state: this is just a cleanup for us! See video 307
  renderSubmit(language) {
    return language === 'english' ? 'Submit' : 'enviar';
  }

  // will render the color: this is just a helper method to clean up the nested consumers
  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <Context.Consumer>
          {({language}) => this.renderSubmit(language)}
        </Context.Consumer>
      </button>
    );
  }

  render() {
    return (
      <Context.Consumer>
        {({color}) => this.renderButton(color)}
      </Context.Consumer>
    );
  }
}

export default Button;
/**
 * use a contextType to hook into the context object created in the context file
 *
 * or a consumer which we did here (but commented the other way out)
 */

/**
 * when this.context versus contextName.Consumer ?
 *
 * multiple context objects being used in one component means we would need more than one this.context reference. This is obvious
 * but, we cannot use this on more than one, and strictly only one 'thing' in javaacript HOWEVER, a Consumer is a property of ALL CONTEXT OBJECTS
 * therefore, using a consumer allows us to hook into more than one context whereas this.context is only for one particular context state
 *
 * we used multiple contexts in this app, so, here is a good example!
 */
// we can only return a function in a consumer, but in this case, we havr the text being generated from the state and also the button color
// and so the trext and button and all must now be a returned value from the ccolor consumer since thats just how things go, so, we will just have to do this
