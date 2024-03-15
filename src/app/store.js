// import { configureStore } from "@reduxjs/toolkit";
// import basketUserSlice from "./Reducer";

// const store = configureStore({
//   reducer: {
//     basketUser: basketUserSlice,
//     },
// });

// export default store;

// store.js

import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./BasketSlice";
import userReducer from "./UserSlice";
import productReducer from "./ProductSlice";
import themeReducer from "./ThemeSlice";

const store = configureStore({
  reducer: {
    basket: basketReducer,
    user: userReducer,
    product: productReducer,
    theme: themeReducer,
  },
});

export default store;
