/* eslint-disable import/no-anonymous-default-export */
import {
  GET_TASKS,
  ADD_TASK,
  DELETE_TASK,
  GET_TASKS_REQUEST,
  ADD_TASK_REQUEST,
  DELETE_TASK_REQUEST,
} from '../actions/types';

// The initial state for tasks is followed below
const initialState = {
  loading: false,
  success: false,
  taskList: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TASKS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_TASKS:
      return { loading: false, ...action.payload }; // contains success boolean and also the taskList which is all the tasks in the DB

    case ADD_TASK_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ADD_TASK:
      const addedItem = action.payload.task; // contains the task (name, id, etc. from mongo/db interaction)
      return {
        ...state,
        loading: false,
        taskList: [...state.taskList, addedItem],
      };

    case DELETE_TASK_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_TASK:
      const filteredTasks = state.taskList.filter(
        ({ _id }) => _id !== action.payload.taskDeleted._id,
      );
      return { ...state, loading: false, taskList: filteredTasks };
    default:
      return state;
  }
};

export default taskReducer;
