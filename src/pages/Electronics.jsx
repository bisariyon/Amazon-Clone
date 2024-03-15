import React, { useState, useEffect } from "react";
import Product from "../components/Product";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../app/ProductSlice";
import { toggleTheme } from "../app/ThemeSlice";

function Electronics() {
  const products = useSelector((state) => state.product.products);
  const theme = useSelector((state) => state.theme.theme);

  const electronics = products.filter(
    (product) => product.category === "electronics"
  );

  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        dispatch(setProducts(json));
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [dispatch]);

  return (
    <div className={`h-full ${theme === "dark" ? "darky" : "lighty"}`}>
      <div className="mx-4 p-1">
        <div className="bg-blue-500 p-1 text-white rounded-md mt-2 mb-3  items-center">
          <h1 className="text-5xl text-center font-bold my-4">Electronics</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3">
          {electronics.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              title={product.title}
              price={Math.floor(product.price) * 80}
              stars={product.rating.rate}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Electronics;
