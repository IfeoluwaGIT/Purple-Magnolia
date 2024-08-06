import { Box, Button, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react";

const Ebooks = () => {
  return (
    <Box as="header" bg="#e0e0e0" overflow="hidden" height="600px" border={'2px'} 
    borderColor={"#3f1c77"}>
      <HStack spacing={8} align="center">
        {/* Left Side */}
        <Box w="full" textAlign="center">
          <Stack spacing={4} align="center">
            <Heading as="h1" size="2xl">
              Access, Read, Practice & Engage with Digital Content (eBook)
            </Heading>
            <Text fontSize="lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta qui iure commodi dolores sed exercitationem non pariatur iusto nobis ex officia ullam hic, dolore fugit ipsum reprehenderit illo corporis itaque.
            </Text>
            <Button colorScheme="purple" size="lg" width="200px">
              Read More
            </Button>
          </Stack>
        </Box>

        {/* Right Side */}
        <Box w="full" textAlign="center" position="relative" borderLeft={'1px'}  
          borderColor={"#3f1c77"}>
          <Image src="/pexels-accesss.png" alt="Books" objectFit="cover" />
        </Box>
      </HStack>
    </Box>
  );
};

export default Ebooks;
