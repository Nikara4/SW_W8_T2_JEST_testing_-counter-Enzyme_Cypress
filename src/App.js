import "./App.css";
import Counter from "./components";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Counter />
    </ChakraProvider>
  );
}

export default App;
