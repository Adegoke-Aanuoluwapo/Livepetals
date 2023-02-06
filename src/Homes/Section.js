import React from "react";

import { useGlobalContext } from "./context";
import { ImBook } from "react-icons/ai";

const Section = () => {
  const data = useGlobalContext();
  return (
    <section className="bg-scroll hero-section division">
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
        </div>
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
