// import React, { useState, useReducer } from 'react';
// import { initialState, reducer } from '../reducers/reducer';

// const TaskForm =() => {

//     const [todo, setState] = useState("")

//     const [state, dispatch] = useReducer(reducer, initialState);

//     const onChange = (e) => {
//         setState(e.target.value);
//     }

//     const onSubmit = (e) => {
//         e.preventDefault();
//         dispatch({ type: "ADD_TASK", payload: todo});
//     }
//     return (
//         <div className="ToDoForm">
//             <form onSubmit={onSubmit}>
//                 <label htmlFor="task"></label>
//                 <input 
//                     type="text"
//                     placeholder="Add Task Here" 
//                     onChange={onChange}
//                     value={todo} 
//                 />
//                 <button>
//                     Add
//                 </button>
//             </form>
//         </div>
//     );
// }

// export default TaskForm;