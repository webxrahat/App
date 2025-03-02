import React from "react";
import { Link, Route, Routes } from "react-router";
import Home from "./components/Home";

const App = () => {
 return (
  <div>
   <nav>
    <ul>
     <li>
      <Link to="/">Home</Link>
     </li>
     <li>
      <Link to="/useReducerA">UseReducer 1</Link>
     </li>
     <li>
      <Link to="/useReducerB">UseReducer 2</Link>
     </li>
     <li>
      <Link to="/useContext">UseContext</Link>
     </li>
    </ul>
   </nav>

   <Routes>
    <Route path="/" element={<Home />} />
   </Routes>
  </div>
 );
};

export default App;
