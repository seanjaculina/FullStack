import React from 'react';

// importing helpers from 3rd refactor!
import {getIndex, renderAccordionItems} from '../helpers/accordionHelpers';

// getIndex() is a dependency for the renderAccordionItems function in the helpers, so we actually wont ever use it
// but we will import it to prove we have no errors

// takes in prop called items: we destructure it for simplicity
const Accordion = ({items}) => {
  return (
    <div className="ui styled accordion">{renderAccordionItems(items)}</div>
  );
};

export default Accordion;
