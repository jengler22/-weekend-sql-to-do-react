import React, {useState, useEffect} from "react";
import axios from 'axios';
function TasksForm({tasksToDo, setTasksToDo, tasksdueBy, setTasksDueBy, fetchTasksList}) {

    const createTask = (event) => {
        event.preventDefault();

        axios.post('/tasks', {
            task: tasksToDo,
            due: tasksdueBy,
        }).then((response) => {
            setTasksToDo('');
            setTasksDueBy('');
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
            Due <input type="Text" onChange={e => setTasksDueBy(e.target.value)} />
            <br />
            <button>Add Task</button>
        </form>
        
        </>
    )
};

export default TasksForm;