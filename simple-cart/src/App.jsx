import Header from "./components/Header";
import RootLayout from "./components/RootLayout";
import Footer from "./components/Footer";
import "./App.css";
import { ProductContext } from "./context";
import { useState } from "react";

export default function App() {
  const [cartData, setCartData] = useState([]);

  return (
    <>
      <ProductContext.Provider value={{ cartData, setCartData }}>
        <Header />
        <RootLayout />
        <Footer />
      </ProductContext.Provider>
    </>
  );
}
