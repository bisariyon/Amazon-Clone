import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { setUser } from "../app/UserSlice";
import { emptyBasket } from "../app/BasketSlice";
import SearchBar from "./SearchBar";
import TemporaryDrawer from "./SideBar";
import { toggleTheme } from "../app/ThemeSlice";

function Header() {
  const basket = useSelector((state) => state.basket.basket);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [showConfirmSignOut, setShowConfirmSignOut] = useState(false);
  const navigate = useNavigate();
  const theme = useSelector((state) => state.theme.theme);

  const handleSignOut = () => {
    setShowConfirmSignOut(true);
  };

  const confirmSignOut = () => {
    dispatch(setUser(null));
    setShowConfirmSignOut(false);
    dispatch(emptyBasket());
  };

  const cancelSignOut = () => {
    setShowConfirmSignOut(false);
  };

  return (
    <header className="sticky top-0 z-50">
      <div className={`header h-16 flex items-center px-2 pr-5 ${theme === 'light' ? "bg-gray-900 text-white" : "bg-cyan-200 text-black"}`}>
        <Link to="/">
          <img
            className="header__logo h-10 object-contain mx-5 mt-3"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="Amazon Logo"
          />
        </Link>

        {/* <SearchBar /> */}
        <div className={`header__search flex-1 hidden sm:flex items-center rounded-full ${theme === 'light' ? "bg-white bg-opacity-10" : "bg-blue-900 bg-opacity-30"}  mr-5`}>
          <SearchIcon className={`h-6 w-6 ${theme === 'light' ? "text-gray-400" : "text-black"} ml-4`} />
          <input
            type="text"
            className={`flex-1 h-full p-2 bg-transparent outline-none ${theme === 'light' ? "text-white placeholder-gray-400" : "text-black placeholder-black "} `}
            placeholder="Search"
          />
        </div>

        <div className="header__nav flex space-x-6">
          {user ? (
            <div className="header__option flex flex-col">
              <span className="header__optionLineOne text-xs">
                Hello, <span className="cursor-pointer">{user}</span>
              </span>
              <span
                className="header__optionLineTwo text-sm cursor-pointer"
                onClick={handleSignOut}
              >
                Sign Out
              </span>
            </div>
          ) : (
            <Link to="/login">
              <div className="header__option flex flex-col">
                <span className="header__optionLineOne text-xs">
                  Hello, Guest
                </span>
                <span className="header__optionLineTwo text-sm font-bold">
                  Sign In
                </span>
              </div>
            </Link>
          )}

          <div className="header__option flex flex-col">
            <span className="header__optionLineOne text-xs">Returns</span>
            <span className="header__optionLineTwo text-sm font-bold">
              & Orders
            </span>
          </div>

          <Link to="/checkout">
            <div className="header__optionBasket flex items-center">
              <ShoppingCartIcon className="h-8 mr-1 my-2" />
              <span className="header__optionLineTwo  header__basketCount">
                {basket.length}
              </span>
            </div>
          </Link>
        </div>

        {showConfirmSignOut && (
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-5 rounded-md">
              <p className="text-black">Are you sure you want to sign out?</p>
              <div className="flex justify-center mt-4">
                <button
                  onClick={confirmSignOut}
                  className="bg-red-500 text-white py-2 px-4 mr-4 rounded hover:bg-red-900"
                >
                  Sign Out
                </button>
                <button
                  onClick={cancelSignOut}
                  className="bg-green-300 text-black py-2 px-4 rounded hover:bg-green-700 hover:text-white"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center space-x-3 p-2 pl-4 bg-slate-700 text-white text-sm">
        <NavLink
          className={({ isActive }) =>
            `${
              isActive ? "" : "text-white"
            } hover:text-green-500 cursor-pointer`
          }
        >
          <TemporaryDrawer />
        </NavLink>

        <NavLink
          to="/"
          className={({ isActive }) =>
            `${
              isActive ? "" : "text-white"
            } hover:text-green-500 cursor-pointer`
          }
        >
          All Products
        </NavLink>

        <NavLink
          to="/products/electronics"
          className={({ isActive }) =>
            `${
              isActive ? "text-orange-400 text-lg underline" : "text-white"
            } hover:text-green-500 cursor-pointer`
          }
        >
          Electronics
        </NavLink>

        <NavLink
          to="/products/wardrobe"
          className={({ isActive }) =>
            `${
              isActive ? "text-orange-400 text-lg underline" : "text-white"
            }  hover:text-green-500 cursor-pointer`
          }
        >
          Garments
        </NavLink>
        <NavLink
          to="/products/jewelery"
          className={({ isActive }) =>
            `${
              isActive ? "text-orange-400 text-lg underline" : "text-white"
            } hover:text-green-500 cursor-pointer`
          }
        >
          Jewelery
        </NavLink>

        <p className="hover:underline hidden lg:inline-flex hover:text-green-500 cursor-pointer">
          Prime Video
        </p>
        <p className="hover:underline hidden lg:inline-flex hover:text-green-500 cursor-pointer">
          Amazon Business
        </p>
        <p className="hover:underline hidden lg:inline-flex hover:text-green-500 cursor-pointer">
          Today's deals{" "}
        </p>

        <p className="hover:underline hidden lg:inline-flex hover:text-green-500 cursor-pointer">
          Buy again
        </p>
        <p className="hover:underline hidden lg:inline-flex hover:text-green-500 cursor-pointer">
          Shopper Toolkit
        </p>
        <p className="hover:underline hidden lg:inline-flex hover:text-green-500 cursor-pointer">
          Health & Personal Care
        </p>
      </div>
    </header>
  );
}

export default Header;
