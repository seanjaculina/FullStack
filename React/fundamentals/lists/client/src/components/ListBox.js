import React from "react";

// Styles
import "../index.css";

// Components
import ListItem from "./ListItem";

// Data import
import { users } from "../data";

const ListBox = () => {
  return (
    <div className="container">
      {users.map(({ name, age, _id }) => (
        <ListItem name={name} age={age} id={_id} key={_id} />
      ))}
    </div>
  );
};

export default ListBox;
