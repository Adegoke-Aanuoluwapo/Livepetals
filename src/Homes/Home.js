import React from "react";
import Navbar from "../Navbars/Navbar";
import Section from "./Section";
import Sidebar from "./Sidebar";
import Business from "./Business";
import Build from "./Build";
import Launch from "./Launch";
import Wide from "./Wide";
import Digit from "./Digit";
import Trend from "./Trend";
import Earn from "./Earn";
import Bonus from "./Bonus";
import Live from "./Live";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      {/* <Sidebar /> */}
      <Section />
      <hr className="divider" />
      <Business />
      <hr />
      <Build />
      <Launch />
      <Wide />
      <Digit />
      <Trend />
      <Earn />
      <Bonus />
      <hr />
      <Live />
      <hr />
      <Footer />
    </div>
  );
};

export default Home;
