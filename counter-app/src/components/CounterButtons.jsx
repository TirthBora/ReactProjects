function CounterButtons({ count, step, setCount }) {
  return (
    <>
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
    </>
  );
}

export default CounterButtons;
