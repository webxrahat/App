import { useState } from "react";
import "./App.css";

function App() {
  const initialValue = { name: "", email: "" };

  const [formValue, setFormValue] = useState(initialValue);
  const [user, setUser] = useState([]);

  const handleChenge = (e) => {
    setFormValue((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };

  const handleDataSubmit = () => {
    setUser([...user, formValue]);
  };
  console.log(user);

  return (
    <>
      <h1>Reducer</h1>
      <div className="inp">
        <input
          type="text"
          name="name"
          id=""
          value={formValue.name}
          onChange={handleChenge}
        />
        <input
          type="email"
          name="email"
          id=""
          value={formValue.email}
          onChange={handleChenge}
        />
      </div>

      <button onClick={handleDataSubmit} className="btn">
        Submit
      </button>

      {/* <ul>
        {showAllData.map((n) => (
          <>
            <li>
              {n.name}, {n.email}, {n.age}
            </li>
          </>
        ))}
      </ul> */}
    </>
  );
}

export default App;
