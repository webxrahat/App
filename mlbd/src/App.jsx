import React, { useReducer, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MovieList from "./components/cine/MovieList";
import Footer from "./components/Footer";
import { MovieContext } from "./context";
import { CartReducer, initialState } from "./reducers/CartReducer";

export default function App() {
  // const [cartData, setCartData] = useState([]);
  const [state, dispatch] = useReducer(CartReducer, initialState);

  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem] mx-auto">
          <Sidebar />
          <MovieList />
        </div>
      </main>
      <Footer />
    </MovieContext.Provider>
  );
}
