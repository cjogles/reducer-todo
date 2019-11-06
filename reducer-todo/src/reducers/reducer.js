export const initialState = {
    editing: false,
    title: 'Unoriginal Title :(',
    groceries: [
        {
            name: "bannana",
            id: Date.now(),
            purchased: false
        }
    ]
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
      case 'TOGGLE_PURCHASED':
          let newArr = [...action.payload];
          newArr = newArr.map((item) => {
              console.log("before", item.purchased);
            if (item.purchased === true) {
                item.purchased = false;
                console.log("inside true", item.purchased);
                return item;
            } else if (item.purchased === false) {
                item.purchased = true;
                console.log("inside false", item.purchased);
                return item;
            }
          })
        case 'CLEAR_PURCHASED':
            let newArray = [...action.payload];
            let result = newArray.filter(item => item.purchased === false );
            return result;
          
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
