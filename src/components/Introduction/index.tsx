import { Box, Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import Lottie from "react-lottie";
import computerBoy from "../../assets/lootie-boy-computer.json";

export const Introduction = () => {
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: computerBoy,
  };
  return (
    <Box
      w="100%"
      p={["10px 20px", "10px 20px", "50px 120px"]}
      bgColor="#212121"
      color="#41DA78"
    >
      <Flex
        justify="space-around"
        direction={["column", "column", "row"]}
        align="center"
      >
        <VStack
          p={["20px", "30px", "50px"]}
          w={["80%", "80%", "50%"]}
          mt={["30px", "40px", "50px"]}
          align={["flex-start"]}
        >
          <Heading fontSize={["30px", "35px", "40px"]} color="white">
            Olá, mundo! Meu nome é
          </Heading>
          <Heading fontSize={["35px", "42px", "48px"]}>Caio Giffoni</Heading>
          <Text color="white" fontSize={["12px", "14px", "16px"]}>
            Desenvolvedor Fullstack
          </Text>
        </VStack>
        <Box w={["250px", "300px", "400px"]}>
          <Lottie options={defaultOptions} />
        </Box>
      </Flex>
    </Box>
  );
};
