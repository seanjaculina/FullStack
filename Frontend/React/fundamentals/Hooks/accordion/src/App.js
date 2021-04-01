import React from "react";

// the array of items we are using to render in the accordion: named export so must use {} to import
import { items } from "./Items";

import Accordion from "./components/Accordion";

const App = () => {
  return (
    <div>
      <Accordion items={items} /> {/* items array from the items file */}
    </div>
  );
};

export default App;
