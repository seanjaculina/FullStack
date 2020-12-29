import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTask } from '../actions/itemActions';
import {
  ListGroupItem,
  Button,
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
    dispatch(updateTask(task._id, task.name, editorHTML, state.auth.token));
    setModal(!modal);
  };

  const toggle = () => {
    setModal(!modal);
  };

  const getCurrentValue = (editorText) => {
    setEditorHTML(editorText);
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
          color="info"
          size="md"
          onClick={toggle}
          style={{
            marginRight: '.2rem',
          }}
        >
          <i className="far fa-edit" style={{ color: '#fff' }}></i>
        </Button>
        <Modal
          isOpen={modal}
          toggle={toggle}
          contentClassName="my-modal"
          centered={false}
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
          color="success"
          size="md"
          onClick={() => setIsChecked(!isChecked)}
          style={{
            marginRight: '.2rem',
          }}
        >
          <i className="far fa-check-circle" style={{ color: '#fff' }}></i>
        </Button>
        <Button
          className="remove-btn"
          color="danger"
          size="md"
          onClick={() => removeTask(task._id, state.auth.token)} // pass up this items ID and the auth token
          style={{ marginRight: '2rem' }}
        >
          <i className="fas fa-trash-alt" style={{ color: '#fff' }}></i>
        </Button>
        {task.name}
      </ListGroupItem>
    </div>
  );
}

export default TaskItem;
