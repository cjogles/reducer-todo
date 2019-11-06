import React from 'react';
import Task from './Task';

const TaskList = (props) => {
    console.log("tasklist", props)
    return (
        <div className= 'TaskList'>
            {props.item.map(todo => (
                <Task task={todo} toggle={props.togglePurchase}/>
            ))}
        </div>
    )
}

export default TaskList;