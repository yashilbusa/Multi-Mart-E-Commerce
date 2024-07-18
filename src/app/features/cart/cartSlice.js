// import { createSlice } from "@reduxjs/toolkit";

// const storedCartList =
//   localStorage.getItem("cartList") !== null
//     ? JSON.parse(localStorage.getItem("cartList"))
//     : [];

// const initialState = {
//   cartList: storedCartList,
// };

// export const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const productToAdd = action.payload.product;
//       const quantity = action.payload.num;
//       const productExit = state.cartList.find(
//         (item) => item.id === productToAdd.id
//       );
//       if (productExit) {
//         state.cartList = state.cartList.map((item) =>
//           item.id === action.payload.product.id
//             ? { ...productExit, qty: productExit.qty + action.payload.num }
//             : item
//         );
//       } else {
//         state.cartList.push({ ...productToAdd, qty: quantity });
//       }
//     },
//     decreaseQty: (state, action) => {
//       const productTodecreaseQnty = action.payload;
//       const productExit = state.cartList.find(
//         (item) => item.id === productTodecreaseQnty.id
//       );
//       if (productExit.qty === 1) {
//         state.cartList = state.cartList.filter(
//           (item) => item.id !== productExit.id
//         );
//       } else {
//         state.cartList = state.cartList.map((item) =>
//           item.id === productExit.id
//             ? { ...productExit, qty: productExit.qty - 1 }
//             : item
//         );
//       }
//     },
//     deleteProduct: (state, action) => {
//       const productToDelete = action.payload;
//       state.cartList = state.cartList.filter(
//         (item) => item.id !== productToDelete.id
//       );
//     },
//   },
// });

// export const cartMiddleware = (store) => (next) => (action) => {
//   const result = next(action);
//   if (action.type?.startsWith("cart/")) {
//     const cartList = store.getState().cart.cartList;
//     localStorage.setItem("cartList", JSON.stringify(cartList));
//   }
//   return result;
// };

// export const { addToCart, decreaseQty, deleteProduct } = cartSlice.actions;

// export default cartSlice.reducer;

// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, num } = action.payload;
      const existingItem = state.cartList.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.qty += num;
      } else {
        state.cartList.push({ ...product, qty: num });
      }
    },
    decreaseQty: (state, action) => {
      const item = state.cartList.find(item => item.id === action.payload.id);
      if (item && item.qty > 0) {
        item.qty -= 1;
      }
    },
    deleteProduct: (state, action) => {
      state.cartList = state.cartList.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { addToCart, decreaseQty, deleteProduct } = cartSlice.actions;

export default cartSlice.reducer;
