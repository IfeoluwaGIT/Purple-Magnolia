import { Box, Button, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react";

const Ebooks = () => {
  return (
    <Box as="section" bg="#e0e0e0" overflow="hidden" height={{ base: "auto", md: "600px" }} border="2px" borderColor="#3f1c77" p={{ base: 4, md: 8 }}>
      <HStack spacing={{ base: 4, md: 8 }} align="center" flexDirection={{ base: "column", md: "row" }}>
        {/* Left Side */}
        <Box w={{ base: "100%", md: "50%" }} textAlign={{ base: "center", md: "left" }}>
          <Stack spacing={4} align="center">
            <Heading as="h1" size={{ base: "lg", md: "2xl" }}>
              Access, Read, Practice & Engage with Digital Content (eBook)
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta qui iure commodi dolores sed exercitationem non pariatur iusto nobis ex officia ullam hic, dolore fugit ipsum reprehenderit illo corporis itaque.
            </Text>
            <Button colorScheme="purple" size="lg" width="200px">
              Read More
            </Button>
          </Stack>
        </Box>

        {/* Right Side */}
        <Box w={{ base: "100%", md: "50%" }} textAlign="center" borderLeft={{ base: "none", md: "1px" }} borderColor="#3f1c77">
          <Image src="/pexels-accesss.png" alt="Books" objectFit="cover" />
        </Box>
      </HStack>
    </Box>
  );
};

export default Ebooks;
