import { Box, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { HashLink } from "react-router-hash-link";
import { HeaderLink } from "./HeaderLink";
import caioLogo from "../../assets/caio-emoticon-removebg-preview-only-head.png";
import { HeaderMenu } from "./HeaderMenu";

export const Header = () => {
  return (
    <HStack
      bgColor="#212121"
      h="100px"
      w="100%"
      p={["0px 30px", "0px 80px"]}
      justify="space-between"
      color="white"
      pt="12px"
      position="sticky"
      top="0"
      zIndex="10"
    >
      <HStack>
        <Image
          src={caioLogo}
          w="80px"
          borderRadius="32px"
          display={["none", "none", "block"]}
        />
        <Heading fontSize={["18px", "24px"]} color="#41DA78">
          Caio Giffoni
        </Heading>
      </HStack>
      <HStack spacing={[2, 2, 2, 6]} display={["none", "none", "flex"]}>
        <HeaderLink to="#quemsomos">Home</HeaderLink>
        <HeaderLink to="#quemsomos">Sobre</HeaderLink>
        <HeaderLink to="#quemsomos">Skills</HeaderLink>
        <HeaderLink to="#quemsomos">Qualification</HeaderLink>
        <HeaderLink to="#quemsomos">Porfolio</HeaderLink>
        <HeaderLink to="#quemsomos">Contato</HeaderLink>
      </HStack>
      <Box display={["block", "block", "none"]}>
        <HeaderMenu />
      </Box>
    </HStack>
  );
};
