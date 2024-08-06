"use client";
import { useEffect, useState } from "react";
import { Box, Flex, Heading, Text, Image, Link } from "@chakra-ui/react";
import { fetchRedditPosts } from "@/lib/reddit";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const redditPosts = await fetchRedditPosts();
      setPosts(redditPosts.slice(0, 4));
    };
    getPosts();
  }, []);

  return (
    <Box p={4}>
      <Heading mb={6} textAlign="center">
        You read it? we already Reddit
      </Heading>
      <Flex wrap="wrap" justify="space-between">
        {posts.map((post, index) => (
          <Box
            key={index}
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            mb={4}
            width={{ base: "100%", md: "45%" }}
          >
            <Image src={post.thumbnail} alt={post.title} width="100%" height="250px" />
            <Box p={4}>
              <Heading fontSize="xl" mb={2}>
                {post.title}
              </Heading>
              <Text mb={4}>{post.selftext.length > 100 ? `${post.selftext.slice(0, 100)}...` : post.selftext}</Text>
              <Link href={`https://www.reddit.com${post.permalink}`} isExternal>
                Read full post
              </Link>
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Blog;
