import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";
import Header from "./components/Header";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp.jsx";
import { Provider } from "react-redux";
import store from "./app/store.js";

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Checkout from "./components/Checkout.jsx";
import Electronics from "./pages/Electronics.jsx";
import Wardrobe from "./pages/WardRobe.jsx";
import Jewelery from "./pages/Jewelery.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route
        path=""
        element={
          <>
            <Header />
            <Home />
          </>
        }
      />
      <Route
        path="/checkout"
        element={
          <>
            <Header />
            <Checkout />
          </>
        }
      />
      <Route
        path="/login"
        element={
          <>
            <Login />
          </>
        }
      />
      <Route
        path="/signup"
        element={
          <>
            <SignUp />
          </>
        }
      />

      <Route
        path="/products/electronics"
        element={
          <>
            <Header />
            <Electronics />
          </>
        }
      />

      <Route
        path="/products/wardrobe"
        element={
          <>
            <Header />
            <Wardrobe />
          </>
        }
      />
      <Route
        path="/products/jewelery"
        element={
          <>
            <Header />
            <Jewelery />
          </>
        }
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
