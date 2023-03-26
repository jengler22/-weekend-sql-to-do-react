import react, {useState, useEffect} from "react";
import axios from 'axios';
import TaskForm from "../TaskForm/TaskForm";
import Task from "../TaskItem/TaskItem";

function ListOfTasks() {
    let [tasksToDo, setTasksToDo] = useState ('');
    let [tasksDueBy, setTasksDueBy] = useState ('');
    let [tasksArray, setTasksArray] = useState ([]);

    const fetchTasksList = () => {
        axios.get('/tasks').then((response) => {
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
        tasksdueBy={tasksDueBy}
        setTasksDueBy={setTasksDueBy}  
        tasksArray={tasksArray}      
        setTasksArray={setTasksArray}
        fetchTasksList={fetchTasksList}
        />

        <div className="taskGrid">
            {
                tasksArray.map((task) => (
                    <Task 
                      key={task.id}
                      task={task}
                      fetchTasksList={fetchTasksList}
                      />
                ))
            }
        </div>

        </>

    
    )
}

export default ListOfTasks;
