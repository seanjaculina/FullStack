// still need to import react as the obvious: these functions use react/jsx logic
//so we need to import it
import React from 'react';

// handles the event object, title and index
export const getIndex = (e, title, index) => {
  console.log(e.target, title, index);
};

// helper function for the data to throw a nice simple function call in the return statememnt of our actual component
export const renderAccordionItems = (items) => {
  const renderedItems = items.map((item, index) => {
    return (
      <React.Fragment key={item.title}>
        <div
          className="title active"
          //pass the callback into this event handler to be called sometime later with an arrow function
          onClick={(e) => getIndex(e, item.title, index)}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="content active">
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return renderedItems;
};
