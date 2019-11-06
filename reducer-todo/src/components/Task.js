import React from 'react';

const Task = (props) => {
    console.log("task props: ", props.task)
    return (
        <div className= 'Task'>
            <div>
                <p>{props.task.name}</p>
            </div>
        </div>
    )
}
// {state.map(task => (
//     <div>{task.item}</div>
//   ))}
export default Task;