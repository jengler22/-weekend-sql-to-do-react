import react, {useState, useEffect} from "react";
import axios from 'axios';
import TaskForm from "../TaskForm/TaskForm";
import Task from "../TaskItem/TaskItem";

function listOfTasks() {
    let [tasksToDo, setTasksToDo] = useState ('');
    let [tasksdueBy, setTasksDueBy] = useState ('');
    let [taskArray, setTaskArray] = useState ([]);

    const fetchTasksList = () => {

    }
}

export default listOfTasks;
