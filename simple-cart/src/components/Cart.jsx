import React, { useContext } from "react";
import Checkout from "./Checkout";
import CartItems from "./CartItems";
import { ProductContext } from "../context";

export default function Cart() {
 const { cartData, setCartData } = useContext(ProductContext);
 return (
  <div className="bg-white rounded-lg p-6 border border-gray-200">
   <CartItems cartData={cartData} setCartData={setCartData} />
   <Checkout />
  </div>
 );
}
