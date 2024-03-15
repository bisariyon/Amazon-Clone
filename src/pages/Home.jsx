import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import Banner from "../components/Banner";
import { setProducts } from "../app/ProductSlice";
import { toggleTheme } from "../app/ThemeSlice";

function Home() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        dispatch(setProducts(json));
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [dispatch]);

  const products = useSelector((state) => state.product.products);
  return (
    <div className={`home  ${theme === "dark" ? "darky" : "lighty"}`}>
      <Banner />
      <div className="mx-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3">
          {products.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              title={product.title}
              price={Math.floor(product.price) * 80}
              stars={product.rating}
              image={product.image}
              category={product.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
