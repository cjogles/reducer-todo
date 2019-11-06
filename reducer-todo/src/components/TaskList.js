import React from 'react';
import Task from './Task';

const TaskList = (props) => {
    console.log(props)
    return (
        <div className= 'TaskList'>
            {props.item.map(todo => (
                <Task task={todo}/>
            ))}
        </div>
    )
}

export default TaskList;