import { useState, useEffect } from "react";
import "./App.css";

import CounterDisplay from "./components/CounterDisplay";
import CounterButtons from "./components/CounterButtons";
import StepInput from "./components/StepInput";
import ThemeToggle from "./components/ThemeToggle";

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

        <CounterDisplay count={count} />

        <StepInput step={step} setStep={setStep} />

        <CounterButtons
          count={count}
          step={step}
          setCount={setCount}
        />

        <ThemeToggle dark={dark} setDark={setDark} />
      </div>
    </div>
  );
}

export default App;

