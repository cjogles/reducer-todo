import React, { useState, useReducer } from 'react';
import { initialState, reducer } from '../reducers/reducer';
import TaskList from './TaskList';

const Title = () => {
  const [{ title, editing, groceries }, dispatch] = useReducer(reducer, initialState);
  const [newTitleText, setNewTitleText] = useState('');
  const [newGrocery, setNewGrocery] = useState('');

  const handleChanges = e => {
    setNewTitleText(e.target.value);
  };
  const newGroceryChanges = e => {
      setNewGrocery(e.target.value);
  }
  const togglePurchased = () => {
      dispatch({ type: 'TOGGLE_PURCHASED', payload: groceries})
  }
  const clearAll = () => {
      dispatch({ type: 'CLEAR_PURCHASED', payload: groceries})
    // let newArr = [...this.state.data];
    // let result = newArr.filter(task => task.completed === false );
    // this.setState({data: result})
  }

  return (
      <>
        <div>
        {!editing ? (
            <h1>
            {title}{' '}
            <button
                className="far fa-edit"
                onClick={() => dispatch({ type: 'TOGGLE_EDIT' })}
            > Change Title </button>
            </h1>
        ) : (
            <div>
            <input
                className="title-input"
                type="text"
                name="newTitleText"
                value={newTitleText}
                onChange={handleChanges}
            />
            <button
                onClick={() =>
                dispatch({ type: 'SET_TITLE', payload: newTitleText })
                }
            >
                Update title
            </button>
            </div>
        )}
        </div>
        <br></br>
        <br></br>
        <h1>
            <TaskList item={groceries} togglePurchase={togglePurchased}/>
        </h1>
        <input
            className="grocery-input"
            type="text"
            name="newGroceryInput"
            value={newGrocery}
            onChange={newGroceryChanges}
        />
        <button
            onClick={() =>
            dispatch({ type: 'ADD_NEW_GROCERY_ITEM', payload: newGrocery })
            }
        >Add grocery</button>
        <button
            className="far fa-edit"
            onClick={clearAll}
        > Clear ALL </button>
    </>
  );
};

export default Title;
