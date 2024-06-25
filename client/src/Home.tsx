import React from "react";
import Layout from "./Layout/Layout";
import ComingSoon from "./Pages/ComingSoon";


const Home: React.FC = () => {
  return (
    <div>
      <Layout>
        <ComingSoon />
      </Layout>
    </div>
  );
};

export default Home;
