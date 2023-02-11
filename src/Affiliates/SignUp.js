import React from "react";

const SignUp = () => {
  return (
    <section
      id="content-2"
      className="content-2 wide-60 content-section division bg-livepetal"
      style={{ backgroundColor: "#036" }}
    >
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* IMAGE BLOCK */}
          <div className="col-md-5 col-lg-6">
            <div
              className="rel img-block left-column wow fadeInRight"
              style={{ visibility: "visible", animationName: "fadeInRight" }}
            >
              <img
                className="img-fluid"
                src="./images/img6.png"
                alt="content-image"
              />
            </div>
          </div>
          {/* TEXT BLOCK */}
          <div id="get-started" className="col-md-7 col-lg-6">
            <div id="hero-4-form">
              <form
                id="1"
                className="row request-form"
                name="requestformx"
                style={{ display: "block" }}
                novalidate="novalidate"
              >
                <h4 className="h4-xs">
                  Sign Up to become an Affiliate and start automating multiple
                  earnings streams instantly
                </h4>
                <p className="p-lg">
                  Simple steps to start taking control of your cashflow
                  <br />
                  <span id="res0" className="text-danger"></span>
                </p>
                <div className="col-md-12">
                  <input
                    className="form-control name x1"
                    type="text"
                    name="name"
                    placeholder="Enter Your Firstname*"
                    autoComplete="off"
                    required=""
                  />
                </div>
                <div className="col-md-12">
                  <input
                    className="form-control name x1"
                    type="text"
                    name="name"
                    placeholder="Enter Your Lastname*"
                    autoComplete="off"
                    required=""
                  />
                </div>
                <div className="col-md-12">
                  <input
                    className="form-control email x1"
                    type="email"
                    name="email"
                    onkeyup="$('#btn1').text('Sign Up')"
                    placeholder="Enter Your Email*"
                    autoComplete="off"
                    required=""
                  />
                </div>
                {/* FORM BUTTON */}
                <div className="col-md-12 form-btn mt-10">
                  <button
                    id="btn1"
                    className="btn btn-md btn-pink tra-grey-hover"
                    type="submit"
                    onClick="startSignup(1)"
                  >
                    Sign up
                  </button>
                  <p className="m-0 mt-5">
                    <br />
                    By clicking “Sign up”, you agree to our Terms & Conditions
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
