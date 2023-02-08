import React from "react";

const Launch = () => {
  return (
    <section
      id="content-5"
      className="content-3 wide-60 content-section division"
    >
      <div className="container">
        <div className="content-5-wrapper bg-whitesmoke">
          <div className="row d-flex align-items-center">
            {/* TEXT BLOCK */}
            <div className="col-md-7 col-lg-6">
              <div
                className="txt-block left-column wow fadeInRight"
                style={{ visibility: "visible", animationName: "fadeInRight" }}
              >
                {/* SECTION ID */}
                <span className="section-id rounded-id bg-tra-purple purple-color txt-upcase">
                  Launching Soon
                </span>
                <h2 className="h2-xs">
                  Start building latest and future skills with Lentoria
                </h2>
                {/* List */}
                <ul className="simple-list">
                  <li className="list-item">
                    <p className="p-lg">
                      Lentoria offers you an opportunity to learn new skills on
                      the go at your own pace to become a highly paid
                      professional
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">
                      Join actively progressive skill empowerment programmes to
                      achieve your goals faster than you can imagine.
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">
                      Be a part of actively progressive communities across the
                      globe and scale easily
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            {/* END TEXT */}
            {/* IMAGE BLOCK */}
            <div className="col-md-5 col-lg-6">
              <div
                className="img-block right-column wow fadeInLeft"
                style={{ visibility: "visible", animationName: "fadeInLeft" }}
              >
                <img className="img-fluid" src="../images/img-10.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Launch;
