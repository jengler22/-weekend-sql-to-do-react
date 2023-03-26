import axios from 'axios';

function Task ({task, fetchTasksList}) {

   const removeTaskItem = (event) => { 
    console.log(`removeTaskItem ${task.id}`);
    axios.delete(`/tasks/${task.id}`).then((response) => {
        fetchTasksList();
    }).catch((error) => {
        console.log(`error in remove task ${error}`);
        alert( 'something went wrong');
    })

}
   const completeTask = (event) => {
    axios.put(`/tasks/${task.id}`).then((response) => {
        fetchTasksList();
    }).catch((error) => {
        console.log(`Error in PUT ${error}`);
        alert('something went wrong');
    })

   }

   
    return(
        <div className="contentDiv">
            <div className="listTask" key={task.id}>
                <br />
                {task.task}
                <br />
                {task.due}
                <br />
                <br />
                <button className="complete-button" onClick={ (event) => completeTask(event) }>{task.complete}</button>
                <button className="remove-button" onClick={ (event) => removeTaskItem(event) }>Remove</button>

            </div>

        </div>
    
    )
}

export default Task; 