import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setDataForm] = useState({});

  const handleChange = (e) => {};

  console.log(formData);

  return (
    <>
      <h1>Reducer</h1>
      <div className="inp">
        <input
          onChange={(e, pre) => setDataForm({ ...pre, name: e.target.value })}
          type="text"
          name="name"
          id=""
        />
        <input
          onChange={(e, pre) => setDataForm({ ...pre, email: e.target.value })}
          type="email"
          name="email"
          id=""
        />
        <input
          onChange={(e, pre) => setDataForm({ ...pre, age: e.target.value })}
          type="number"
          name="number"
          id=""
        />
      </div>

      <button className="btn">Submit</button>
    </>
  );
}

export default App;
