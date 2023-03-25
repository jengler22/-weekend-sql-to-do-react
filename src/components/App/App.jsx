import {useState} from 'react';
import Header from '../Header/Header';

function App () {
  return (
    <div className="App">
    <Header />
    <main>
      <form>
      {/* // onSubmit={createTask} */}
            <h2>Create Task</h2>
            Task <input type="Text"/>
            <br />
            Due <input type="Text"/>
            <br />
            <button>Add Task</button>
        </form>
        </main>
    </div>
  );

}

export default App
