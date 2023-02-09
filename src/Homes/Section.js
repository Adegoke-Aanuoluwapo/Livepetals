import React from "react";

import { useGlobalContext } from "./context";
import { ImBook } from "react-icons/ai";

const Section = () => {
  const data = useGlobalContext();
  return (
    <section
      id="hero-4"
      className="bg-scroll hero-section division"
      style={{ backgroundColor: "#036" }}
    >
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-6">
            <div className="hero-4-txt white-color">
              <h2 className="h2-lg">Your Prefered digital Market Place</h2>
              <ul className="simple-list">
                <li className="list-item">
                  <p>
                    We power digital solutions that exactly meets your needs.
                    Select from our catalogue of existing services or simply
                    order a completely new development from scratch
                  </p>
                </li>
                <li className="list-item">
                  <p className="p-xl">
                    Regardless of complexities, our technical team will help you
                    turn your dream into a full blown project that you can
                    launch to attract patronage from around the globe
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-5 col-lg-6">
            <div
              className="hero-1-img wow fadeInLeft"
              style={{ visibility: "visible", AnimationName: "fadeInLeft" }}
            >
              <img
                className="img-fluid"
                src="../images/img-edit.png"
                alt="hero-image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="wave-shape-bottom">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,192L120,197.3C240,203,480,213,720,197.3C960,181,1200,139,1320,117.3L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>

    // <div className="section ">
    //   <div className="col-md-6">

    //   </div>
    //       <div className="section-right">
    //         <img src="../images/img-17.png" alt="" className="section-img" />
    //       </div>
    //     </div>
    //   );
    // };
  );
};

export default Section;
