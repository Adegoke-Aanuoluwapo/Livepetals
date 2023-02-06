import React from "react";
import img from "../images/register.png";

const Build = () => {
  return (
    <div className="build">
      <div className="build-left">
        <h1>Let's Help You Build From Ground Up</h1>
        <p>
          Simply let us know what your project is all about and tell us what you
          want to achieve on the long run and watch our expert deliver according
          to detailed specification.
        </p>
        <p>
          we’re technology experts and leaders that bring energy, passion, and
          knowledge to every project.
        </p>
      </div>
      <div className="build-right">
        <img src={img} className="right-img" alt="build" />
      </div>
    </div>
  );
};

export default Build;
