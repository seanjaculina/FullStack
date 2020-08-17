import React, { useState } from "react";

// importing helpers from 3rd refactor!
import { renderAccordionItems } from "../helpers/accordionHelpers";

// takes in prop called items: we destructure it for simplicity
const Accordion = ({ items }) => {
  // functional version of state using the useState hook
  const [activeIndex, setActiveIndex] = useState(null);

  // handles the event object, and the index from the map in the helper function to set the state to that index
  const getIndex = (index) => {
    // changing state with our function to get this item
    setActiveIndex(index);
  };

  return (
    <div className="ui styled accordion">
      {/* pass the items array, the callback to setstate onClick and the current state to the render helper in the helpers dir - we imported that helper to use it here*/}
      {renderAccordionItems(items, getIndex, activeIndex)}
    </div>
  );
};

export default Accordion;

/**
 * 
 * THIS FUNCTION COULD HAVE BEEN IN THIS FILE, BUT, IT WOULD BE SO CLUTTERED.. it made more sense to extract it to a new folder
 * called 'helpers' and then simply pass the state of the componnet this function is helping on to, the callback getIndex to get the items index in the mapping of each 
 * object to set the state back in this file and also the items array [which we put in its own file too]
 * 
 * this is all optional!! we could have done this all in one file but i think this is cooler
 * 
 * // helper function for the data to throw a nice simple function call in the return statememnt of our actual component
const renderAccordionItems = (items, getIndex, activeIndex) => {
  const renderedItems = items.map((item, index) => {
    //determine if the current index we are iterating on is === active state in the accordion
    // [key thing] : we separated this helper from accordion! so, we passed the state down as a parameter to this function
    // such that we can still see the state, but we couple it stricly to the component and do not put it here!
    const active = index === activeIndex ? 'active' : '';
    return (
      <React.Fragment key={item.title}>
        <div
          className={`title ${active}`}
          //pass the callback into this event handler to be called sometime later with an arrow function
          // on the div: getIndex is a callback from the component! We used some nice design to separate these heavy
          //logic functions from the component itself
          onClick={(e) => getIndex(e, item.title, index)}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return renderedItems;
};

 */
