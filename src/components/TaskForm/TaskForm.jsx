import React, {useState, useEffect} from "react";
import axios from 'axios';
function TasksForm({tasksToDo, setTasksToDo, taskFinished, setTaskFinished, fetchTasksList}) {

    const createTask = (event) => {
        event.preventDefault();

        axios.post('/tasks', {
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
            Task <input type="Text" onChange={e => setTasksToDo(e.target.value)} />
            <br />
            Due <input type="Text" onChange={e => setTaskFinished(e.target.value)} />
            <br />
            <button>Add Task</button>
        </form>
        
        </>
    )
};

export default TasksForm;