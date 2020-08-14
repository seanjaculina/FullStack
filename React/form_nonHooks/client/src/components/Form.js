import React, { Component } from "react";

// React strap - bootstrap 4 components for react (basically all normal react but with custom styling)
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class Form_ extends Component {
  state = {
    username: "",
    password: "",
  };

  // Takes in the currently entered character and changes the state for the particular
  // input element
  handleFormChange = (e) => {
    console.log(e.target.value);
    this.setState({
      // get the name attribute of the input field we are typing in and index the state and take the current character entered and add that in
      [e.target.name]: e.target.value,
    });
  };

  // Will prevent the default behavior of form submission, and send the state result - simulates what we would maybe
  // do for a sign in and send a request to as server to sign in to an application
  onFormSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state);
    // pretend we send some network request to login  or whatever in a server
  };

  render() {
    return (
      <Form
        onSubmit={(e) => this.onFormSubmit(e)}
        className="container"
        style={{ marginTop: "100px" }}
      >
        <FormGroup>
          <Label for="username">username</Label>
          <Input
            type="text"
            name="username"
            id="username"
            onChange={(e) => this.handleFormChange(e)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">password</Label>
          <Input
            type="text"
            name="password"
            id="password"
            onChange={(e) => this.handleFormChange(e)}
          />
        </FormGroup>
        <Button
          color="primary"
          type="submit"
          onSubmit={(e) => this.onFormSubmit(e)}
        >
          submit
        </Button>
      </Form>
    );
  }
}

export default Form_;
