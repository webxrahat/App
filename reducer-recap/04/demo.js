import React, { useReducer, useState } from "react";
import "./App.css";

const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];

export default function App() {
  const [formData, setFormData] = useState("");

  const handInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log("form", formData);

  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

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
