import { Box, Flex, Image, Text } from "@chakra-ui/react";
import "./Footer.scss";
import Logo from "../../assets/alba-logo.svg";
import Fb from "../../assets/Sosmed/Fb.svg";
import Ig from "../../assets/Sosmed/Ig.svg";
import Linked from "../../assets/Sosmed/Linked.svg";

const Footer = () => {
  return (
    <>
      <Flex
        mx={10}
        py={10}
        color={"black"}
        borderTop={"solid 1px #c4c4c4"}
        borderBottom={"solid 1px #c4c4c4"}
        justify={"space-between"}
        gap={[5, 5, 0, 0]}
        flexDir={["column", "column", "row", "row"]}
        align={"center"}
      >
        <Flex flexDir={"column"} w={["100%","100%","30%","30%"]}>
          <Image src={Logo} w={150} />
          <Text mt={2} fontSize={[12, 14, 16, 16]}>
            Albatech acts as a corporate partner to help digitize their business
            to accelerate trends in remote work.
          </Text>
          <Flex mt={5} gap={3}>
            <Image src={Fb} w={"20px"} h={"20px"} />
            <Image src={Ig} w={"20px"} h={"20px"} />
            <Image src={Linked} w={"20px"} h={"20px"} />
          </Flex>
        </Flex>
        <Flex flexDir={"column"} w={["100%","100%","30%","30%"]}>
          <Text fontSize={[14, 20, 20, 19]}>Website</Text>
          <Flex flexDir={"column"} mt={3} gap={2}>
            <Text fontSize={[12, 12, 14, 14]}>About</Text>
            <Text fontSize={[12, 12, 14, 14]}>Service</Text>
            <Text fontSize={[12, 12, 14, 14]}>Portfolio</Text>
            <Text fontSize={[12, 12, 14, 14]}>Blog</Text>
            <Text fontSize={[12, 12, 14, 14]}>Career</Text>
          </Flex>
        </Flex>
        <Flex flexDir={"column"} w={["100%","100%","30%","30%"]}>
          <Text fontSize={[14, 20, 20, 19]}>Contact</Text>
          <Flex flexDir={"column"} mt={3} gap={2}>
            <Text fontSize={[12, 12, 14, 14]}>
              The Prominence Blok 38D No.25 Jl. Jalur Sutera Barat, Alam Sutera,
              Kota Tangerang, Banten 15143
            </Text>
            <Text fontSize={[12, 12, 14, 14]}>P: +62 81 1889 3383</Text>
            <Text fontSize={[12, 12, 14, 14]}>E: info@albatech.id</Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex justify={"space-between"} mx={10} py={5} flexDir={['column','column','row','row']}>
        <Text color="#C4C4C4" fontSize={[10, 10, 16, 16]}>
          ©PT. Alba Digital Teknologi 2021 | All Rights Reserved
        </Text>
        <Text color="#C4C4C4" fontSize={[10, 10, 16, 16]}>
          Privacy policy | Terms of service
        </Text>
      </Flex>
    </>
  );
};

export default Footer;
