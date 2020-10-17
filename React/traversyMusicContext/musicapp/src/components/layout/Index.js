import React from "react";

// holds the search bar and the tracks
import Tracks from "../tracks/Tracks";
import Search from "../tracks/Search";

// this is the root, or 'home page' (component)  that will be shown
const Index = () => {
  return (
    <>
      <Search />
      <Tracks />
    </>
  );
};

export default Index;
