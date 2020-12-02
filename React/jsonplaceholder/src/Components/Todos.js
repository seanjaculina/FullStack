import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import TodoItem from './TodoItem';

const Todos = ({ match }) => {
  console.log(match);
  const [todoData, setTodos] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos?userId=${match.params.id}`,
      );
      const data = await res.json();
      setTodos(data);
    })();
  }, [match.params.id]);

  return (
    <div className="container">
      <h1 style={{ margin: '1rem 1rem' }}>Todos</h1>
      <Link to="/" className="btn btn-light">
        Go Back
      </Link>
      <div className="row">
        {todoData &&
          todoData.map((todo) => <TodoItem data={todo} key={todo.id} />)}
      </div>
    </div>
  );
};

export default Todos;
