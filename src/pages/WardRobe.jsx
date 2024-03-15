import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../app/ProductSlice";
import { toggleTheme } from "../app/ThemeSlice";

function Wardrobe() {
  const [selectedCategory, setSelectedCategory] = useState("men's clothing");
  const products = useSelector((state) => state.product.products);
  const theme = useSelector((state) => state.theme.theme);

  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

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
      <div className="mx-4 py-4">
        <button
          className={`mr-4 ${
            selectedCategory === "men's clothing"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-700"
          } px-4 py-2 mb-2 rounded`}
          onClick={() => handleCategoryChange("men's clothing")}
        >
          Men's Section
        </button>
        <button
          className={`mr-4 ${
            selectedCategory === "women's clothing"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-700"
          } px-4 py-2 rounded`}
          onClick={() => handleCategoryChange("women's clothing")}
        >
          Women's Section
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3">
          {filteredProducts.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              title={product.title}
              price={Math.floor(product.price) * 80}
              stars={product.rating.rate}
              image={product.image}
            />
          ))}
          {filteredProducts.map((product) => (
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

export default Wardrobe;
