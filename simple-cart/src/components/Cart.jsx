import React from "react";
import Checkout from "./Checkout";
import CartItems from "./CartItems";

export default function Cart() {
 return (
  <div className="bg-white rounded-lg p-6 border border-gray-200">
   <CartItems />

   <Checkout />
  </div>
 );
}
