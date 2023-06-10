import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import "./Testi.scss";
import Bg from "../../assets/bgtesti.svg";
import Testimonials from "../../assets/Testi.png";
import CPY1 from "../../assets/CPY/1.svg";
import CPY2 from "../../assets/CPY/2.svg";
import CPY3 from "../../assets/CPY/3.svg";
import CPY4 from "../../assets/CPY/4.svg";
import CPY5 from "../../assets/CPY/5.svg";

const Testi = () => {
  return (
    <Flex
      align={"center"}
      py={10}
      minH="100vh"
      flexDir="column"
      gap="5"
      backgroundImage={Bg}
      backgroundSize={"cover"}
      backgroundRepeat={"no-repeat"}
      backgroundPosition={"center"}
    >
      <Text color="#C4C4C4" fontSize={[10, 10, 16, 16]}>
        Testimonials
      </Text>
      <Text color="#000000" fontSize={[12, 18, 20, 30]}>
        What clients love in working with Albatech Team
      </Text>
      <Flex w={"80%"} mt={10}>
        <Image src={Testimonials} />
      </Flex>
      <Flex
        w={"80%"}
        mt={10}
        gap={5}
        justify={"center"}
        align="center"
        flexDir={["column", "column", "row", "row"]}
      >
        <Image src={CPY1} w={[100, 100, 100, 150]} h={[100, 100, 100, 150]} />
        <Image src={CPY2} w={[100, 100, 100, 150]} h={[100, 100, 100, 150]} />
        <Image src={CPY3} w={[100, 100, 100, 150]} h={[100, 100, 100, 150]} />
        <Image src={CPY4} w={[100, 100, 100, 150]} h={[100, 100, 100, 150]} />
        <Image src={CPY5} w={[100, 100, 100, 150]} h={[100, 100, 100, 150]} />
      </Flex>
      <Flex
        w={"80%"}
        mt={10}
        gap={2}
        justify={"center"}
        align="center"
        flexDir={"column"}
        h={200}
        borderRadius={"8px"}
        border={"1px solid black"}
        bgColor={"#FFCE07"}
      >
        <Text color="#000000" fontSize={[10, 10, 16, 16]}>
          Testimonials
        </Text>
        <Text color="#000000" fontSize={[12, 18, 20, 24]}>
          Build it with Albatech
        </Text>
        <Button borderRadius={"full"} bgColor="#FFCE07" border={'1px solid black'}>
          Consultation Now
        </Button>
      </Flex>
    </Flex>
  );
};

export default Testi;
