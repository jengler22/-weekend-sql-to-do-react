import axios from 'axios';

function Task ({item}) {

   const removeTaskItem = (event) => { 
    console.log(`removeTaskItem ${item.id}`);
    axios.delete(`/tasks/${item.id}`).then((Response) => {
        fetchTasksList();
    }).catch((error) => {
        console.log(`error in remove task ${error}`);
        alert( 'somrthing went wrong');
    })

}
   
    return(
        <></>
    
    )
}

export default Task; 