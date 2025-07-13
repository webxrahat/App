import Header from "./components/Header";
import RootLayout from "./components/RootLayout";
import Footer from "./components/Footer";
import "./App.css";
import { ProductContext } from "./context";
import { useReducer, useState } from "react";
import { productReducer } from "./createReducer/productReducer";
import { Products } from "./data/products";

export default function App() {
 const [state, dispatch] = useReducer(productReducer, Products);

 return (
  <>
   <ProductContext.Provider value={{ state, dispatch }}>
    <Header />
    <RootLayout />
    <Footer />
   </ProductContext.Provider>
  </>
 );
}
