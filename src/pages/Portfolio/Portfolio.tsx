import {
  Box,
  Flex,
  Text,
  HStack,
  Wrap,
  WrapItem,
  Image,
  Button,
} from "@chakra-ui/react";
import "./Portfolio.scss";
import Porto from "../../assets/Porto.png";

const Portfolio = () => {
  return (
    <Flex align={"center"} py={10} minH="100vh" flexDir="column" gap="5">
      <Flex
        bgColor="#272727"
        w="100%"
        h="271px"
        flexDir="column"
        align={"center"}
        justify="center"
      >
        <Text color="#FFCE07" fontSize={[14, 20, 26, 26]}>
          Our Progress Comes with a Collaboration Between
        </Text>
        <Text color="#FFCE07" fontSize={[14, 20, 26, 26]}>
          Creativity, Ideas, and Technology
        </Text>
        <Flex
          color="white"
          mt={5}
          w={["100%", "100%", "80%", "80%"]}
          justify={"space-around"}
        >
          <Flex flexDir={"column"} justify={"center"} align="center">
            <Text fontSize={[16, 20, 26, 26]}>1000+</Text>
            <Text fontSize={[10, 16]}>Designs</Text>
          </Flex>
          <Flex flexDir={"column"} justify={"center"} align="center">
            <Text fontSize={[16, 20, 26, 26]}>30+</Text>
            <Text fontSize={[10, 16]}>Products</Text>
          </Flex>
          <Flex flexDir={"column"} justify={"center"} align="center">
            <Text fontSize={[16, 20, 26, 26]}>58+</Text>
            <Text fontSize={[10, 16]}>Website Developments</Text>
          </Flex>
        </Flex>
      </Flex>
      <Text color="#C4C4C4" fontSize={[10, 10, 16, 16]}>
        Complete Package
      </Text>
      <Text
        color="#000000"
        fontSize={[12, 18, 20, 30]}
        w={["90%", "100%", "100%", "100%"]}
        textAlign={"center"}
      >
        The software that we build takes our clients to the next level
      </Text>
      <Wrap justify={"center"} align="center">
        <WrapItem
          w={[300, 300, 345, 345]}
          h={410}
          border={"1px solid #B5B5B5"}
          _hover={{ border: "1px solid #FFCE07" }}
          flexDir={"column"}
          borderRadius="8px"
        >
          <Image src={Porto} />
          <Flex flexDir={"column"} gap={3} p={5} fontSize={12}>
            <Text color="#c4c4c4">Mobile Apps</Text>
            <Text color="#FFCE07" fontSize={24}>
              ILIOS app (B2B E-commerce)
            </Text>
            <Text>
              Has a unique selling point where not all companies offer
              applications for sales, data collection, and management
            </Text>
          </Flex>
        </WrapItem>
        <WrapItem
          w={[300, 300, 345, 345]}
          h={410}
          border={"1px solid #B5B5B5"}
          _hover={{ border: "1px solid #FFCE07" }}
          flexDir={"column"}
          borderRadius="8px"
        >
          <Image src={Porto} />
          <Flex flexDir={"column"} gap={3} p={5} fontSize={12}>
            <Text color="#c4c4c4">Website Development</Text>
            <Text color="#FFCE07" fontSize={24}>
              Home and Living
            </Text>
            <Text>
              Albatech helps in creating a website catalog to show brand
              identity and information in accordance with vision and mission of
              Home and Living.
            </Text>
          </Flex>
        </WrapItem>
        <WrapItem
          w={[300, 300, 345, 345]}
          h={410}
          border={"1px solid #B5B5B5"}
          _hover={{ border: "1px solid #FFCE07" }}
          flexDir={"column"}
          borderRadius="8px"
        >
          <Image src={Porto} />
          <Flex flexDir={"column"} gap={3} p={5} fontSize={12}>
            <Text color="#c4c4c4">Website Development</Text>
            <Text color="#FFCE07" fontSize={24}>
              HIPPO
            </Text>
            <Text>
              Albatech help to create e-commerce and company profile for Hippo’s
              Website with realtime transaction and integration with Payment
              Gateway to accept multi payment.
            </Text>
          </Flex>
        </WrapItem>
      </Wrap>
      <Button borderRadius={"full"} bgColor={"#FFCE07"}>
        Learn More
      </Button>
    </Flex>
  );
};

export default Portfolio;
