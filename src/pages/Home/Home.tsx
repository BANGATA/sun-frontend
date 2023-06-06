import { Text, Flex, VStack, Button } from "@chakra-ui/react";
import "./Home.scss";
import Background1 from "../../assets/background-1.png";

const Home = () => {
  return (
    <Flex minH="90vh" w="100%" justify={"end"} align={"center"}>
      <Flex
        w={"80%"}
        h={"70vh"}
        bgImage={Background1}
        bgRepeat={"no-repeat"}
        bgPos={"right"}
        bgSize={"contain"}
        align={"center"}
      >
        <Flex flexDir={"column"} w={"40%"} gap={'36px'}>
          <Text fontSize={50} fontWeight={"bold"}>
            Build or scale up
          </Text>
          <Text fontSize={40}>your development team</Text>
          <Flex align={'center'} gap={5}>
            <Flex w="10%" border={"solid #FFCE07"} h='0px' borderRadius='full'></Flex>
            <Text>in weeks, not months</Text>
          </Flex>
          <Button borderRadius={"full"} bgColor={"#FFCE07"} w={'188px'}>
            Book now
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
