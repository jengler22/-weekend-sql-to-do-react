import axios from 'axios';

function TaskItem ({task, fetchTasksList}) {

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

   const changeColor = () => {
    if(task.complete === 'yes') {
        return 'green';
    } else {
        return
    }
   }

   
    return(
        <tbody key={task.id}>
            <tr style={{ backgroundColor: changeColor() }}>
                <td>{task.task}</td>
                <td><button onClick={ (event) => completeTask(event) }>{task.completed}</button></td>
                <td><button onClick={ (event) => removeTaskItem(event) }>Delete</button></td>
            </tr>
        </tbody>
    
    )
}

export default Task; 