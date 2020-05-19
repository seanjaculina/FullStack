import React, {Component} from 'react';

class InputLog extends Component {
  constructor (props) {
    super (props);
    //maintains state for controlled input
    this.state = {
      chars: '',
    };

    //bind events
    this.onChangeInput = this.onChangeInput.bind (this);
    this.ignoreEnter = this.ignoreEnter.bind (this);
  }

  //prevent the default behavior of the form
  ignoreEnter (e) {
    e.preventDefault ();
  }

  onChangeInput (e) {
    //for debugging: log the character as they are typed
    console.log (e.target.value);

    //referencing the targets name attribute and returning the corresponding state [] on an object will go to that key
    //therefore we can get that key fast by the name reference and assigning it the target element that had the events value
    this.setState ({
      [e.target.name]: e.target.value,
    });
    //send the current keystroke character up to app component to hold state with the callback passed as prop
    this.props.onCharPress (e.target.value);
  }
  render () {
    return (
      <form className="input-form" onSubmit={this.ignoreEnter}>
        <label htmlFor="inputLog">Type Below</label>
        {/*controlled input: we control the state of the input value using state passing it to value=*/}
        <input
          name="chars" //<- used to reference this element everywhere: we use the same name as a state value so we can index state in forms: this is good practice
          type="text"
          value={this.state.chars}
          onChange={this.onChangeInput} //every char change, call the onchNAGEinPUT
        />
      </form>
    );
  }
}

export default InputLog;
