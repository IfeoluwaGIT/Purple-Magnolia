// components/Navbar.jsx
import { Box, HStack, Image, Input, Link, Stack, Text } from "@chakra-ui/react";
import { FaPhone, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdAccountCircle, MdShoppingCart, MdFavorite } from "react-icons/md";

const Navbar = () => {
  return (
    <Box as="nav" color="#3f1c77" p={4} bg="white">
      <Stack spacing={4}>
        {/* Box 1 */}
        <HStack bg="#e0e0e0" color="#3f1c77" justify="space-between" p={2} border="2px" borderColor="#3f1c77">
          <HStack spacing={2}>
            <FaPhone />
            <Text fontSize={{ base: "sm", md: "md" }}>+123456789</Text>
          </HStack>
          <HStack spacing={4}>
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
          </HStack>
        </HStack>

        {/* Box 2 */}
        <HStack justify="space-between" p={2} alignItems="center">
          <Image src="https://images.pexels.com/photos/6157226/pexels-photo-6157226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Bookstore Logo" boxSize={{ base: "50px", md: "100px" }} />
          <Input placeholder="Search for books..." w={{ base: "60%", md: "40%" }} />
          <HStack spacing={4} display={{ base: "none", md: "flex" }}>
            <MdAccountCircle /> <Text>Account</Text>
            <MdShoppingCart /> <Text>Cart</Text>
            <MdFavorite /> <Text>Wishlist</Text>
          </HStack>
        </HStack>

        {/* Box 3 */}
        <HStack spacing={4} justify="center" flexWrap="wrap" fontSize={{ base: "sm", md: "md" }}>
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/new-release">New Release</Link>
          <Link href="/contact-us">Contact Us</Link>
          <Link href="/blog">Blog</Link>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Navbar;
