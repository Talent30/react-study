import { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      <section>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>
        <button
          type="button"
          onClick={() => {
            setValue(value - 1);
          }}
        >
          Decrease
        </button>
        <button
          type="button"
          onClick={() => {
            setValue(0);
          }}
        >
          Reset
        </button>
        <button
          type="button"
          onClick={() => {
            setValue(value + 1);
          }}
        >
          Increase
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
