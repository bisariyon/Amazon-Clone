import React from "react";
import SubTotal from "./SubTotal";
import CheckoutProduct from "./CheckOutProduct";
import { useSelector } from "react-redux";
import { toggleTheme } from "../app/ThemeSlice";

function Checkout() {
  const basket = useSelector((state) => state.basket.basket);
  const user = useSelector((state) => state.basket.user);
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div className={`checkout flex flex-col lg:flex-row p-5 ${theme === 'dark' ? 'darky' : 'lighty'}`}>
      <div className="checkout__left lg:w-3/4 lg:mr-10">
        <img
          className="checkout_ad mb-1 h-24 lg:w-[80%]"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/LATV/1071374_750x200_7._V515060851_.jpg"
          alt=""
        />

        <div className="checkout__basket">
          <h2 className="checkout__title pt-2 text-2xl font-bold">
            Hello {user ? user : "Guest"}
          </h2>
          <h2 className="checkout__title pb-2 border-b-black border-b-2 text-2xl font-bold mb-5">
            Your shopping basket
          </h2>

          <div className="w-full lg:w-2/3">
            {basket.map((item) => (
              <CheckoutProduct
                key={item.basketId}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                stars={item.stars}
                basketId={item.basketId}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="checkout__right lg:w-1/4">
        <SubTotal basket={basket} />
      </div>
    </div>
  );
}

export default Checkout;
