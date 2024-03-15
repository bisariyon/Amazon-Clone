// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   basket: [],
//   user: null,
//   products: [],
// };
// export const basketUserSlice = createSlice({
//   name: "basket",
//   initialState,
//   reducers: {
//     addToBasket: (state, action) => {
//       state.basket.push(action.payload);
//       // state.basket.sort((a, b) => a.price - b.price);
//     },

//     removeFromBasket: (state, action) => {
//       const index = state.basket.findIndex(
//         (item) => item.basketId === action.payload
//       );
//       if (index !== -1) {
//         state.basket.splice(index, 1);
//         state.basket.sort((a, b) => a.price - b.price);
//       }
//     },

//     setUser: (state, action) => {
//       state.user = action.payload;
//     },

//     emptyBasket: (state) => {
//       state.basket = [];
//     },

//     setProducts: (state, action) => {
//       state.products = action.payload;
//     },
//   },
// });

// export const {
//   addToBasket,
//   removeFromBasket,
//   setUser,
//   emptyBasket,
//   setProducts,
// } = basketUserSlice.actions;
// export default basketUserSlice.reducer;
