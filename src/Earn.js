import React from "react";
import img from "./images/hero-23-img.jpg";

const Earn = () => {
  return (
    <div className="earn">
      <div className="earn-left">
        <h1>Earn money sharing what you know & create an online empire</h1>
        <p className="par">
          Become a Content Creator in Livepetal and transform your experience,
          knowledge and skill set into a thriving business that generates
          consistent cash flow for you even while you are away.
        </p>
        <p className="par">
          You definitely have something to sell online. You can offer video
          courses, virtual training, e-books or some set of development
          programmes. Join our Content Creator program to learn how to monitze
          your skills.
        </p>
        <button className="learn-btn">Learn More</button>
      </div>
      <div className="earn-right">
        <img src={img} className="earn-img" alt="" />
      </div>
    </div>
  );
};

export default Earn;
