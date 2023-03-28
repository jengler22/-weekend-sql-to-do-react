import React from 'react';
import Header from '../Header/Header';
import ListOfTasks from '../TaskList/TaskList';
import './App.css';

function App () {
  return (
    <div className="App">
      <h6><img src="https://img.freepik.com/free-vector/restaurant-logo_23-2147506959.jpg?w=740&t=st=1679964189~exp=1679964789~hmac=59e40b3a5a5785c50b70013f94bc5491146ba01554707b0df9166e10de96a53b" width = "300" height = "300" /></h6>
     <Header />
     
    <main>
       <ListOfTasks />
        </main>
    </div>
  );

}

export default App
