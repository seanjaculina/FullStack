import React, { useState, useEffect } from 'react';

const SelectionContainer = ({ selection }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // if the selection is not valid or it is empty, do nothing
    if (!selection || selection.length < 1) return;
    (async () => {
      try {
        const fetchedData = await fetch(
          `https://jsonplaceholder.typicode.com/${selection}`, // send a request to the selected endpoint
        );
        const results = await fetchedData.json();
        setData(results);
        console.log(results);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [selection]);
  return data && data.map((value) => <h1 key={value.id}>{value.id}</h1>);
};

export default SelectionContainer;
