import { useState } from "react";

const Counter = ({ start }) => {
  let [counter, setCounter] = useState(start ? start : 0);
  const [inputValue, setInputValue] = useState(start ? start : 0);

  const addToCounter = () => setCounter(++counter);
  const subtractFromCounter = () => setCounter(--counter);

  const getValue = (event) => setInputValue(event.target.value);

  const changeCounterValue = () => {
    setCounter(inputValue);
  };

  const resetCounterValue = () => {
    setCounter(0);
  };

  return (
    <div>
      <header className="counter--header">
        <h1>Testing exercise 2 - Szkoła Reacta</h1>
      </header>

      <input
        value={inputValue}
        onChange={getValue}
        placeholder="type any number"
        type="number"
        defaultValue={0}
      />

      <button onClick={changeCounterValue} name="changeCounter" id="change">
        Change number
      </button>

      <button onClick={resetCounterValue} name="resetCounter" id="reset">
        Reset number
      </button>

      <button name="add" id="add" onClick={addToCounter}>
        +
      </button>

      <button name="subtract" id="subtract" onClick={subtractFromCounter}>
        -
      </button>

      <span id="counter">{counter}</span>
    </div>
  );
};

export default Counter;
