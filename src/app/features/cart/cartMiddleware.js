// cartMiddleware.js
export const cartMiddleware = store => next => action => {
    const result = next(action);
    if (action.type.startsWith('cart/')) {
      const cartState = store.getState().cart.cartList;
      localStorage.setItem('cartItem', JSON.stringify(cartState));
    }
    return result;
  };
  