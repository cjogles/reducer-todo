export const initialState = {
    editing: false,
    title: 'This is from the reducer!!! 🚀',
    groceries: []
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case 'TOGGLE_EDIT':
        return {
          ...state,
          editing: !state.editing
        };
      case 'SET_TITLE':
        return {
          ...state,
          title: action.payload,
          editing: false
        };
      case 'ADD_NEW_GROCERY_ITEM':
        const newGrocery = {
          name: action.payload,
          id: Date.now(),
          purchased: false
        };
        return {
          ...state,
          groceries: [...state.groceries, newGrocery]
        };
      default:
        return state;
    }
  };
  

// export const initialState = [
//     {
//       item: 'Learn about reducers',
//       completed: false,
//       id: 3892987589
//     }
//   ]
//   // Initial count is established
  
//   // We will use the same reducer we created in the previous section
//   export function reducer(state, action) {
//     switch (action.type) {
//       case 'ADD_TASK':
//         return [...state,
//           {
//             item: action.payload,
//             completed: false,
//             id: Date.now()
//           }
//         ]
//       default:
//         return state
//     }
//   }
