import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { InputGroup, Input, Button } from 'reactstrap';

// Action imports
import { addTask } from '../actions/itemActions';

const TaskBarInput = () => {
  const dispatch = useDispatch(); // Hook to reference a dispatch method

  const [task, setHandleTask] = useState('');
  const handleChange = (e) => {
    setHandleTask(e.target.value);
  };

  const getTaskInput = () => {
    if (task) {
      dispatch(addTask(task)); // dispatch the addItem action to our store
      setHandleTask(''); // empty the bar
    }
  };
  return (
    <div>
      <InputGroup>
        <Input
          placeholder="Add a Task"
          className="mx-5 mb-3 inputLine"
          value={task}
          onChange={handleChange}
          autoFocus
          style={{
            border: 'none',
            borderBottom: '2px solid gray',
            borderRadius: '0px',
          }}
          onSubmit={getTaskInput}
        />
      </InputGroup>
      <Button
        color="dark"
        onClick={getTaskInput}
        className="mx-5"
        style={{ width: '7rem' }}
      >
        Submit
      </Button>
    </div>
  );
};

export default TaskBarInput;
