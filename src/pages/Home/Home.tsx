import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";
import Advert from "../../components/Advert/Advert";
import "../Home/Home.scss";
import Brands from "../../components/Brands/Brands";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Brands/>
      <Main />
      <Advert/>
      <Footer />
    </div>
  );
};

export default Home;
