// components/Header.jsx
import { Box, Button, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box as="header" bg="#e0e0e0" overflow="hidden" height="1000px" border="2px" borderColor="#3f1c77">
      <HStack spacing={0} align="stretch" height="100%">
        {/* Left Side */}
        <Box w="50%" display="flex" alignItems="center" justifyContent="center">
          <Stack spacing={4} textAlign="center" maxW="lg">
            <Heading as="h1" size="2xl">Welcome to Our Bookstore</Heading>
            <Text fontSize="lg">
              Discover a world of literature, from classics to new releases. Find your next great read!
            </Text>
            <Button colorScheme="purple" size="lg">Read More</Button>
          </Stack>
        </Box>

        {/* Right Side */}
        <Box w="50%" position="relative">
          <Image
            src="https://images.pexels.com/photos/4908518/pexels-photo-4908518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Books"
            objectFit="cover"
            width="100%"
            height="100%"
            borderLeft={'1px'} 
            borderColor={"#3f1c77"}
          />
        </Box>
      </HStack>
    </Box>
  );
};

export default Header;
