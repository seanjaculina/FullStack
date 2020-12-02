import React, { useState, useEffect } from 'react';
import UserItem from './UserItem';

const SelectionContainer = () => {
  const [data, setData] = useState(null);
  const [information, setInformation] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const fetchedData = await fetch(
          `https://jsonplaceholder.typicode.com/users`,
        );
        const results = await fetchedData.json();
        setData(results);
        console.log(results);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  // handles which button you clicked for posts or todos
  const onClick = (e, userID) => {
    const resourceString = e.target.outerText.split(' ')[1].toLowerCase();
    const ID = userID;
    setInformation((oldState) => ({ ...oldState, resourceString, ID }));
    fetch(`https://jsonplaceholder.typicode.com/${resourceString}?userId=${ID}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return data ? (
    <div className="row">
      {data &&
        data.map((user) => (
          <UserItem key={user.id} user={user} onClick={onClick} />
        ))}
    </div>
  ) : null;
};

export default SelectionContainer;
