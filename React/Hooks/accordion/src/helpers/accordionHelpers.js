// still need to import react as the obvious: these functions use react/jsx logic
//so we need to import it
import React from 'react';

// helper function for the data to throw a nice simple function call in the return statememnt of our actual component
export const renderAccordionItems = (items, getIndex, activeIndex) => {
  // map(itemIterating, optional index argument [using this here to be able to track which index [item in the accordion] that is selected])
  const renderedItems = items.map((item, index) => {
    //determine if the current index we are iterating on is === active state in the accordion
    // [key thing] : we separated this helper from accordion! so, we passed the state down as a parameter to this function
    // such that we can still see the state, but we couple it stricly to the component and do not put it here!
    const active = index === activeIndex ? 'active' : '';
    return (
      <React.Fragment key={item.title}>
        <div
          //dynamic styling : will add the active class only to the item in the accordion in which is currently the activeIndex in the state of the accordion...we passed that in
          className={`title ${active}`}
          //pass the callback into this event handler to be called sometime later with an arrow function
          // on the div: getIndex is a callback from the component! We used some nice design to separate these heavy
          //logic functions from the component itself
          onClick={() => getIndex(index)}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>

        <div
          // same here: only showing the content if the item is active
          className={`content ${active}`}
        >
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return renderedItems;
};
