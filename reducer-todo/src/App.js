import React, { useReducer, useState } from 'react'
import TaskList from './components/TaskList'
import { reducer, initialState } from './reducers/reducer'

function App() {
  const [tasks, setTasks] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);

  function onSubmit (e) {
    e.preventDefault();
    dispatch({ 
      type: 'ADD_TASK', 
      payload: {tasks}})
  }
  
  function onChange (e) {
    setTasks(e.target.value);
  }
  console.log(state)
  return (
    <>
      <div>Tasks: </div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Add Task Here" 
          onChange={onChange}
          value={tasks}>
        </input>
        <button>
          add tasks
        </button>
        <TaskList tasks={state}/>
      </form>
    </>
  )
}

export default App;