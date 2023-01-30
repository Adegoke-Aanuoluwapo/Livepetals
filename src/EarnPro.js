import React from "react";
import img from "./images/img-04.png";

const EarnPro = () => {
  return (
    <div className="earn">
      <div className="earn-left">
        <h1 className="unique">
          Earn money promoting quality digital solutions
        </h1>
        <ul>
          <li>
            Leaverage the power of sales automation to generate leads and
            convert them to active customers and get your wallet funded with
            profits while you are practically away.
          </li>
          <li>
            Effortlessly build active and dynamic sales team across the globe to
            activate the power corporate sales and daily profit sharing
          </li>
        </ul>
      </div>
      <div className="earn-right">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default EarnPro;
