import React from "react";
import "../index.css";

const Earn = () => {
  return (
    <section
      id="cta-10"
      className="bg-livepetal pt-50 cta-section division"
      style={{ backgroundColor: "#036" }}
    >
      <div className="container white-color">
        <div className="cta-10-wrapper">
          <div className="row d-flex align-items-center">
            <div className="col-lg-8 col-xl-7">
              <div className="cta-10-txt">
                <h3 className="h3-md">
                  Earn money sharing what you know & create an online empire
                </h3>
                <p className="p-lg">
                  Become a Content Creator in Livepetal and transform your
                  experience, knowledge and skill set into a thriving business
                  that generates consistent cash flow for you even while you are
                  away.
                </p>
                <p className="p-lg">
                  You definitely have something to sell online. You can offer
                  video courses, virtual training, e-books or some set of
                  development programmes. Join our Content Creator program to
                  learn how to monitze your skills.
                </p>
                <a className="btn btn-outline" href="creators.php">
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-xl-5">
              <div className="text-end">
                <div className="cta-10-img text-center">
                  <img
                    className="img-fluid"
                    src="../images/img-25.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="community"></div>
    </section>
  );
};

export default Earn;
