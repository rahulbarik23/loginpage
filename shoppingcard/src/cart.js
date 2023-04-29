// cart.js

const initialState = {
    items: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        if (state.items.some(item => item.id === action.payload.id)) {
          // item already exists in cart, do not add again
          return state;
        } else {
          return {
            ...state,
            items: [...state.items, action.payload],
          };
        }
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload.id),
        };
      case 'CHECKOUT':
        return initialState;
      default:
        return state;
    }
  };
  
  export default cartReducer;
  