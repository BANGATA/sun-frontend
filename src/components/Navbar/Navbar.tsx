import { Box, Button, Flex, Image } from "@chakra-ui/react";
import "./Navbar.scss";
import Logo from "../../assets/alba-logo.svg";

const Navbar = () => {
  return (
    <Flex
      w={"100vw"}
      className="navContainer"
      h="10vh"
      align={"center"}
      justify={"center"}
      gap="85px"
    >
      <Box className="logo">
        <Image src={Logo} />
      </Box>
      <Box>Service</Box>
      <Box>About</Box>
      <Box>Portfolio</Box>
      <Box>Blog</Box>
      <Box>Career</Box>
      <Button borderRadius={"full"} bgColor={"#FFCE07"}>
        Contact Us
      </Button>
    </Flex>
  );
};

export default Navbar;
