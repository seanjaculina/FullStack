import React, { useState } from 'react';
import { ListGroupItem, Button } from 'reactstrap';

function TaskItem({ task, removeTask }) {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div>
      <ListGroupItem
        className="mb-3"
        style={{
          borderRadius: '3px',
          textDecoration: isChecked ? 'line-through' : '', // dynamic styling
        }}
      >
        <Button
          className="remove-btn"
          color="success"
          size="md"
          onClick={() => setIsChecked(!isChecked)}
          style={{
            marginRight: '.2rem',
          }}
        >
          √
        </Button>
        <Button
          className="remove-btn"
          color="danger"
          size="md"
          onClick={() => removeTask(task._id)}
          style={{ marginRight: '2rem' }}
        >
          X
        </Button>
        {task.name}
      </ListGroupItem>
    </div>
  );
}

export default TaskItem;
