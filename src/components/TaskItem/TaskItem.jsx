import axios from 'axios';

function Task ({task, fetchTasksList}) {

   const removeTaskItem = (event) => { 
    console.log(`removeTaskItem ${task.id}`);
    axios.delete(`/tasks/${task.id}`).then((Response) => {
        fetchTasksList();
    }).catch((error) => {
        console.log(`error in remove task ${error}`);
        alert( 'somrthing went wrong');
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
        <></>
    
    )
}

export default Task; 