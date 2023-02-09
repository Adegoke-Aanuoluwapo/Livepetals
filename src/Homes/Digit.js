import React from "react";

const Digit = () => {
  return (
    <section
      id="content-2"
      className="content-2 bg-livepetal wide-60 content-section division"
      style={{ backgroundColor: "#036" }}
    >
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-5 col-lg-6">
            <div
              className="rel img-block left-column wow fadeInRight"
              style={{ visibility: "visible", animationName: "fadeInRight" }}
            >
              <img
                className="img-fluid"
                src="../images/img2.png"
                alt="content-image"
              />
            </div>
          </div>
          <div className="col-md-7 col-lg-6">
            <div
              className="txt-block right-column white-color wow fadeInLeft"
              style={{ visibility: "visible", animationName: "fadeInLeft" }}
            >
              <h2 className="h2-xs">
                Become Livepetal Affiliate and earn money promoting digital
                solutions
              </h2>
              <ul className="simple-list">
                <li className="list-item">
                  <p className="p-lg">
                    Learn how to master the art of selling anything online to
                    generate massive cashflow
                  </p>
                </li>
                <li className="list-item">
                  <p className="p-lg">
                    Understand the power of automating sales to trigger constant
                    cashflow even while you are away
                  </p>
                </li>
              </ul>
              <a className="btn btn-outline" href="affiliate.php">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Digit;
