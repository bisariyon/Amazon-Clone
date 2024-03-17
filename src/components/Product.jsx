import React, { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "../app/BasketSlice";
import { nanoid } from "@reduxjs/toolkit";
import { db} from "../firebase/Firebase"

function Product({ title, image, stars, price, id }) {
  const renderStars = () => {
    const starsArray = [];
    for (let i = 0; i < stars; i++) {
      starsArray.push(<p key={i}>🌟</p>);
    }
    return starsArray;
  };

  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket.basket);

  const add__TOBasket = () => {
    dispatch(
      addToBasket({
        id: id,
        title: title,
        image: image,
        stars: stars,
        price: price,
        basketId: nanoid(),
      })
    );
    console.log("Added to Basket ",basket);
  };

  return (
    <div
      className="product grid bg-white border border-gray-300 rounded-lg shadow-md z-10 w-full my-2 p-5 items-center"
      id={id}
    >
      <div className="product__info mb-auto grid justify-start">
        <p className="text-lg">{title}</p>

        <p className="product__price text-lg font-bold">
          <span className="text-sm">₹ </span>
          {price}
        </p>

        <div className="product__rating flex">{renderStars()}</div>
      </div>
      <img
        className="product__image w-full mb-2 object-contain max-h-[300px] p-3"
        src={image}
        alt="Product"
      />
      <div className="flex justify-center">
        <button
          onClick={add__TOBasket}
          className="product__button bg-yellow-300 hover:bg-yellow-400 text-black py-1 px-4 my-0 rounded border border-yellow-700 w-36"
        >
          Add to Basket
        </button>
      </div>
    </div>
  );
}

export default Product;
