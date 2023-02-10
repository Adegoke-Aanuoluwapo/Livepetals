import React from "react";

const Stream = () => {
  return (
    <section
      id="content-7"
      className="content-7 wide-60 content-section division"
    >
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* TEXT BLOCK  */}
          <div className="col-md-6 order-last order-md-2">
            <div
              className="txt-block left-column wow fadeInLeft"
              style={{ visibility: "visible", animationName: "fadeInLeft" }}
            >
              {/* TEXT BOX */}
              <div className="txt-box mb-25">
                <h1 className="text-livepetals">Intuitive Dashboard</h1>
                <p className="p-lg">
                  You can manage everything in one place. From a single
                  dashboard you can monitor the performance of all the
                  operations in your account to get a comprehensive information
                  about how your results are generated.
                </p>
              </div>
              <div className="txt-box">
                <h5 className="h5-lg">Advanced Control and Privacy</h5>
                <ul className="simple-list">
                  <li className="simple-list">
                    <p className="">
                      Take full control of your account setup. Turn on/off any
                      operation or transaction at will to ensure your account is
                      fully secure at all times.{" "}
                    </p>
                  </li>
                  <li className="simple-list">
                    <p className="">
                      Monitor the earnings you generate from youur team's
                      transaction and decide when you want to cashout your
                      earnings to your personal bank account.{" "}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* IMAGEBLOCK */}
          <div className="col-md-6 order-first order-md-2">
            <div
              className="content-7-img wow fadeInRight"
              style={{ visibility: "visible", animationName: "fadeInRight" }}
            >
              <img className="img-fluid" src="images/img20.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stream;
