import { Outlet } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/Firebase.jsx";

function App() {
  // const [{}, dispatch] = useStateValue();
  // useEffect(() => {
  //   onAuthStateChanged(auth, (authUser) => {
  //     console.log("The user is >>> ", authUser);
  //   });

  //   if (authUser) {
  //     // the user just logged in / the user was logged in
  //     dispatch({
  //       type: "SET_USER",
  //       user: authUser,
  //     });
  //   } else {
  //     // the user is logged out
  //     dispatch({
  //       type: "SET_USER",
  //       user: null,
  //     });
  //   }
  // }, []);

  return (
    <>
      {/* <Header /> */}
      <Outlet />
    </>
  );
}

export default App;
