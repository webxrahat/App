import React, { useContext } from "react";
import Checkout from "./Checkout";
import CartItems from "./CartItems";
import { ProductContext } from "../context";

export default function Cart() {
  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200">
      <CartItems />
      <Checkout />
    </div>
  );
}
