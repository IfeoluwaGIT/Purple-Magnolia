import { Flex, Box, Text, Heading, Image } from "@chakra-ui/react";

const NewRelease = () => {
  return (
    <Box border="2px" borderColor="#3f1c77" borderRadius="md" p={6} boxShadow="lg" >
      <Heading textAlign="center" mb={6}>New Releases</Heading>
      <Flex justify="space-between" gap={6} mb={4} flexWrap="wrap">
        {/* First Book */}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
          
          p={4}
          width={{ base: "100%", md: "30%" }}
          boxShadow="md"
        >
          <Image
            src="/book.png"
            alt="Dreams by Vision"
            mb={4}
            borderRadius="md"
            border="2px"
            borderColor="#3f1c77"
          />
          <Heading as="h3" fontSize="lg" mb={2}>
            Dreams by Vision
          </Heading>
          <Text>Paula Abak</Text>
          <Text>$10</Text>
        </Box>

        {/* Second Book */}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
        
          p={4}
          width={{ base: "100%", md: "30%" }}
          boxShadow="md"
        >
          <Image
            src="/book.png"
            alt="Dreams by Vision"
            mb={4}
            borderRadius="md"
            border="2px"
            borderColor="#3f1c77"
          />
          <Heading as="h3" fontSize="lg" mb={2}>
            Dreams by Vision
          </Heading>
          <Text>Paula Ofulue</Text>
          <Text>$10</Text>
        </Box>

        {/* Third Book */}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
         
          p={4}
          width={{ base: "100%", md: "30%" }}
          boxShadow="md"
        >
          <Image
            src="/book.png"
            alt="Dreams by Vision"
            mb={4}
            borderRadius="md"
            border="2px"
            borderColor="#3f1c77"
          />
          <Heading as="h3" fontSize="lg" mb={2}>
            Dreams by Vision
          </Heading>
          <Text>Paula Ofulue</Text>
          <Text>$10</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default NewRelease;
