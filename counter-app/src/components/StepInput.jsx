function StepInput({ step, setStep }) {
    return (
        <div className="step-input">
            <label htmlFor="step">Step Size: </label>
            <input
                id="step"
                type="number"
                min="1"
                value={step}
                onChange={(e) => setStep(Number(e.target.value))}
            />
        </div>
    );
}

export default StepInput;
