/* eslint-disable import/no-anonymous-default-export */
import {
  GET_TASKS,
  ADD_TASK,
  DELETE_TASK,
  GET_TASKS_REQUEST,
  UPDATE_TASK,
  UPDATE_TASK_REQUEST,
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
    case UPDATE_TASK_REQUEST:
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
    case UPDATE_TASK:
    case ADD_TASK:
      const item = action.payload.task; // contains the task (name, id, etc. from mongo/db interaction)
      return {
        ...state,
        loading: false,
        taskList: [...state.taskList, item],
      };

    case DELETE_TASK_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_TASK:
      const filteredTasks = state.taskList.filter(
        ({ _id }) => _id !== action.payload.taskDeleted._id, // remove the item we got back from the reqquest (and in the action payload) from the state [deleting from DB will not delete from state. Only the UI, potentially depedning how we implement]
      );
      return { ...state, loading: false, taskList: filteredTasks };
    default:
      return state;
  }
};

export default taskReducer;
