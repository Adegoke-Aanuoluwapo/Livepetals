import React from "react";

const Approach = () => {
  return (
    <section
      id="content-3"
      className="content-3 wide-60 content-section division"
    >
      <div className="container">
        <div className="top-row pb-50">
          <div className="row d-flex align-items-center">
            <div className="col-md-5 col-lg-6">
              <div
                className="img-block left-column wow fadeInRight"
                style={{ visibility: "visible", animationName: "fadeInRight" }}
              >
                <img className="img-fluid" src="images/img8.png" alt="" />
              </div>
            </div>
            <div className="col-md-7 col-lg-6">
              <div
                className="txt-block right-column wow fadeInLeft"
                style={{ visibility: "visible", animationName: "fadeInLeft" }}
              >
                <h2 className="h2-xs">
                  Very fast approach to becoming an online sales giant
                </h2>
                <ul className="simple-list">
                  <li className="list-item">
                    <p className="p-lg">
                      Get trained by industry leaders to master current
                      strategies for generating massive online sales and
                      patronage
                    </p>
                  </li>
                  <li className="">
                    <p className="p-lg">
                      Get free mentorship and follow proving techniques to scale
                      up with speed like the pros
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">
                      Take advantage on available sales tools to practically
                      automate your sales engine and remove the lid from your
                      sales efforts
                    </p>
                  </li>
                </ul>
                <a className="btn btn-outline" href="#get-start">
                  Get Started Now
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* END APPROACH */}
        {/* START COMMISSION */}
        <div className="bottom-row">
          <div className="row d-flex align-items-center">
            <div className="col-md-7 col-lg-6 order-last order-md-2">
              <div
                className="txt-block left-column wow fadeInRight"
                style={{ visibility: "visible", animationName: "fadeInRight" }}
              >
                <div className="txt-box mb-20">
                  <h2 className="h2-xs">
                    Guaranteed bonuses & sales commissions
                  </h2>
                  {/* Text */}
                  <p className="p-lg">
                    How would you feel when you get paid each time someone else
                    pays for an item online just because you promoted the item
                    and nothing more. You keep receiving payments for each
                    transaction performed within your team. You also receive
                    global progits for transactions performed outside your team.
                  </p>
                </div>
                <div className="txt-box">
                  <h5 className="h5-lg">Multiple simulteneous cashflow</h5>
                  <ul className="simple-list">
                    <li className="list-item">
                      <p className="p-lg">
                        Your sales promotions remain valid over time and
                        continues to generate sales and patronage for you making
                        it possible for you to earn consistently from each sales
                        promotion you engage
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                        You can earn from all the items you promote at the same
                        time and from the promotion of each member of your team
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                        All your sales commissions and bonuses are instantly
                        paid to your wallet and you can withdraw anytime
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* IMAGE BLOCK */}
            <div className="col-md-5 col-lg-6 order-first order-md-2">
              <div
                className="img-block right-column wow fadeInLeft"
                style={{ visibility: "visible", animationName: "fadeInLeft" }}
              >
                <img className="img-fluid" src="./images/img12.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END CONTAINER */}
    </section>
  );
};

export default Approach;
