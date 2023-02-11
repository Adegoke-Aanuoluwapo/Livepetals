import React from "react";
import EarnPro from "./Affiliates/EarnPro";
import Petals from "./Affiliates/Petals";
import Navbar from "./Navbars/Navbar";
import Fast from "./Affiliates/Fast";
import Content from "./Affiliates/Content";
import Guarant from "./Affiliates/Guarant";
import Approach from "./Affiliates/Approach";
import Why from "./Affiliates/Why";
import Team from "./Affiliates/Team";
import Dashboard from "./Affiliates/Dashboard";
import Streams from "./Affiliates/Streams";
import SignUp from "./Affiliates/SignUp";
import "./index.css";
import Questions from "./Affiliates/Questions";

const Affiliate = () => {
  return (
    <div>
      <Navbar />
      <EarnPro />
      <Content />
      <hr className="divider" />
      <Approach />
      <Why />
      <Petals />
      <Team />
      <hr className="divider" />
      <Streams />
      <hr className="divider" />
      <Dashboard />
      <SignUp />
      <Questions />
      <Fast />
      <Guarant />
    </div>
  );
};

export default Affiliate;
