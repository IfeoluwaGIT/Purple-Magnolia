// components/Header.jsx
import { Box, Button, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box 
      as="header" 
      bg="#e0e0e0" 
      overflow="hidden" 
      height={{ base: "auto", sm: "370px", md: "600px", lg: "1000px" }} 
      border="2px" 
      borderColor="#3f1c77"
    >
      <HStack 
        spacing={0} 
        align="stretch" 
        height="100%" 
        flexDirection={{ base: "column", md: "row" }} // Switch to column on mobile
      >
        {/* Left Side */}
        <Box 
          w={{ base: "100%", md: "50%" }} 
          display="flex" 
          alignItems="center" 
          justifyContent="center" 
          p={4}
          textAlign="center" // Center text on both mobile and desktop
        >
          <Stack spacing={4} maxW="lg">
            <Heading as="h1" size={{ base: "xl", md: "2xl" }}>
              Welcome to Our Bookstore
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }}>
              Discover a world of literature, from classics to new releases. Find your next great read!
            </Text>
            <Button colorScheme="purple" size="lg">
              Read More
            </Button>
          </Stack>
        </Box>

        {/* Right Side */}
        <Box 
          w={{ base: "100%", md: "50%" }} 
          position="relative" 
          overflow="hidden"
          mt={{ base: 4, md: 0 }} // Add margin-top on mobile to separate from text
          textAlign="center" // Center content on mobile
        >
          <Image
            src="https://images.pexels.com/photos/4908518/pexels-photo-4908518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Books"
            objectFit="cover"
            width="100%"
            height="100%"
            borderLeft={{ base: "0px", md: "1px" }}
            borderColor="#3f1c77"
          />
        </Box>
      </HStack>
    </Box>
  );
};

export default Header;
