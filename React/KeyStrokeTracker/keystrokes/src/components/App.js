import React, {Component} from 'react';
import '../App.css';
import InputLog from './InputLog';

//rewrite this to output wpm, typing speed, etc.
//design it and upload to portfolio

//start thinking of design and arch for the big e-commerce site

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      counter: 0,
      currentString: '',
    };

    //bind events or use arrow method or callback: i like bind
    this.onCharPress = this.onCharPress.bind (this);
  }

  //takes in the most recent character entered by user by passing this function as a callback prop and everytime an onchange happens,
  //this function is invoked passing it the character, and we handle it here by increasing state counter
  //and mainintining the current string state thats in the dom
  onCharPress (char) {
    this.setState ({
      counter: this.state.counter + 1,
      currentString: char,
    });
  }

  render () {
    return (
      <div className="App">
        <div className="container" />
        <h1>Keystroke Tracker</h1>
        <p>
          This simple app tracks and displays all keypresses and the current count of keys pressed at any given time
        </p>
        {/*using a function in this component to lift state up from out input component:
        we will get the character entered from a user, and set the state here in parent*/}
        <InputLog onCharPress={this.onCharPress} />
        <div>
          <h3>Keystrokes</h3>
          <p>{this.state.currentString}</p>
        </div>
        <div>
          <h3>Count</h3>
          {this.state.counter}
        </div>
      </div>
    );
  }
}

export default App;
