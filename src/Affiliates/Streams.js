import React from "react";

const Streams = () => {
  return (
    <section
      id="content-1"
      className="content-1 wide-60 content-section division"
    >
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-7 col-lg-6 order-last order-md-2">
            <div
              className="txt-block left-column wow fadeInRight"
              style={{ visibility: "visible", animationName: "fadeInRight" }}
            >
              {/* TITLE */}
              <h2 className="h2-xs">Multiple earning streams, all for you</h2>
              <p className="p-lg">
                Some may focus on a particular income stream within the
                platform, with the power of automation you can engineer all
                major income streams to constantly generate massive cashflow for
                you
              </p>
              <h5 className="h5-lg m-o">Sales Bonuses</h5>
              <p className="p-lg">
                You earn a bonus on your personal sales and the sales of each
                member of your team{" "}
              </p>
              <h5 className="h5-lg">Referral Commissions</h5>
              <p className="p-lg">
                You earn from membership plan activation of your team
              </p>
              <h5 className="h5-lg m-0">Global Profits</h5>
              <p className="p-lg">
                You also earn commissions outside your team circle
              </p>
            </div>
          </div>
          <div className="col-md-5 col-lg-6 order-first order-md-2">
            <div
              className="rel img-block right-column wow fadeInLeft"
              style={{ visibility: "visible", animationName: "fadeInLeft" }}
            >
              <img className="img-fluid" src="images/img16.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Streams;
