import React from "react";
import { useSelector } from "react-redux";

function SubTotal() {
  const basket = useSelector((state) => state.basket.basket); // Accessing basket state from Redux store

  // Function to calculate subtotal
  const calculateSubtotal = () => {
    return basket.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="subtotal grid p-4 bg-slate-100">
      <p className="text-lg mx-1">
        Subtotal ({basket.length} items): ₹<strong>{calculateSubtotal()}</strong>
      </p>
      <div className="subtotal__gift text-sm my-2 mx-1">
        <input type="checkbox" /> This order contains a gift
      </div>

      <button className="button text-black font-semibold hover:bg-orange-700 text-center bg-orange-400 p-1 w-52 rounded-md">
        Proceed to Checkout
      </button>
    </div>
  );
}

export default SubTotal;
