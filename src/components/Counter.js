import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

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
    <Box>
      <header className="counter--header">
        <Heading as="h2" size="xl">
          Testing exercise 2 - Szkoła Reacta
        </Heading>
      </header>
      <div className="counter--main">
        <NumberInput size="lg">
          <NumberInputField
            value={inputValue}
            id="input"
            onChange={getValue}
            placeholder="type any number"
          />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <div className="counter--flexbox">
          <Button
            onClick={changeCounterValue}
            name="changeCounter"
            id="change"
            colorScheme="teal"
            size="md"
          >
            Change number
          </Button>

          <Button
            onClick={resetCounterValue}
            name="resetCounter"
            id="reset"
            colorScheme="teal"
            size="md"
          >
            Reset number
          </Button>
        </div>

        <div className="counter--div">
          <Text fontSize="2xl">
            Counter: <span id="counter">{counter}</span>
          </Text>
        </div>

        <div className="counter--flexbox">
          <Button
            name="add"
            id="add"
            onClick={addToCounter}
            colorScheme="teal"
            size="sm"
          >
            +
          </Button>

          <Button
            name="subtract"
            id="subtract"
            onClick={subtractFromCounter}
            colorScheme="teal"
            size="sm"
          >
            -
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default Counter;
