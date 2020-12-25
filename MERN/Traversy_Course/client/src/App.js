import React from 'react';
import './App.css';

// Component imports
import NavBar from './components/NavBar';
import TaskList from './components/TaskList';
import TaskBarInput from './components/TaskBarInput';

const App = () => {
  return (
    <div>
      <NavBar />
      <TaskBarInput />
      <TaskList />
    </div>
  );
};

export default App;
