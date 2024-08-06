// services/reddit.js
export const fetchRedditPosts = async () => {
    try {
      const response = await fetch('https://www.reddit.com/r/bookshelf.json');
      const data = await response.json();
      return data.data.children.map(post => post.data);
    } catch (error) {
      console.error("Error fetching Reddit posts:", error);
      return [];
    }
  };
  