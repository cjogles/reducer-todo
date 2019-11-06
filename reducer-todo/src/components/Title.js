import React, { useState, useReducer } from 'react';
import { initialState, reducer } from '../reducers/reducer';

const Title = () => {
  const [{ title, editing }, dispatch] = useReducer(reducer, initialState);
  const [newTitleText, setNewTitleText] = useState('');

  const handleChanges = e => {
    setNewTitleText(e.target.value);
  };

  return (
    <div>
      {!editing ? (
        <h1>
          {title}{' '}
          <button
            className="far fa-edit"
            onClick={() => dispatch({ type: 'TOGGLE_EDIT' })}
          />
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
  );
};

export default Title;
