import React from "react";

const Build = () => {
  return (
    <section
      id="content-3"
      className="content-3 wide-60 content-section division"
    >
      <div className="container">
        <div className="bottom-row">
          <div className="row d-flex align-items-center">
            {/* TEXT BLOCK */}
            <div className="col-md-7 col-lg-6 order-last order-md-2">
              <div
                className="txt-block left-column wow fadeInRight"
                style={{ visibility: "visible", animationName: "fadeInRight" }}
              >
                <div className="txt-box mb-2">
                  <h1 className="h2-xs">Let's Help You Build From Ground Up</h1>
                  <p className="p-lg">
                    Simply let us know what your project is all about and tell
                    us what you want to achieve on the long run and watch our
                    expert deliver according to detailed specification.
                  </p>
                  <h5 className="h5-lg">
                    we’re technology experts and leaders that bring energy,
                    passion, and knowledge to every project.
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md col-lg-6 order-first order-md-2">
              <div
                className="img-block right-column wow fadeInLeft"
                style={{ visibility: "visible", animationName: "fadeInLeft" }}
              >
                <img
                  className="img-fluid"
                  src="../images/hero-22-img.png"
                  alt="content-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Build;
