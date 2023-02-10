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
      <hr className="divder" />
      <Fast />
      <Guarant />
    </div>
  );
};

export default Affiliate;
