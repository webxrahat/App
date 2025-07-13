import React, { useContext } from "react";
import CategoryFilter from "./CategoryFilter";
import ProductsCard from "./ProductsCard";
import Cart from "./Cart";
import { ProductContext } from "../context";

export default function RootLayout() {
 return (
  <main className="container mx-auto px-4 md:px-8 py-8">
   <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <div className="lg:col-span-2">
     <CategoryFilter />

     <ProductsCard />
    </div>

    <div className="lg:col-span-1">
     <Cart />
    </div>
   </div>
  </main>
 );
}
