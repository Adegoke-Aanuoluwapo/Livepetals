import React from "react";

const Team = () => {
  return (
    <section
      id="content-6"
      className="content-6 wide-60 content-section division"
    >
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-6 col-lg-6">
            <div
              className="txt-block left-column wow fadeInRight"
              style={{ visibility: "visible", animationName: "fadeInRight" }}
            >
              <div className="txt-box mb-30">
                <h2 className="h2-xs">
                  Team work makes it all simplified & fulfiling
                </h2>
                <p className="p-lg">
                  Understanding and engaging the power of networking and team
                  work can make the entire experience so energizing and
                  fulfilling. You work with other active team members to
                  generate corporate sales and share profits. You also share in
                  the strategies and trick of others in the platform and you can
                  eventually become a sales coach.
                </p>
              </div>
              {/* TEXT BOX */}
              <div className="txt-box">
                <h5 className="p-lg">It's all about working together</h5>
                <p className="p-lg">
                  You can generate more results when you synergize with other to
                  work towards the same goal. Livepetal Affiliate System will
                  teach you how to build quality sales team that is productive
                  and result oriented
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6">
            <div
              className="img-block right-column wow fadeInLeft"
              style={{ visibility: "visible", animationName: "fadeInLeft" }}
            >
              <img
                className="img-fluid"
                src="./images/img14.png"
                alt="content-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
