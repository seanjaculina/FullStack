import React from 'react'

//this component makes the spinning loading animation using semantic ui classes!
//the exact jsx structure and classnames are the exact doc spec in semantic ui
const Spinner = ({ message }) => {
  //i destrucutred the prop above, but you simply can leave it as props
  //and then do props.prop_name in {} wherveer you wish or extract it into a variable
  // (best design practice) and use it
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">
        {message}
      </div>
    </div>
  )
}

//default prop! If a prop is not passed in when mounting this component,
//say in an app that we make that we want to use this spinner, but the message to say soemthing else,
//we will default to this loading prop so no matter where we put the spinner, it will say loading 
//which is great, but if we wish to make a message more distinct, of course we can change the prop at mount
//and still extract it and use it if not forgotten or ignored
Spinner.defaultProps = {
  message: 'Loading...'
}

export default Spinner;