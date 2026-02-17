import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(() => {
    return Number(localStorage.getItem("count")) || 0;
  });

  const [step, setStep] = useState(1);

  const [dark, setDark] = useState(() => {
    return JSON.parse(localStorage.getItem("dark")) ?? true;
  });

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(dark));
  }, [dark]);

  return (
    <div className={dark ? "dark-theme" : "light-theme"}>
      <div className="container">
        <h1>Advanced Counter</h1>

        <h2>{count}</h2>

        <input
          type="number"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          className="input"
        />

        <br />

        <button onClick={() => setCount(count + step)}>
          Increase
        </button>

        <button
          onClick={() => {
            if (count > 0) setCount(count - step);
          }}
        >
          Decrease
        </button>

        <button onClick={() => setCount(0)}>
          Reset
        </button>

        <button onClick={() => setDark(!dark)}>
          {dark ? "Light Mode ☀️" : "Dark Mode 🌙"}
        </button>
      </div>
    </div>
  );
}

export default App;
