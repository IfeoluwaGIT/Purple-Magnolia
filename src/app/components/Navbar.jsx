"use client"
// components/Navbar.jsx
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { BsCart4 } from "react-icons/bs";
import { Box, HStack, Icon, Image, Input, Link, Stack } from "@chakra-ui/react";
import { FaPhone } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdAccountCircle, MdShoppingCart, MdFavorite } from "react-icons/md";

const Navbar = () => {
  return (
    <Box as="nav"  color={"#3f1c77"} p={4}>
      <Stack spacing={4}>
        {/* Box 1 */}
        <HStack bg={"#e0e0e0"} color={"#3f1c77"} justify="space-between" >
          <HStack >
          <FaPhone />
            <Box >+123456789</Box>
          </HStack>
          <HStack spacing={4}>
            <FaFacebook />
            <TiSocialTwitter />
            <TiSocialInstagram />
          </HStack>
        </HStack>

        {/* Box 2 */}
        <HStack justify="space-between">
          <Image src="https://images.pexels.com/photos/6157226/pexels-photo-6157226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
           alt="Bookstore Logo" 
           boxSize="100px" />
          <Input placeholder="Search for books..." w="40%" />
          <HStack spacing={4}>
            <MdAccountCircle /> <Box>Account</Box>
            <BsCart4 /> <Box>Cart</Box>
            <MdFavorite /> <Box>Wishlist</Box>
          </HStack>
        </HStack>

        {/* Box 3 */}
        <HStack spacing={8} justify="center">
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
