import React, {useState, useEffect} from "react";
import axios from 'axios';
function TaskForm({tasksToDo, setTasksToDo, taskFinished, setTaskFinished, fetchTasksList}) {

    const createTask = (event) => {
        event.preventDefault();

        axios.post('/chores', {
            task: tasksToDo,
            finished: taskFinished,
        }).then((response) => {
            setTasksToDo('');
            setTaskFinished('');
            fetchTasksList();
        }).catch((error) => {
            console.log(`error in POST ${error}`);
            alert('error in task form');
        })

    }
    return(
        <>
        <form onSubmit={createTask}>
            <h2>Create Task</h2>
            Task <input type="Text" value={tasksToDo} onChange={ (e) => setTasksToDo(e.target.value)} />
                 <input type="submit" value="submit" />
            <br />
            <br />
            {/* <button id="createTaskButton">Add Task</button> */}
        </form>
        
        </>
    )
};

export default TaskForm;