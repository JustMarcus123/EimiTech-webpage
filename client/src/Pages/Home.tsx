import React from "react";
import Layout from "../Layout/Layout";

import Nav from "../Components/Nav";
import HeroSection from "../Components/HeroSection";


const Home: React.FC = () => {
  return (
    <div>
      <Layout>
        <Nav />
        <HeroSection />
      </Layout>
    </div>
  );
};

export default Home;
