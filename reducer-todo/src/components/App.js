import React, { useState, useReducer } from 'react';
import { initialState, reducer } from '../reducers/reducer';
import ToDoList from './ToDoList';

const Title = () => {
  const [item, dispatch] = useReducer(reducer, initialState);
  const [toDo, setToDo] = useState('');

  const onInputChange = e => {
    e.preventDefault();
    setToDo(e.target.value);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    setToDo('');
  }

  return (
      <form onSubmit={onSubmit}>
        <input
            className="toDoInput"
            type="text"
            name="toDoInput"
            value={toDo}
            onChange={onInputChange}
        />
        <button onClick={() => dispatch({ type: 'ADD_TODO', payload: toDo })}> Add TODO </button>
        <h1>
            <ToDoList item={item} dispatch={dispatch}/>
        </h1>
        <button onClick={() => dispatch({ type: 'CLEAR', payload: toDo })}> CLEAR </button>
    </form>
  );
};

export default Title;
