import React from "react";
import img from "./images/img-17.png";
import { useGlobalContext } from "./context";
import { ImBook } from "react-icons/ai";

const Section = () => {
  const data = useGlobalContext();
  console.log(data);
  return (
    <div className="section">
      <div className="section-left">
        <h1 className="unique">Your Prefered digital Market Place</h1>
        <li className="list">
          We power digital solutions that exactly meets your needs. Select from
          our catalogue of existing services or simply order a completely new
          development from scratch
        </li>
        <li className="list">
          Regardless of complexities, our technical team will help you turn your
          dream into a full blown project that you can launch to attract
          patronage from around the globe
        </li>
      </div>
      <div className="section-right">
        <img src={img} alt="" className="section-img" />
      </div>
    </div>
  );
};

export default Section;
