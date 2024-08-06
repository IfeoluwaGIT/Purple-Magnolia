// pages/blogs.js
import { useEffect, useState } from 'react';
import { Box, Flex, Heading, Text, Image, Link } from '@chakra-ui/react';
import { fetchRedditPosts } from '@/lib/reddit';


const MoreBlogs = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const redditPosts = await fetchRedditPosts();
      setPosts(redditPosts);
    };
    getPosts();
  }, []);

  return (
    <Box p={4}>
      <Heading mb={6}>More on Children's Books</Heading>
      <Flex wrap="wrap" justify="space-between">
        {posts.map((post, index) => (
          <Box key={index} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" mb={4}>
            <Image src={post.thumbnail} alt={post.title} />
            <Box p={4}>
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
    </Box>
  );
};

export default MoreBlogs;
