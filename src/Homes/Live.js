import React from "react";
import {
  FaInstagram,
  FaFacebookSquare,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Live = () => {
  return (
    <div className="live">
      <div className="petal">
        <h1>Livepetal</h1>
        <p>
          Livepetal is a digital marketplace that connect customers, promoters
          and creators in a single platform
        </p>
      </div>
      <div className="about">
        <h2>About</h2>
        <ul>
          <li className="live-link">
            <a>Affiliate</a>
          </li>
          <li className="live-link">
            <a>Creators</a>
          </li>
          <li className="live-link">
            <a>Digital Marketing</a>
          </li>
        </ul>
      </div>
      <div className="discover">
        <h2>Discover</h2>
        <ul>
          <li className="live-link">
            <a>Our Blog</a>
          </li>
          <li className="live-link">
            <a>Resource Center</a>
          </li>
          <li className="live-link">
            <a>Communities</a>
          </li>
        </ul>
      </div>
      <div className="support">
        <h2>Support</h2>
        <ul>
          <li className="live-link">
            <a>FAQS</a>
          </li>
          <li className="live-link">
            <a>Contact Us</a>
          </li>
          <li className="live-link">
            <a>Chat with Us</a>
          </li>
        </ul>
      </div>
      <div className="connect">
        <h2>Connect With Us</h2>
        <ul className="connect-link">
          <li className="live-link linked">
            <a>
              <FaFacebookSquare />
            </a>
          </li>
          <li className="live-link linked">
            <a>
              <FaTwitter />
            </a>
          </li>
          <li className="live-link linked">
            <a>
              <FaLinkedinIn />
            </a>
          </li>
          <li className="live-link linked">
            <a>
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Live;
