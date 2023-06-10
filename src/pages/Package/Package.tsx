import { Box, Flex, Text, Wrap, WrapItem, Image } from "@chakra-ui/react";
import "./Package.scss";
import Icon1 from "../../assets/icon1.svg";
import Icon2 from "../../assets/icon2.svg";
import Icon3 from "../../assets/icon3.svg";
import Icon4 from "../../assets/icon4.svg";
import Icon5 from "../../assets/icon5.svg";
import Icon6 from "../../assets/icon6.svg";
import PL1 from "../../assets/PL/1.svg";
import PL2 from "../../assets/PL/2.svg";
import PL3 from "../../assets/PL/3.svg";
import PL4 from "../../assets/PL/4.svg";
import PL5 from "../../assets/PL/5.svg";
import PL6 from "../../assets/PL/6.svg";
import PL7 from "../../assets/PL/7.svg";
import PL8 from "../../assets/PL/8.svg";
import PL9 from "../../assets/PL/9.svg";
import PL10 from "../../assets/PL/10.svg";
import PL11 from "../../assets/PL/11.svg";
import PL12 from "../../assets/PL/12.svg";
import PL13 from "../../assets/PL/13.svg";
import PL14 from "../../assets/PL/14.svg";

const Package = () => {
  const PLLogo = [
    { id: 1, logo: PL1 },
    { id: 2, logo: PL2 },
    { id: 3, logo: PL3 },
    { id: 4, logo: PL4 },
    { id: 5, logo: PL5 },
    { id: 6, logo: PL6 },
    { id: 7, logo: PL7 },
    { id: 8, logo: PL8 },
    { id: 9, logo: PL9 },
    { id: 10, logo: PL10 },
    { id: 11, logo: PL11 },
    { id: 12, logo: PL12 },
    { id: 13, logo: PL13 },
    { id: 14, logo: PL14 },
  ];
  return (
    <Flex align={"center"} py={10} minH="100vh" flexDir="column" gap="5">
      <Text color="#C4C4C4" fontSize={[10, 10, 16, 16]}>
        Complete Package
      </Text>
      <Text color="#000000" fontSize={[12, 18, 20, 30]}>
        From product design to software continuous delivery
      </Text>
      <Wrap w="80%" justify={"center"} align="center" spacing={"36px"}>
        <WrapItem
          w={320}
          h={180}
          borderRadius="8px"
          border={"1px solid #B5B5B5"}
          _hover={{ border: "1px solid #FFCE07" }}
          p={5}
          flexDir="column"
        >
          <Image src={Icon1} />
          <Text mt={5} fontSize={[16, 16, 20, 20]} color="#FFCE07">
            Website Development
          </Text>
          <Text fontSize={[12, 12, 14, 14]}>
            High-performance website to reach out more your potential customers
          </Text>
        </WrapItem>
        <WrapItem
          w={320}
          h={180}
          borderRadius="8px"
          p={5}
          border={"1px solid #B5B5B5"}
          _hover={{ border: "1px solid #FFCE07" }}
          flexDir="column"
        >
          <Image src={Icon2} />
          <Text mt={5} fontSize={[16, 16, 20, 20]} color="#FFCE07">
            Mobile Apps Development
          </Text>
          <Text fontSize={[12, 12, 14, 14]}>
            To accelerate your business process
          </Text>
        </WrapItem>
        <WrapItem
          w={320}
          h={180}
          borderRadius="8px"
          p={5}
          border={"1px solid #B5B5B5"}
          _hover={{ border: "1px solid #FFCE07" }}
          flexDir="column"
        >
          <Image src={Icon3} />
          <Text mt={5} fontSize={[16, 16, 20, 20]} color="#FFCE07">
            Digital Product Design
          </Text>
          <Text fontSize={[12, 12, 14, 14]}>
            Complete digital product creations from UX prototyping to final UI
            designs
          </Text>
        </WrapItem>
        <WrapItem
          w={320}
          h={180}
          borderRadius="8px"
          p={5}
          border={"1px solid #B5B5B5"}
          _hover={{ border: "1px solid #FFCE07" }}
          flexDir="column"
        >
          <Image src={Icon4} />
          <Text mt={5} fontSize={[16, 16, 20, 20]} color="#FFCE07">
            Maintenance
          </Text>
          <Text fontSize={[12, 12, 14, 14]}>
            Make sure your digital environment keep online and updated
          </Text>
        </WrapItem>
        <WrapItem
          w={320}
          h={180}
          borderRadius="8px"
          p={5}
          border={"1px solid #B5B5B5"}
          _hover={{ border: "1px solid #FFCE07" }}
          flexDir="column"
        >
          <Image src={Icon5} />
          <Text mt={5} fontSize={[16, 16, 20, 20]} color="#FFCE07">
            CMS Development
          </Text>
          <Text fontSize={[12, 12, 14, 14]}>
            You can update your website content yourself
          </Text>
        </WrapItem>
        <WrapItem
          w={320}
          h={180}
          borderRadius="8px"
          p={5}
          border={"1px solid #B5B5B5"}
          _hover={{ border: "1px solid #FFCE07" }}
          flexDir="column"
        >
          <Image src={Icon6} />
          <Text mt={5} fontSize={[16, 16, 20, 20]} color="#FFCE07">
            Integrated payment gateway
          </Text>
          <Text fontSize={[12, 12, 14, 14]}>
            Simplify the payment system with just one step
          </Text>
        </WrapItem>
      </Wrap>
      <Wrap mt={100} w="80%" align="center" spacing={"150px"}>
        {PLLogo.map((p) => {
          return (
            <WrapItem w={90} h={90} key={p.id}>
              <Image src={p.logo} />
            </WrapItem>
          );
        })}
      </Wrap>
    </Flex>
  );
};

export default Package;
