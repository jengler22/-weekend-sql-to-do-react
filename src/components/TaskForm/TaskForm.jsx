import React from "react";
import axios from 'axios';
function TaskForm({taskToDo, setTaskToDo, dueBy, setDueBy, fetchTasksList}) {

    const createTask = (event) => {
        event.preventDefault();

        axios.post('/tasks', {
            task: taskToDo,
            due: dueBy,
        }).then((response) => {
            setTaskToDo('');
            setDueBy('');
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
            Task <input type="Text"/>
            <br />
            Due <input type="Text"/>
            <br />
            <button>Add Task</button>
        </form>
        
        </>
    )
}

export default TaskForm;