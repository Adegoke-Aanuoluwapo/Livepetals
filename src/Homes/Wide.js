import React from "react";
import img from "../images/img-11.png";
const Wide = () => {
  return (
    <div className className="wide">
      <div className="wide-left">
        <h1>A wide variety of reliable solutions</h1>
        <p>
          What every the project concept is, we have a competent team to handle
          it and deliver excellent solution that provide long term satisfaction
        </p>
        <p>
          Whether you’re stuck or just want some tips on where to start, get in
          touch with our experts anytime.
        </p>
      </div>
      <div className="wide-right">
        <img src={img} alt="wide" className="wide-img" />
      </div>
    </div>
  );
};

export default Wide;
