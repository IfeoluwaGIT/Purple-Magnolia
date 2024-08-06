import { Flex, Box, Text, Heading, Button, Image } from "@chakra-ui/react";

const NewRelease = () => {
  return (
    <div className="">
      <Heading textAlign={"center"}> NewRelease </Heading>
      <Flex justify="space-between" gap={6}>
      <Image src="/book.png" alt="Category 2" mb={4} ml={16} />
      <Image src="/book.png" alt="Category 2" mb={4}  mr={5}/>
      <Image src="/book.png" alt="Category 2" mb={4} mr={16} />
      </Flex>
      <Flex justify="space-between" mb={6}>
        <Box textAlign="center" width="30%">
         
          <Heading as="h3" fontSize="lg" mb={2}>
            Dreams by Vision
          </Heading>
          <Text>
            Paula Abak
          </Text>
          <Text>$10</Text>
        </Box>

        <Box textAlign="center" width="30%">
          
          <Heading as="h3" fontSize="lg" mb={2}>
          Dreams by Vision
          </Heading>
          <Text>
            Paula Ofulue
          </Text>
          <Text>$10</Text>
        </Box>

        <Box textAlign="center" width="30%">
          
          <Heading as="h3" fontSize="lg" mb={2}>
          Dreams by Vision
          </Heading>
          <Text>
            Paula Ofulue
          </Text>
          <Text>$10</Text>
        </Box>
      </Flex>
    </div>
  );
};

export default NewRelease;