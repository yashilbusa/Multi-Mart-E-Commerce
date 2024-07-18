// import { configureStore } from "@reduxjs/toolkit";
// import cartSlice, { cartMiddleware } from "./features/cart/cartSlice";
// export const store = configureStore({
//   reducer: {
//     cart: cartSlice,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(cartMiddleware),
// });

// store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import { cartMiddleware } from "./features/cart/cartMiddleware"; // Correct import

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartMiddleware),
});

export default store;
