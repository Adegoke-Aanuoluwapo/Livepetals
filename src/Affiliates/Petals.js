import React from "react";

const Petals = () => {
  return (
    <section
      id="cta-10"
      className="bg-livepetal pt-50 pb-50 cta-section division"
      style={{ backgroundColor: "#036" }}
    >
      <div className="container white-color">
        <div className="cta-10-wrapper">
          <div className="row d-flex align-items-center">
            {/* CALL TO ACTION */}
            <div className="col-lg-4 col-xl-5">
              <div className="text-end">
                <div className="cta-10-img text-center">
                  <img className="img-fluid" src="./images/img10.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-xl-7">
              <div className="cta-10-txt">
                <h3 className="h3-md">
                  Get started with Livepetal Affiliate System with ease!
                </h3>
                <p className="p-lg">
                  Start now and discover the power of automating your sales
                  strategy and keep all the money flowing in with ease and
                  steady peace of mind
                </p>
                <a className="btn btn-outline" href="#get-started">
                  Get started Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Petals;
