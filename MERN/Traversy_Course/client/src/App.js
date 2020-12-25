import React from 'react';
import './App.css';

// Component imports
import NavBar from './components/NavBar';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <div>
      <NavBar />
      <TaskList />
    </div>
  );
};

export default App;
