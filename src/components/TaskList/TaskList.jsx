import React, {useState, useEffect} from "react";
import axios from 'axios';
import TaskForm from "../TaskForm/TaskForm.jsx";
import TaskItem from "../TaskItem/TaskItem.jsx";
import '../App/App.css';

//Function for list of employee tasks
function ListOfTasks() {
    let [tasksToDo, setTasksToDo] = useState ('');
    let [taskFinished, setTaskFinished] = useState ('');
    let [tasksArray, setTasksArray] = useState ([]);

    // GET REQUEST
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
        //Import TaskForm jsx
        <>
    
        <TaskForm 
        tasksToDo={tasksToDo}
        setTasksToDo={setTasksToDo}
        taskFinished={taskFinished}
        setTaskFinished={setTaskFinished}  
        tasksArray={tasksArray}      
        setTasksArray={setTasksArray}
        fetchTasksList={fetchTasksList}
        />

   {/* html for task table */}
<div className="taskTable">
            <table>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Finished</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
            {
            tasksArray.map((task) => (
                <TaskItem 
                    key={task.id}
                    task={task}
                    fetchTasksList={fetchTasksList}
                />
                ))}
                </tbody>
            </table>
        </div>

        </>

    
    )
}

export default ListOfTasks;
