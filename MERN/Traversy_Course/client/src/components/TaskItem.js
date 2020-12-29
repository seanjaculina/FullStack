import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTask } from '../actions/itemActions';
import {
  ListGroupItem,
  Button,
  UncontrolledTooltip,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import RichTextEditor from './RichTextEditor';

function TaskItem({ task, removeTask }) {
  const [isChecked, setIsChecked] = useState(false);
  const [editorHTML, setEditorHTML] = useState(null);

  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const toggleAndSubmit = () => {
    setModal(!modal);
    submitHtml();
  };

  const toggle = () => {
    setModal(!modal);
  };

  const getCurrentValue = (editorText) => {
    console.log(editorText);
    setEditorHTML(editorText);
  };

  const submitHtml = () => {
    dispatch(updateTask(task._id, task.name, editorHTML, state.auth.token));
  };

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
          className="update-btn"
          id={`UncontrolledTooltipExample${task._id}`} // id reference for the tooltip to hook in to
          color="info"
          size="md"
          onClick={toggle}
          style={{
            marginRight: '.2rem',
          }}
        >
          <i className="far fa-edit" style={{ color: '#fff' }}></i>
        </Button>
        <UncontrolledTooltip
          placement="top"
          target={`UncontrolledTooltipExample${task._id}`}
        >
          Update task
        </UncontrolledTooltip>
        <Modal
          isOpen={modal}
          toggle={toggle}
          contentClassName="my-modal"
          centered="false"
          size="xl"
        >
          <ModalHeader toggle={toggle}>{task.name}</ModalHeader>
          <ModalBody>
            <RichTextEditor data={task} getCurrentValue={getCurrentValue} />
          </ModalBody>
          <ModalFooter>
            {/* Have these buttons send request to the endpoint for updating a task */}
            <Button color="success" onClick={toggleAndSubmit}>
              Update Task
            </Button>{' '}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        <Button
          className="complete-btn"
          id={`UncontrolledTooltipExample${task._id + 1}`} // id reference for the tooltip to hook in to
          color="success"
          size="md"
          onClick={() => setIsChecked(!isChecked)}
          style={{
            marginRight: '.2rem',
          }}
        >
          <i className="far fa-check-circle" style={{ color: '#fff' }}></i>
        </Button>
        <UncontrolledTooltip
          placement="top"
          target={`UncontrolledTooltipExample${task._id + 1}`}
        >
          Mark as complete
        </UncontrolledTooltip>
        <Button
          className="remove-btn"
          id={`UncontrolledTooltipExample${task._id + 2}`} // id reference for the tooltip to hook in to
          color="danger"
          size="md"
          onClick={() => removeTask(task._id, state.auth.token)} // pass up this items ID and the auth token
          style={{ marginRight: '2rem' }}
        >
          <i className="fas fa-trash-alt" style={{ color: '#fff' }}></i>
        </Button>
        <UncontrolledTooltip
          placement="top"
          target={`UncontrolledTooltipExample${task._id + 2}`}
        >
          Remove task
        </UncontrolledTooltip>
        {task.name}
      </ListGroupItem>
    </div>
  );
}

export default TaskItem;
