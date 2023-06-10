import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Text,
  HStack,
  Box,
  IconButton,
  Link,
  Stack,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import Logo from "../../assets/alba-logo.svg";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box px={4}className="navContainer" position={'fixed'} bgColor='#ffffff' zIndex={2} w='100%'>
        <Flex h={"10vh"} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            backgroundColor={"#FFCE07"}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Link href="/">
              <Box mx={5}>
                <Image src={Logo} />
              </Box>
            </Link>
          </HStack>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            <Box>Service</Box>
            <Box>About</Box>
            <Box>Portfolio</Box>
            <Box>Blog</Box>
            <Box>Career</Box>
          </HStack>
          <Flex alignItems={"center"}>
            <Button borderRadius={"full"} bgColor={"#FFCE07"}>
              Contact Us
            </Button>
          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Button
                variant={"none"}
                _hover={{
                  color: "gray.300",
                }}
              >
                <Text fontSize={["md", "xs", "md", "md", "lg"]}>Service</Text>
              </Button>
              <Button
                variant={"none"}
                _hover={{
                  color: "gray.300",
                }}
              >
                <Text fontSize={["md", "xs", "md", "md", "lg"]}>About</Text>
              </Button>
              <Button
                variant={"none"}
                _hover={{
                  color: "gray.300",
                }}
              >
                <Text fontSize={["md", "xs", "md", "md", "lg"]}>Portfolio</Text>
              </Button>
              <Button
                variant={"none"}
                _hover={{
                  color: "gray.300",
                }}
              >
                <Text fontSize={["md", "xs", "md", "md", "lg"]}>Blog</Text>
              </Button>
              <Button
                variant={"none"}
                _hover={{
                  color: "gray.300",
                }}
              >
                <Text fontSize={["md", "xs", "md", "md", "lg"]}>Career</Text>
              </Button>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Navbar;
