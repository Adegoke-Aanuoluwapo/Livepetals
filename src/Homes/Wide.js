import React from "react";

const Wide = () => {
  return (
    <section className="content-3 wide-60 content-section division">
      <div className="container">
        <div className="bottom-row">
          <div className="row d-flex align-items-center">
            {/* TEXT BLOCK */}
            <div className="col-md-7 col-lg-6 order-last order-md-2">
              <div
                className="txt-block left-column wow fadeInRight"
                style={{ visibility: "visible", animationName: "fadeInRight" }}
              >
                <div className="txt-box mb-20">
                  <h2 className="h2-xs">
                    A wide variety of reliable solutions
                  </h2>
                  <p className="p-lg">
                    What every the project concept is, we have a competent team
                    to handle it and deliver excellent solution that provide
                    long term satisfaction
                  </p>
                  <h5 className="h5-lg">
                    Whether you’re stuck or just want some tips on where to
                    start, get in touch with our experts anytime.
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-lg-6 order-first order-md-2">
              <div
                className="img-block right-column wow fadeInLeft"
                style={{ visibility: "visible", animationName: "fadeInLeft" }}
              >
                <img
                  className="img-fluid"
                  src="../images/img9.png"
                  alt="content-images"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className className="wide">
        <div className="wide-left">
          <h1></h1>
          <p></p>
          <p></p>
        </div>
        <div className="wide-right">
          <img src="../images/img-11.png" alt="wide" className="wide-img" />
        </div>
      </div>
    </section>
  );
};

export default Wide;
