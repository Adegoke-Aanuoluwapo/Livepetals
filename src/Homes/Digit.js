import React from "react";

const Digit = () => {
  return (
    <section id="content-2" className="content-2 bg-livepetal wide">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-5 col-lg-6">
            <div
              className="rel img-block left-column wow fadeInRight"
              style={{ visibility: "visible", animationName: "fadeInRight" }}
            >
              <img src="../images/img2.png" alt="content-image" />
            </div>
          </div>
          <div className="col-md-7 col-lg-6">
            <div
              className="txt-block right-column white-column wow fadeInLeft"
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
                    generate massive cashflow{" "}
                  </p>
                </li>
                <li className="list-item">
                  <p className="p-lg"> </p>
                  <p className="p-lg">
                    Understand the power of automating sales to trigger constant
                    cashflow even while you are away{" "}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="Affiliate">
        <div className="Affiliate-left">
          <img src="../images/hero-5-img.png" className="Affiliate-img" />
        </div>
        <div className="Affiliate-right">
          <h1 className="unique">
            Become Livepetal Affiliate and earn money promoting digital
            solutions
          </h1>
          <ul>
            <li className="list"></li>
            <li className="list">
              Understand the power of automating sales to trigger constant
              cashflow even while you are away
            </li>
          </ul>
          <button className="btn">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Digit;
