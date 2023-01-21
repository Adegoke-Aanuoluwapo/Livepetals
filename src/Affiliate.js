import React from "react";
import img from "./images/hero-5-img.png";

const Affiliate = () => {
  return (
    <div className="Affiliate">
      <div className="Affiliate-left">
        <img src={img} className="Affiliate-img" />
      </div>
      <div className="Affiliate-right">
        <h1>
          Become Livepetal Affiliate and earn money promoting digital solutions
        </h1>
        <ul>
          <li>
            Learn how to master the art of selling anything online to generate
            massive cashflow
          </li>
          <li>
            Understand the power of automating sales to trigger constant
            cashflow even while you are away
          </li>
        </ul>
        <button className="btn">Learn More</button>
      </div>
    </div>
  );
};

export default Affiliate;
