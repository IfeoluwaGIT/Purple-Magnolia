// components/Header.jsx
import { Box, Button, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    
    <Box as="header" bg="#e0e0e0"   overflow={"hidden"} height={"1000"} className="">
      <HStack spacing={8} align="center">
        {/* Left Side */}
        <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center ">
        <Stack spacing={4} >
          <Heading as="h1" size="2xl">Welcome to Our Bookstore</Heading>
          <Text fontSize="lg">
            Discover a world of literature, from classics to new releases Find your next great read!
          </Text>
          <Button colorScheme={"purple"} size="lg">Read abeg More</Button>
        </Stack>
        </div>

        {/* Right Side */}
        <div className="h-1/2 xl:w-1/2 xl:h-full relative">
        <Box >
          <Image src="https://images.pexels.com/photos/4908518/pexels-photo-4908518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Books" 
          fill
         width={"100%"}
         height={"100%"}
                />
        </Box>
        </div>
      </HStack>
    </Box>

  );
};

export default Header;
