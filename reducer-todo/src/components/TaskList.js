import React from 'react';
import Task from './Task';

const TaskList = (props) => {
    return (
        <div className= 'TaskList'>
            {props.tasks.map(todo => (
                <Task task={todo} id={todo.id}/>
            ))}
        </div>
    )
}

export default TaskList;