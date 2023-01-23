import React from "react";

const Bonus = () => {
  return (
    <div className="bonus">
      <div className="bonus-left">
        <h1>Bonus! Join community of Digital Marketers for free</h1>
        <p className="bopar">
          Learn smart tricks for promoting anything online, generating leads,
          converting them and making massive sales with ease.
        </p>
      </div>
      <div className="bonus-right">
        <input
          type="text"
          placeholder="Your email address"
          className="input"
        ></input>
        <button className="bon-button">Join now</button>
      </div>
    </div>
  );
};

export default Bonus;
