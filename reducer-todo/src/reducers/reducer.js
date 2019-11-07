export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },
    {
        item: 'Learn French',
        completed: false,
        id: 4892987589
    },
    {
        item: 'Clean Floors',
        completed: false,
        id: 5892987589
    },
];
  
  export const reducer = (state, action) => {
    console.log(state)
    console.log(action)
    switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          {
            item: action.payload,
            completed: false,
            id: Date.now()
          }
        ];
      case 'TOGGLE':
        return state.map(todo =>
          todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
        )
      case 'CLEAR':
          return state.filter(todo => 
            !todo.completed
          )
      default:
        return state;
    }
  };
  
