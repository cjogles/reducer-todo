import React from 'react';
import ToDo from './ToDo';

const ToDoList = (props) => {
//  console.log("TODOLIST PROPS",props.item)
    return (
        <div>
            { props.item.map(item => (
            <ToDo 
                item={item} 
                dispatch={props.dispatch}
            />))}
        </div>
    )
}

export default ToDoList;