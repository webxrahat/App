import React from "react";

export default function App() {
 return (
  <div>
   <h1>Reducer</h1>
   <div className="inp">
    <input type="text" name="name" id="" />
    <input type="email" name="email" id="" />
    <input type="number" name="number" id="" />
   </div>

   <button className="btn">Submit</button>

   {/* <ul>
        {showAllData.map((n) => (
          <>
            <li>
              {n.name}, {n.email}, {n.age}
            </li>
          </>
        ))}
      </ul> */}
  </div>
 );
}
