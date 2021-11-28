import { useState } from "react";
import Number from "./components/Number";
import Input from "./components/Input";
import Button from "./components/Button";

const Counter = () => {
  let [counter, setCounter] = useState(0);

  const addToCounter = () => setCounter(counter++);
  const subtractFromCounter = () => setCounter(counter--);

  const getValue = (event) => setCounter(event.target.value);

  const changeCounterValue = (event) => {
    event.preventDefault();
  };

  const resetCounterValue = (event) => {
    event.preventDefault();
    setCounter(0);
  };

  return (
    <div>
      <header className="counter--header">
        <h1>Testing exercise 2 - Szkoła Reacta</h1>
      </header>
      <Input handleChange={getValue} />
      <Button handleClick={changeCounterValue} name="changeCounter">
        Change number
      </Button>
      <Button handleClick={resetCounterValue} name="resetCounter">
        Reset number
      </Button>
      <Button name="add" handleClick={addToCounter}>
        +
      </Button>
      <Button name="subtract" handleClick={subtractFromCounter}>
        -
      </Button>
      <Number counter={counter} />
    </div>
  );
};

export default Counter;
