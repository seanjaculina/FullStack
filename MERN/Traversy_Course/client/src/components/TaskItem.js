import React, { useState } from 'react';
import { ListGroupItem, Button, UncontrolledTooltip } from 'reactstrap';

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
          id={`UncontrolledTooltipExample${task._id}`} // id reference for the tooltip to hook in to
          color="success"
          size="md"
          onClick={() => setIsChecked(!isChecked)}
          style={{
            marginRight: '.2rem',
          }}
        >
          √
        </Button>
        <UncontrolledTooltip
          placement="top"
          target={`UncontrolledTooltipExample${task._id}`}
        >
          Mark as complete
        </UncontrolledTooltip>
        <Button
          className="remove-btn"
          id={`UncontrolledTooltipExample${task._id + 1}`} // id reference for the tooltip to hook in to
          color="danger"
          size="md"
          onClick={() => removeTask(task._id)}
          style={{ marginRight: '2rem' }}
        >
          X
        </Button>
        <UncontrolledTooltip
          placement="top"
          target={`UncontrolledTooltipExample${task._id + 1}`}
        >
          Remove task
        </UncontrolledTooltip>
        {task.name}
      </ListGroupItem>
    </div>
  );
}

export default TaskItem;
