import axios from 'axios';

function TaskItem ({task, fetchTasksList}) {

    // DELETE REQUEST
   const removeTaskItem = (event) => { 
    console.log(`removeTaskItem ${task.id}`);
    axios.delete(`/chores/${task.id}`).then((response) => {
        fetchTasksList();
    }).catch((error) => {
        console.log(`error in remove task ${error}`);
        alert( 'something went wrong');
    })

}
   const completeTask = (event) => {
    axios.put(`/chores/${task.id}`).then((response) => {
        fetchTasksList();
    }).catch((error) => {
        console.log(`Error in PUT ${error}`);
        alert('something went wrong');
    })

   }
  // function to change color when task is completed
   const changeColor = () => {
    if(task.finished === 'yes') {
        return 'mediumspringgreen';
    } else {
        return;
    }
   }

   
    return(
        // <div className="tableOne" >
        // <tbody key={task.id}>
            <tr style={{ backgroundColor: changeColor() }}> 
                <td>{task.task}</td>
                <td><button onClick={ (event) => completeTask(event) }>{task.completed}Finished</button></td>
                <td><button onClick={ (event) => removeTaskItem(event) }>Delete</button></td>
            </tr>
        // </tbody>
        // </div>    
    
    )
}

export default TaskItem; 