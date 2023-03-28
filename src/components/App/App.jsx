import React from 'react';
import Header from '../Header/Header';
import ListOfTasks from '../TaskList/TaskList';
import './App.css';

function App () {
  return (
    <div className="App">
      
    <Header />
    <main>
       <ListOfTasks />
        </main>
    </div>
  );

}

export default App
