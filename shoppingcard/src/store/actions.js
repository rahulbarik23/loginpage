// actions.js

export const fetchProductsSuccess = products => ({
    type: 'FETCH_PRODUCTS_SUCCESS',
    payload: products,
  });
  
  export const addToCart = item => ({
    type: 'ADD_TO_CART',
    payload: item,
  });
  
  export const removeFromCart = item => ({
    type: 'REMOVE_FROM_CART',
    payload: item,
  });
  
  export const checkout = () => ({
    type: 'CHECKOUT',
  });
  