import React from "react";

// Styles
import "../index.css";

// Components
import ListItem from "./ListItem";

// Data import
import { users } from "../data";

// helper function to clean up the main component rendering - I like to separate logic from rendering pure JSX in my code
const renderUserItemCard = (name, age, _id) => {
  return <ListItem name={name} age={age} id={_id} key={_id} />;
};

const ListBox = () => {
  return (
    <div className="container">
      {users.map(({ name, age, _id }) => renderUserItemCard(name, age, _id))}
    </div>
  );
};

export default ListBox;
