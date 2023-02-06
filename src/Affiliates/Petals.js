import React from "react";
import img0 from "../images/img18.png";
import img1 from "../images/img-23.png";
import img2 from "../images/img-24.png";

const Petals = () => {
  return (
    <div className="petals">
      <div className="petal-up">
        <h2>
          Become a Livepetal Affiliate and take control of unlimited casflow
          streams
        </h2>
        <p>
          A smart approach to mastering the art of selling anything online with
          ease and keep huge profit flowing in constantly
        </p>
      </div>
      <div className="petals-down">
        <div className="first">
          <img src={img0} alt="" className="petal-img" />
          <h2>Extremely Simplified</h2>
          <p>
            You don't need to be a professional, Livepetal gives you all the
            guide you need to start building your online business empire right
            away
          </p>
        </div>
        <div className="second">
          <img src={img1} alt="" className="petal-img" />
          <h2>Control your Options</h2>
          <p>
            You can take full control of your options to determine where you
            want your main cashflow to come from and how you want to manage them
          </p>
        </div>
        <div className="third">
          <img src={img2} alt="" className="petal-img" />
          <h2>Active automation</h2>
          <p>
            By automation your online marketing campeign you are able to
            generate massive transactions even while you are not actively
            working
          </p>
        </div>
      </div>
    </div>
  );
};

export default Petals;
