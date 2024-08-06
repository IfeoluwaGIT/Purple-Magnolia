import { Box, Flex, Text, Heading, Image, IconButton, Link } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="#A8A8A8" py={8}>
      <Flex justify="space-around" wrap="wrap" px={4}>
        {/* First Section: Logo, Text, Social Media, Rights Reserved */}
        <Box flexBasis={{ base: "100%", md: "30%" }} textAlign={{ base: "center", md: "left" }} mb={{ base: 4, md: 0 }}>
          <Image src="/beji.jpg" alt="Logo" width="50px" height="50px" mb={4} mx="auto" />
          <Text mb={2}>A brief description or tagline about the bookstore, expressing its mission or vision.</Text>
          <Flex justify={{ base: "center", md: "flex-start" }} mb={2}>
            <IconButton as="a" href="#" aria-label="Facebook" icon={<FaFacebook />} bg="transparent" _hover={{ bg: "gray.700" }} mr={2} />
            <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} bg="transparent" _hover={{ bg: "gray.700" }} mr={2} />
            <IconButton as="a" href="#" aria-label="Instagram" icon={<FaInstagram />} bg="transparent" _hover={{ bg: "gray.700" }} />
          </Flex>
          <Text fontSize="sm">© 2024 Bookstore. All rights reserved.</Text>
        </Box>

        {/* Second Section: Navigation Links */}
        <Box flexBasis={{ base: "100%", md: "30%" }} textAlign="center" mb={{ base: 4, md: 0 }}>
          <Heading as="h3" fontSize="lg" mb={4}>
            Navigation
          </Heading>
          <Flex direction="column">
            <Link href="#" mb={2}>
              Home
            </Link>
            <Link href="#" mb={2}>
              About Us
            </Link>
            <Link href="#" mb={2}>
              New Releases
            </Link>
            <Link href="#" mb={2}>
              Contact Us
            </Link>
            <Link href="#">Blog</Link>
          </Flex>
        </Box>

        {/* Third Section: Latest News */}
        <Box flexBasis={{ base: "100%", md: "30%" }} textAlign="left">
          <Heading as="h3" fontSize="lg" mb={4}>
            Latest News
          </Heading>
          <Flex align="center">
            <Image
              src="https://images.pexels.com/photos/11288706/pexels-photo-11288706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Latest News"
              boxSize="100px"
              mr={4}
            />
            <Text>
              A brief headline or summary of the latest news. This could be about a new book release, an event, or an announcement.
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
