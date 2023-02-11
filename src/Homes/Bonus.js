import React from "react";
import "../index.css";

const Bonus = () => {
  return (
    <section
      id="newsletter-2"
      className="pt-60 pb-60 newsletter-section division"
    >
      <div className="container">
        <div className="row d-flex align-items-center row-cols-1 row-cols-lg-2">
          {/* NEWSLETTER TEXT */}
          <div className="col">
            <div className="newsletter-txt pr-20">
              <h3 className="h3-xs">
                Bonus! Join community of Digital Marketers for free
              </h3>
              <p className="p-lg">
                Learn smart tricks for promoting anything online, generating
                leads, converting them and making massive sales with ease.
              </p>
            </div>
          </div>
          <div className="col" id="subscribe">
            <div className="input-group">
              <input
                id="semail"
                className="form-control"
                type="email"
                autoComplete="off"
                placeholder="Your email address"
                required=""
              />
              <span className="input-group-btn">
                <button
                  id="btncom"
                  className="btn btn-pink black-hover"
                  type="button"
                  onClick="joinCom()"
                >
                  Join Now
                </button>
              </span>
            </div>
            <label id="s-notification" for="semail"></label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bonus;
