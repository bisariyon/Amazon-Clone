// import React from "react";
// import { useDispatch } from "react-redux";
// import { setProducts } from "../app/ProductSlice";
// import { nanoid } from "@reduxjs/toolkit";
// import Product from "./Product";

// function Set() {
//   const dispatch = useDispatch();
//   const generateId = () => {
//     return nanoid();
//   };

//   const allProducts = [
//     {
//       id: generateId(),
//       basketId: "",
//       title:
//         "Men's Graphic Print Short Sleeve T-ShirtMen's Vintage Logo Graphic Print Short Sleeve Cotton T-Shirt with Crew Neck and Ribbed Collar",
//       price: 899,
//       stars: 5,
//       image:
//         "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       category: "men's clothing",
//     },
//     {
//       id: generateId(),
//       basketId: "",
//       title:
//         "Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",
//       price: 1499,
//       stars: 4,
//       image:
//         "https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg",
//       category: "electronics",
//     },
//     {
//       id: generateId(),
//       basketId: "",
//       title: "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",
//       price: 2499,
//       stars: 3,
//       image:
//         "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg",
//       category: "electronics",
//     },
//     {
//       id: generateId(),
//       basketId: "",
//       title:
//         "Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",
//       price: 4999,
//       stars: 5,
//       image:
//         "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$",
//       category: "electronics",
//     },
//     {
//       id: generateId(),
//       basketId: "",
//       title:
//         "The Ultimate Gaming Experience: Unleash the Power of the PlayStation 5 Console and Experience the Future of Gaming.",
//       price: 49999,
//       stars: 5,
//       image:
//         "https://images.pexels.com/photos/258293/pexels-photo-258293.jpeg?auto=compress&cs=tinysrgb&w=600",
//       category: "electronics",
//     },
//     {
//       id: generateId(),
//       basketId: "",
//       title:
//         "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",
//       price: 79999,
//       stars: 4,
//       image:
//         "https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg",
//       category: "electronics",
//     },
//     {
//       id: generateId(),
//       basketId: "",
//       title:
//         "High-Efficiency Front Load Washing Machine with Energy Star Certification, Large Capacity Drum, and Advanced Wash Cycles",
//       price: 299,
//       stars: 4,
//       image:
//         "https://plus.unsplash.com/premium_photo-1677541205130-51e60e937318?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       category: "electronics",
//     },
//     {
//       id: generateId(),
//       basketId: "",
//       title:
//         "Long-Lasting Matte Lipstick with Moisturizing Formula, Vivid Colors, and Smooth Application for All-Day Wear",
//       price: 24599,
//       stars: 5,
//       image:
//         "https://images.pexels.com/photos/8089162/pexels-photo-8089162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       category: "beauty",
//     },
//     {
//       id: generateId(),
//       basketId: "",
//       title:
//         "Rolex Submariner Date: Timeless Elegance and Reliability in a Durable Stainless Steel Timepiece for Every Adventure and Occasion.",
//       price: 6999,
//       stars: 4,
//       image:
//         "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=600",
//       category: "jewelry",
//     },
//     {
//       id: generateId(),
//       basketId: "",
//       title:
//         "Radiant Beauty: Unveiling the Enchanting Palette of Makeup Essentials for Effortless Glamour and Expressive Self-Expression.",
//       price: 2499,
//       stars: 3,
//       image:
//         "https://images.pexels.com/photos/3373739/pexels-photo-3373739.jpeg?auto=compress&cs=tinysrgb&w=600",
//       category: "beauty",
//     },
//     {
//       id: generateId(),
//       basketId: "",
//       title:
//         "Sonic Serenity: Discover the Ultimate Headset for Immersive Audio and Crystal-Clear Communication in Your Digital Adventures.",
//       price: 1499,
//       stars: 2,
//       image:
//         "https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=600",
//       category: "electronics",
//     },
//     {
//       id: generateId(),
//       basketId: "",
//       title:
//         "Capture Brilliance: Introducing the Canon EOS 5D Mark IV DSLR Camera",
//       price: 5999,
//       stars: 3,
//       image:
//         "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
//       category: "electronics",
//     },
//     {
//       id: generateId(),
//       basketId: "",
//       title:
//         "New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",
//       price: 59999,
//       stars: 4,
//       image:
//         "https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg",
//       category: "electronics",
//     },
//     {
//       id: generateId(),
//       basketId: "",
//       title:
//         "Portable Perfection: Introducing the Versatile Basket for Organizing Essentials On-the-Go with Style and Convenience.",
//       price: 499,
//       stars: 3,
//       image:
//         "https://images.pexels.com/photos/6634654/pexels-photo-6634654.jpeg?auto=compress&cs=tinysrgb&w=600",
//       category: "home",
//     },
//     {
//       id: generateId(),
//       basketId: "",
//       title:
//         "Dairy Delight: Introducing the Charming Milk Bottle for Freshness and Nostalgic Enjoyment of Every Sip.",
//       price: 59,
//       stars: 4,
//       image:
//         "https://images.pexels.com/photos/8148740/pexels-photo-8148740.jpeg?auto=compress&cs=tinysrgb&w=600",
//       category: "home",
//     },
//   ];

//   dispatch(setProducts(allProducts));

//   return (
//     <>
//       {allProducts.map((product) => (
//         <Product
//           key={product.id}
//           id={product.id}
//           basketId={product.basketId}
//           title={product.title}
//           price={product.price}
//           stars={product.stars}
//           image={product.image}
//           category={product.category}
//         />
//       ))}
//     </>
//   );
// }

// export default Set;
