//STEP 1: Alwats import react/react component and any static files (images, styles, etc)
import React from 'react';
import '../App.css';

//STEP 2: Create our component (class or functional: the new good design is functional using hooks)

//the new way to make components 'functional' 
/**
 * Remember: this is an ES6 arrow function version. We can do this also as:
 * const app = function(props){
 *  //some code
 * }
 * 
 * but the ES6 design looks cleaner (practice both)
 * 
 * also seen below: we pass name,age as props from upper file to lower file. With this, we actually can just destructure
 * the props inline in the params here and also in class based components! This is great, but not necessary
 */
const App = ({ name, age }) => {

  //inline style object : good for basic styling: we should use the className and define stylies in a css file as convention
  const style = {
    'backgroundColor': 'blue',
    'color': '#fff',
    'padding': '10px'
  }


  //to avoid JSX returning before returning jsx, use () after return so everything after return will be returned
  // or else unless the div is not directly after return, it will return and show nothng. So aleways use return() 
  //for commond design and convention
  return (
    //this is all actually JSX (a html/js hybrid style language-ish) and we passed a style attribute 
    <div className="App" style={style}>
      <h1>Hello, {name}</h1>
      {/*      <label htmlFor="na">Age</label>
            <input type='text' placeholder='age'></input>*/}
      <h3>Age: {parseInt(age)}</h3>
    </div>
  );
}

//STEP 3: the default export: we can use es6 import and it will contain this whole component
export default App;

/**
 * What is a component?
 *
 * A component is a function or a class that is used to produce HTML using JSX and handles events, that the browser
 * works with by reacts complex virtual dom design
 *
 * class, for, etc. does not work in JSX: we must use 'className', 'htmlFor' etc. (we can look up all these in the docs)

    JSX inline styling (often used to make independant style objects in a non-modular way in a react file,
      myst use camelcase
        e.g: backgrounColor: 'red'
      )
 */