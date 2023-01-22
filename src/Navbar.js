import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom/client";
import logo from "./images/petalfav.jpg";
import { FaBars } from "react-icons/fa";
import { links } from "./data";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { openSidebar } = useGlobalContext();
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="Livepetals" />
          <h1 className="petals">Livepetals</h1>
          <ul className="nav-links">
            <li>
              <a className="link-btn" href="www.livepetal.com">
                Home
              </a>
            </li>
            <li>
              <a className="link-btn" href="www.livepetal.com">
                Affiliate
              </a>
            </li>
            <li>
              <a className="link-btn" href="www.livepetal.com">
                Creators
              </a>
            </li>
            <li>
              <a className="link-btn" href="www.livepetal.com">
                FAQS
              </a>
            </li>
            <li>
              <a className="link-btn" href="www.livepetal.com">
                Login
              </a>
            </li>
          </ul>
          <button className="btn toggle-btn" onClick={openSidebar}>
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};
// const Navbar = () => {
//   return (
//     <nav>
//       <div className="nav-container">
//         <h1>
//           <img src={logo} alt="Livepetals" />
//           Livepetals
//         </h1>
//         <button className="nav-toggle">
//           <FaBars />
//         </button>
//       </div>
//       <div>
//         <ul className="nav-list">
//           <button className="btn">Get Started</button>
//         </ul>
//       </div>
//     </nav>
//   );
// };
{
  /* <nav>
  <div className="nav-center">
    <div className="nav-header">
      <h1>Livepetals</h1>
      <img src={logo} alt="Livepetals" />
      <button className="nav-toggle">
        <FaBars />
      </button>
    </div>
    <div className="links-container show-container">
      <ul>
        <li>
          <a>home</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  ); */
}

export default Navbar;
