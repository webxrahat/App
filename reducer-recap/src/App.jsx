import React, { useState } from "react";
import "./App.css";

export default function App() {
 const [formData, setFormData] = useState("");

 const handInputChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
 };

 console.log("form", formData);

 return (
  <div>
   <div className="container">
    <div className="form-section">
     <h2>Submit Info</h2>
     <input
      onChange={handInputChange}
      type="text"
      placeholder="Name"
      name="name"
     />
     <input
      onChange={handInputChange}
      type="email"
      placeholder="Email"
      name="email"
     />
     <input
      onChange={handInputChange}
      type="text"
      placeholder="Task"
      name="task"
     />
     <button type="submit">Submit</button>
    </div>

    <div className="list-section">
     <h2>Submissions</h2>
     <div className="list-item">
      <div className="info">
       <strong>John Doe</strong>
       <br />
       john@example.com
      </div>
      <input type="checkbox" title="Mark as done" />
      <button>Edit</button>
      <button>Delete</button>
     </div>
    </div>
   </div>
  </div>
 );
}
