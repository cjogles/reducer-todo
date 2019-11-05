import React from 'react';

const Task = (props) => {
    console.log(props)
    return (
        <div className= 'Task'>
            <div>
                <p>{props.task.item}</p>
            </div>
        </div>
    )
}

export default Task;