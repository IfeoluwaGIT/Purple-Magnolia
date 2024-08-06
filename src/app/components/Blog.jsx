// components/Blog.js
"use client"
import { useEffect, useState } from 'react';
import { Box, Flex, Heading, Text, Image, Button, Link } from '@chakra-ui/react';
//import { useRouter } from 'next/router';
import { fetchRedditPosts } from '@/lib/reddit';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  //const router = useRouter();

  useEffect(() => {
    const getPosts = async () => {
      const redditPosts = await fetchRedditPosts();
      setPosts(redditPosts.slice(0, 4)); // Display first 4 posts
    };
    getPosts();
  }, []);

  const handleReadMore = () => {
    // router.push('/moreblogs');
  };

  return (
    <Box p={4}>
      <Heading mb={6} textAlign={"center"}>You read it? we already Reddit</Heading>
      <Flex wrap="wrap" justify="space-between">
        {posts.map((post, index) => (
          <Box key={index} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" mb={4}>
            <Image src={post.thumbnail} alt={post.title} width={250} height={250} align={"center"} />
            <Box p={4} >
              <Heading fontSize="xl" mb={2}>{post.title}</Heading>
              <Text mb={4}>
                {post.selftext.length > 100 ? `${post.selftext.slice(0, 100)}...` : post.selftext}
              </Text>
              <Link href={`https://www.reddit.com${post.permalink}`} isExternal>
                Read full post
              </Link>
            </Box>
          </Box>
        ))}
      </Flex>
      <Flex justify="center" mt={8}>
        {/* <Button onClick={handleReadMore} colorScheme="teal">
          Read More
        </Button> */}
      </Flex>
    </Box>
  );
};

export default Blog;
