// pages/index.jsx

import { Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TopCategories from "./components/TopCategories";
import Ebooks from "./components/Ebooks";
import NewRelease from "./components/NewRelease";
import Blog from "./components/Blog";


const Home = () => {
  return (
    <div className="bg-custom-light-purple  color-custom2-deep-purple">
      <Navbar />
      <Header />
      <TopCategories />
      <Ebooks />
      <NewRelease />
      <Blog />
      {/* Other components and content */}
      
    </div>
  );
};

export default Home;
