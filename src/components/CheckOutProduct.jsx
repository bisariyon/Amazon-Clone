import React from "react";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../app/BasketSlice";

function CheckoutProduct({ id, image, title, price, stars , basketId}) {
  const dispatch = useDispatch();
 
  const handleRemoveFromBasket = () => {
    dispatch(removeFromBasket(basketId)); // Pass the id directly to the removeFromBasket action
  };

  return (
    <div className="checkoutProduct flex my-5 border-cyan-800 border-2 rounded-md bg-white p-4">
      <div className="w-2/5">
        <img
          className="checkoutProduct__image object-contain h-48 "
          src={image}
          alt=""
        />
      </div>

      <div className="checkoutProduct__info ml-8 w-3/5">
        <p className="checkoutProduct__title text-xl font-bold">{title}</p>
        <p className="checkoutProduct__price mt-2">
          <small className="text-gray-600">₹</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          <p>{"⭐".repeat(stars)}</p>
        </div>

        <button
          onClick={handleRemoveFromBasket}
          className="checkoutProduct__button bg-yellow-300 hover:bg-yellow-400 text-black py-1 px-3 mt-2 border border-yellow-700 rounded"
        >
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
