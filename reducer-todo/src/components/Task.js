import React from 'react';

const Task = (props) => {
    console.log("task props: ", props)
    return (
        <div className= 'Task'>
            <div onClick={props.toggle}>
                <p>{props.task.name}</p>
            </div>
        </div>
    )
}
// {state.map(task => (
//     <div>{task.item}</div>
//   ))}
export default Task;