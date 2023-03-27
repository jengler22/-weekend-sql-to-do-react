import React, {useState, useEffect} from "react";
import axios from 'axios';
import TaskForm from "../TaskForm/TaskForm.jsx";
import TaskItem from "../TaskItem/TaskItem.jsx";

function ListOfTasks() {
    let [tasksToDo, setTasksToDo] = useState ('');
    let [tasksFinished, setTasksFinished] = useState ('');
    let [tasksArray, setTasksArray] = useState ([]);

    const fetchTasksList = () => {
        axios.get('/chores').then((response) => {
            setTasksArray(response.data);
            console.log('test', tasksArray);
        }).catch((error) => {
            console.log(`error in GET`);
            alert('something is wrong GET tasklist');
        });

    }

    useEffect(() => {
        fetchTasksList();
    }, []);

   
    return(
        <>
        <TaskForm 
        tasksToDo={tasksToDo}
        setTasksToDo={setTasksToDo}
        tasksdueBy={tasksFinished}
        setTasksDueBy={setTasksFinished}  
        tasksArray={tasksArray}      
        setTasksArray={setTasksArray}
        fetchTasksList={fetchTasksList}
        />

<div className="task-Table">
            <table>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Finished</th>
                        <th>Delete</th>
                    </tr>
                </thead>
            {
            tasksArray.map((task) => (
                <TaskItem 
                    key={task.id}
                    task={task}
                    fetchTaskList={fetchTasksList}
                />
                ))}
            </table>
        </div>

        </>

    
    )
}

export default ListOfTasks;
