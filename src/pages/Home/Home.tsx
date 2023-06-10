import { Text, Flex, VStack, Button, Image } from "@chakra-ui/react";
import "./Home.scss";
import Background1 from "../../assets/background-1.png";

const Home = () => {
  return (
    <>
      <Flex
        minH="100vh"
        w="98.9vw"
        justify={["center", "center", "space-between", "space-between"]}
        align={"center"}
        px={10}
        flexDir={["column", "column", "row", "row"]}
        gap={[10, 10, 0, 0]}
      >
        <Flex
          flexDir={"column"}
          gap={["10px", "10px", "36px", "36px"]}
          w="100%"
          justify="center"
          alignItems={"center"}
        >
          <Text fontSize={[28, 30, 36, 40, 50]} fontWeight={"bold"}>
            Build or scale up
          </Text>
          <Text fontSize={[16, 20, 26, 30, 40]}>your development team</Text>
          <Flex align={"center"} gap={5}>
            <Flex
              w="10%"
              border={"solid #FFCE07"}
              h="0px"
              borderRadius="full"
            />
            <Text fontSize={[12, 14, 16, 16, 16]}>in weeks, not months</Text>
          </Flex>
          <Button
            borderRadius={"full"}
            bgColor={"#FFCE07"}
            w={["120px", "120px", "188px", "188px"]}
          >
            Book now
          </Button>
        </Flex>
        <Image src={Background1} w={["100%", "100%", "50%", "50%"]} />
      </Flex>
      <Flex></Flex>
    </>
  );
};

export default Home;
