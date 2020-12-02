import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Todos = ({ match }) => {
  console.log(match);
  const [todoData, setTodos] = useState(null);

  useEffect(() => {
    (async () => {
      // send request to the endpoint for todos and pass the userId into the query string to get that users data by the ID we passed
      // if we were using express, we would get the data sent from here and then pull it out with req.params
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos?userId=${match.params.id}`,
      );
      const data = await res.json();
      setTodos(data);
      console.log(data);
    })();
  }, [match.params.id]);

  return (
    <div className="container" style={{ margin: '1rem 1rem' }}>
      <h1>Todos</h1>
      <Link to="/" className="btn btn-light">
        Go Back
      </Link>
    </div>
  );
};

export default Todos;
