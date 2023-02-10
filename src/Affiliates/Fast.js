import React from "react";

const Fast = () => {
  return (
    <section
      id="content-3"
      className="content-3 wide-60 content-section division"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="section-title title-01 mb-70 mt-70">
              <h1>Livepetals for every businesses</h1>
              <p className="p-lg">
                Scalling your business is the most critical part to generating
                maximum profitability. Let's help you to automate for success
              </p>
            </div>
          </div>
        </div>
        <div className="fbox-8-wrapper text-center">
          <div className="row row-cols-1 row-cols-md-3">
            <div className="col">
              <div
                className="fbox-8 mb-40 wow fadeInUp"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="fbox-img pb-0 mb-0 bg-whitesmoke-gradient">
                  <div className="ico-65">
                    <span className="flaticon-book"></span>
                  </div>
                </div>
                <h5 className="h5-md">Post A Project</h5>
                <p className="p-lg">
                  You can post a project by giving us a brief information about
                  what you need done
                </p>
              </div>
            </div>
            <div className="col">
              <div
                className="fbox-8 mb-40 wow fadeInUp"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="fbox-img pb-0 mb-0 bg-whitesmoke-gradient">
                  <div className="ico-65">
                    <span className="flaticon-analytics"></span>
                  </div>
                </div>
                <h5 className="h5-md">Choose Your Options</h5>
                <p className="p-lg">
                  Choose between different options best suits your need and set
                  a realistic budget
                </p>
              </div>
            </div>
            <div className="col">
              <div
                className="fbox-8 mb-40 wow fadeInUp"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="fbox-img pb-0 mb-0 bg-whitesmoke-gradient">
                  <div className="ico-65">
                    <span className="flaticon-dollar">
                      {/* <img src="../images/dollar.jpg" alt="dollar" /> */}
                    </span>
                  </div>
                </div>
                <h5 className="h5-md">Launch Globally</h5>
                <p className="p-lg">
                  Let's help you launch your project for global patronage &
                  maximum profitability
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fast;
