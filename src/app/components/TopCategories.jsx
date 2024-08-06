import { Flex, Box, Text, Heading, Button, Image } from "@chakra-ui/react";

const TopCategories = () => {
  return (
    <Box border="1px solid" borderColor="gray.300" borderRadius="md" p={6} mx={{ base: 4, md: 10 }} my={6} bg="white">
      <Flex justify="space-between" align="center" mb={6} flexDirection={{ base: "column", md: "row" }} textAlign={{ base: "center", md: "left" }}>
        <Flex direction="column" mb={{ base: 4, md: 0 }}>
          <Text fontSize={{ base: "sm", md: "md" }}>---- Categories</Text>
          <Heading fontSize={{ base: "xl", md: "2xl" }} color="#204484">
            Explore our Top Categories
          </Heading>
        </Flex>

        <Text fontSize={{ base: "sm", md: "md" }} maxW={{ base: "100%", md: "60%" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam earum animi ipsum culpa repudiandae. 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam earum animi ipsum culpa repudiandae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam earum animi ipsum culpa repudiandae. 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam earum animi ipsum culpa repudiandae.
        </Text>
      </Flex>

      <Flex justify="space-between" flexWrap="wrap" gap={6}>
        <Box textAlign="center" width={{ base: "100%", md: "30%" }}>
          <Image
            src="https://images.pexels.com/photos/8922322/pexels-photo-8922322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Category 1"
            mb={4}
            border="2px"
            borderColor="#3f1c77"
            borderRadius="md"
          />
          <Heading as="h3" fontSize="lg" mb={2}>
            Category 1
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quia impedit tenetur libero, esse explicabo illo ullam suscipit minima blanditiis pariatur ut exercitationem debitis nostrum eum dolor aliquid! Pariatur, numquam.
          </Text>
        </Box>

        <Box textAlign="center" width={{ base: "100%", md: "30%" }}>
          <Image
            src="https://images.pexels.com/photos/5088182/pexels-photo-5088182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Category 2"
            mb={4}
            border="2px"
            borderColor="#3f1c77"
            borderRadius="md"
          />
          <Heading as="h3" fontSize="lg" mb={2}>
            Category 2
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt voluptates minus numquam nulla molestiae, obcaecati quam asperiores aspernatur consequuntur. Sed neque harum voluptatem voluptate dignissimos numquam possimus dolorum asperiores officia?
          </Text>
        </Box>

        <Box textAlign="center" width={{ base: "100%", md: "30%" }}>
          <Image
            src="https://images.pexels.com/photos/8466766/pexels-photo-8466766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Category 3"
            mb={4}
            border="2px"
            borderColor="#3f1c77"
            borderRadius="md"
          />
          <Heading as="h3" fontSize="lg" mb={2}>
            Category 3
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quo velit quidem cupiditate modi veniam excepturi enim eligendi veritatis! Vero illum iusto odit autem modi adipisci tempore quibusdam doloribus officiis?
          </Text>
        </Box>
      </Flex>

      <Flex justify="center" mt={4}>
        <Button colorScheme="purple" variant="outline">
          View More
        </Button>
      </Flex>
    </Box>
  );
};

export default TopCategories;
