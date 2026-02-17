function StepInput({ step, setStep }) {
  return (
    <input
      type="number"
      value={step}
      onChange={(e) => setStep(Number(e.target.value))}
      className="input"
    />
  );
}

export default StepInput;
