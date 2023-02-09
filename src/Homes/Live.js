import React from "react";
import {
  FaInstagram,
  FaFacebookSquare,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Live = () => {
  return (
    <footer className="footer division" id="footer-4">
      <div className="container">
        {/* FOOTER CONENT */}
        <div className="row">
          {/* FOOTER INFO */}
          <div className="col-lg-3">
            <div className="footer-info mb-10">
              <h2>Livepetal</h2>
              <p className="p-lg">
                Livepetal is a digital marketplace that connect customers,
                promoters and creators in a single platform
              </p>
            </div>
            <div className="col-sm-6 col-md-3  col-lg-2 col-xl-2 offset-xl-1">
              <div className="footer-links mb-40">
                <h6 className="h6-xl">About</h6>
                <ul className="foo-links text-secondary clearfix">
                  <li>
                    <p className="p-md">
                      {" "}
                      <a href="affiliate">Affiliate</a>
                    </p>
                  </li>
                  <li>
                    <p className="p-md">
                      <a href="creators.php">Creators</a>
                    </p>
                  </li>
                  <li>
                    <p className="p-md">
                      <a href="accelerated-programs.php">Accelerated Program</a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-2">
              <div className="footer-links mb-40">
                <h6 className="h6-xs">Discover</h6>
                <ul className="foo-links text-secondary clearfix">
                  <li>
                    <p className="p-md">
                      <a href="#">Our Blog</a>
                    </p>
                  </li>
                  <li>
                    <p className="p-md">
                      <a href="#">Resource Center</a>
                    </p>
                  </li>
                  <li>
                    <p className="p-md">
                      <a href="#">Communities</a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="live">
        <div className="petal"></div>
        <div className="about">
          <ul>
            <li className="live-link"></li>
            <li className="live-link"></li>
            <li className="live-link"></li>
          </ul>
        </div>
        <div className="discover"></div>
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
    </footer>
  );
};

export default Live;
