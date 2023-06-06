import { Flex } from "@chakra-ui/react";
import { Navbar } from "./components";
import { Home } from "./pages";

function App() {
  return (
    <Flex minH={'100vh'} flexDir={"column"}>
      <Navbar />
      <Home />
    </Flex>
  );
}

export default App;
