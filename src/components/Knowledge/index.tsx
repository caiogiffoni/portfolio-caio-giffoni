import {
  Avatar,
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import Javascript from "../../assets/badge-cards/javascript.svg";

export const Knowledge = () => {
  const BigScreen = "130px";
  const SmallScreen = "100px";

  return (
    <Box
      id="skills"
      w="100%"
      p={["40px 20px", "50px 20px", "60px 120px"]}
      bgColor="#212121"
      color="#41DA78"
    >
      <HStack justify="center" mt="15px">
        <Heading color="white">Conhecimento</Heading>
      </HStack>
      <Flex w="100%" justify="center" align="center">
        <Flex
          p={["0px", "30px", "50px"]}
          w="80%"
          wrap="wrap"
          gap="18px"
          justify="center"
          mt="25px"
          mb="15px"
        >
          <Image
            w={[SmallScreen, BigScreen]}
            src={
              "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white&style=plastic"
            }
          />
          <Image
            w={[SmallScreen, BigScreen]}
            src={
              "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white&style=plastic"
            }
          />
          <Image
            w={[SmallScreen, BigScreen]}
            src={
              "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black&style=plastic"
            }
          />
          <Image
            w={[SmallScreen, BigScreen]}
            src={
              "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white&style=plastic"
            }
          />
          <Image
            w={[SmallScreen, BigScreen]}
            src={
              "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB&style=plastic"
            }
          />

          <Image
            w={[SmallScreen, BigScreen]}
            src={
              "https://img.shields.io/badge/-Chakra%20UI-5EC9CA?logo=chakra-ui&logoColor=white&style=plastic"
            }
          />

          <Image
            w={[SmallScreen, BigScreen]}
            src={
              "https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=mui&logoColor=white&style=plastic"
            }
          />

          <Image
            w={[SmallScreen, BigScreen]}
            src={
              "https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white&style=plastic"
            }
          />

          <Image
            w={[SmallScreen, BigScreen]}
            src={
              "https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white&style=plastic"
            }
          />
        </Flex>
      </Flex>
    </Box>
  );
};
