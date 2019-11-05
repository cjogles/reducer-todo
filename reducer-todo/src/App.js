import React, { useReducer } from 'react'
import TaskList from './components/TaskList'

const initialState = [
  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }
]
// Initial count is established

// We will use the same reducer we created in the previous section
function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.payload]
    default:
      return state
  }
}

function onSubmit (e) {
  e.preventDefault();
}

// Create a functional component
function App() {
  // Use the useReducer hook by destructuring its two properties: state, and dispatch and pass in the reducer and the initialState to the useReducer function
  const [state, dispatch] = useReducer(reducer, initialState)

  // Return JSX that displays the count for the user
  // Note the two button elements which allow the user to increase and decrease the count.  Each of them contains an onClick event that dispatches the desired action object, with its given type.  Each action, when fired, is dispatched to the reducer and the appropriate logic is applied.
  return (
    <>
      {/* Note, we have access to the current state and the dispatch method from the useReducer hook, so we can utilize them to display the count as well as couple the dispatching of the actions from the appropriate buttons.*/}
      <div>Tasks:</div>
      <form onSubmit={onSubmit}>
          <button 
            onClick={() => dispatch({ 
              type: 'ADD_TASK', 
              payload: {}})}
          >
            add tasks
          </button>
        <TaskList tasks={state}/>
      </form>
    </>
  )
}

export default App;