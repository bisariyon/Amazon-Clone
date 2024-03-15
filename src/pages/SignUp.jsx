import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/FireBase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { setUser } from "../app/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../app/ThemeSlice";

function Signup() {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential && userCredential.user) {
          updateProfile(userCredential.user, {
            displayName: displayName,
          })
            .then(() => {
              // console.log("User profile updated successfully ", userCredential.user);
              signInWithEmailAndPassword(auth, email, password)
                .then(() => {
                  navigate("/");
                  const displayName = userCredential.user.displayName;
                  const capitalizedDisplayName =
                    displayName.charAt(0).toUpperCase() +
                    displayName.slice(1).toLowerCase();
                  dispatch(setUser(capitalizedDisplayName));
                })
                .catch((error) => {
                  console.error("Error signing in:", error);
                  navigate("/");
                });
            })
            .catch((error) => {
              console.error("Error updating user profile:", error);
              navigate("/");
            });
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div
      className={`signup ${
        theme === "dark" ? "darky" : "lighty"
      } h-screen flex flex-col items-center `}
    >
      <div>
        <Link to="/">
          <img
            className="signup__logo object-contain mx-auto my-5 w-40"
            src="https://pngimg.com/uploads/amazon/small/amazon_PNG24.png"
            alt="Amazon Logo"
          />
        </Link>

        <div className="signup__container w-80 p-4 border border-gray-300 bg-gray-100 rounded">
          <h1 className="font-semibold text-xl">Sign-Up</h1>
          <form className="flex flex-col mt-4">
            <h5 className="mb-1">Username</h5>
            <input
              value={displayName}
              type="text"
              className="h-8 mb-2 border border-gray-300 rounded px-2"
              onChange={(e) => setDisplayName(e.target.value)}
            />

            <h5 className="mb-1">E-mail</h5>
            <input
              value={email}
              type="text"
              className="h-8 mb-2 border border-gray-300 rounded px-2"
              onChange={(e) => setEmail(e.target.value)}
            />
            <h5 className="mb-1">Password</h5>
            <input
              value={password}
              type="password"
              className="h-8 mb-4 border border-gray-300 rounded px-2"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="signup__signupButton rounded-lg bg-yellow-400 text-black hover:bg-yellow-500 border border-yellow-700 h-8"
              onClick={signUp}
            >
              Sign Up
            </button>
            <p className="text-xs mt-4">
              By signing-up you agree to the AMAZON FAKE CLONE Conditions of Use
              & Sale. Please see our Privacy Notice, our Cookies Notice and our
              Interest-Based Ads Notice.
            </p>
            <p className="text-center mt-4 text-xs border-t-2 pt-2">
              Already have an account?{" "}
              <Link to="/login">
                <span className="hover:text-sm hover:text-red-600 hover:font-semibold">
                  Sign in
                </span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
