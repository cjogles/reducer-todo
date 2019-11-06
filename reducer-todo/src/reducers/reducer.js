export const initialState = [
    {
      item: 'Learn about reducers',
      completed: false,
      id: 3892987589
    }
  ]
  // Initial count is established
  
  // We will use the same reducer we created in the previous section
  export function reducer(state, action) {
    switch (action.type) {
      case 'ADD_TASK':
        return [...state,
          {
            item: action.payload,
            completed: false,
            id: Date.now()
          }
        ]
      default:
        return state
    }
  }