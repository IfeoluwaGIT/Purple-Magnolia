import { Box, Button, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react";

const Ebooks = () => {
  return (
    
    <Box as="header" bg="#e0e0e0"    overflow={"hidden"} height={"500"} className="">
      <HStack spacing={8} align="center">
        {/* Left Side */}
        <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center ">
        <Stack spacing={4} >
          <Heading as="h1" size="2xl">Access, Read, Practice & Engage
          with Digital Content (eBook) </Heading>
          <Text fontSize="lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta qui iure commodi dolores sed exercitationem non pariatur iusto nobis ex officia ullam hic, dolore fugit ipsum reprehenderit illo corporis itaque.
          </Text>
          <Button colorScheme="purple" size="lg">Read abeg More</Button>
        </Stack>
        </div>

        {/* Right Side */}
        <div className="h-1/2 xl:w-1/2 xl:h-full relative">
        <Box >
          <Image src="/pexels-accesss.png" alt="Books" 
          fill
         
                />
        </Box>
        </div>
      </HStack>
    </Box>

  );
};

export default Ebooks;