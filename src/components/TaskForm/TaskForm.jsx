

function TaskForm() {

    return(
        <>
        <form onSubmit={createTask}>
            <h2>Create Task</h2>
            Task: <input type="Text"/>
            <br />
            Due: <input type="Text"/>
            <br />
            <button>Add Task</button>
        </form>
        
        </>
    )
}

export default TaskForm;