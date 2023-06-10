import { Flex } from "@chakra-ui/react";
import { Footer, Navbar } from "./components";
import { Home, Package, Portfolio, Testi } from "./pages";

function App() {
  return (
    <Flex minH={"100vh"} flexDir={"column"}>
      {/* Routing components */}
      <Navbar />
      <Navbar />
      <Home />
      <Package />
      <Portfolio />
      <Testi />
      <Footer />
    </Flex>
  );
}

export default App;
