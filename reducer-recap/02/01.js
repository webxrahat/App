import { useState } from "react";
import "./App.css";

function App() {
  const initialValue = { name: "", email: "", age: "" };

  const [formData, setDataForm] = useState(initialValue);

  const [showAllData, setShowAllData] = useState([]);

  const handleSubmit = () => {
    setShowAllData([...showAllData, formData]);
  };

  console.log("formData", formData);
  console.log("showAllData", showAllData);

  return (
    <>
      <h1>Reducer</h1>
      <div className="inp">
        <input
          onChange={(e) => setDataForm({ ...formData, name: e.target.value })}
          type="text"
          name="name"
          id=""
        />
        <input
          onChange={(e) => setDataForm({ ...formData, email: e.target.value })}
          type="email"
          name="email"
          id=""
        />
        <input
          onChange={(e) => setDataForm({ ...formData, age: e.target.value })}
          type="number"
          name="number"
          id=""
        />
      </div>

      <button onClick={handleSubmit} className="btn">
        Submit
      </button>

      <ul>
        {showAllData.map((n) => (
          <>
            <li>
              {n.name}, {n.email}, {n.age}
            </li>
          </>
        ))}
      </ul>
    </>
  );
}

export default App;
