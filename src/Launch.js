import React from "react";
import img from "./images/img-10.png";
const Launch = () => {
  return (
    <div className="launch">
      <div className="launch-left">
        <p className="launch-par">LAUCHING SOON</p>
        <h1 className="launch-head">
          Start building latest and future skills with Lentoria
        </h1>
        <ul>
          <li>
            Lentoria offers you an opportunity to learn new skills on the go at
            your own pace to become a highly paid professional
          </li>
          <li>
            Join actively progressive skill empowerment programmes to achieve
            your goals faster than you can imagine.
          </li>
          <li>
            Be a part of actively progressive communities across the globe and
            scale easily
          </li>
        </ul>
      </div>
      <div className="launch-right">
        <img src={img} alt="launch" className="launch-image" />
      </div>
    </div>
  );
};

export default Launch;
