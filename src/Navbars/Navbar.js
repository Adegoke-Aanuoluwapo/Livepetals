import React, { useState, useRef, useEffect, Link } from "react";
import ReactDOM from "react-dom/client";

import { FaBars } from "react-icons/fa";
import { links } from "./data";
// import { useGlobalContext } from "./context";

const Navbar = () => {
  // const { openSidebar } = useGlobalContext();
  return (
    <div className="wsmenucontainer" style={{ minWidth: "110px" }}>
      <div id="page" className="page">
        <header id="header" className="header tra-menu navbar-light">
          <div className="header-wrapper">
            {/* <!-- Mobile Header -- */}
            <div className="wsmobileheader clearfix">
              <span className="smllogo">
                <img src="../images/logo-white.png" alt="mobile-log"></img>
              </span>
              <a id="wsnavtoggle" className="wsanimated-arrow">
                <span></span>
              </a>
            </div>
            {/* NAVIGATION MENU */}
            <div className="wsmainfull menu clearfix">
              <div className="wsmainwp clearfix">
                {/* HEADER LOGO */}
                <div className="desktoplogo">
                  <a href="#hero-4" className="logo-black">
                    <img src="../images/logo-black.png" alt="header-logo" />
                  </a>
                </div>
                <div className="desktoplogo">
                  <a href="#hero-4" className="logo-white">
                    <img src="images/logo-white.png" alt="header-logo" />
                  </a>
                </div>
                {/* MAIN MENU */}
                <nav className="wsmenu clearfix" style={{ height: "551px" }}>
                  <div className="overlapblackbg"></div>
                  <ul className="wsmenu-list nav-pink-hover">
                    {/* MEGAMENU */}
                    <li>
                      <a href=".">Home</a>
                    </li>
                    <li>
                      <a href="">Affiliate</a>
                    </li>
                    <li>
                      <a href="creators.php">Creators</a>
                    </li>
                    <li>
                      <a href="accelerated-program.php">Program</a>
                    </li>
                    <li>
                      <a href="Login.php">Log In</a>
                    </li>
                    {/* HEADER BUTTON */}
                    <li className="nl-simple" aria-haspopup="true">
                      <a
                        href="signup.php"
                        class="btn btn-tra-white pink-hover last-link"
                      >
                        Get Started
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>

    // <nav>
    //   <div className="nav-center">
    //     <div className="nav-header">
    //       <img
    //         src="../images/petalfav.jpg"
    //         className="nav-logo"
    //         alt="Livepetals"
    //       />
    //       <h1 className="petals">Livepetals</h1>
    //       <ul className="nav-links">
    //         <li>
    //           <a className="link-btn" as={Link} to={"/localhost"}>
    //             Home
    //           </a>
    //         </li>
    //         <li>
    //           <a className="link-btn" as={Link} to={"/Affiliate"}>
    //             Affiliate
    //           </a>
    //         </li>
    //         <li>
    //           <a className="link-btn" href="www.livepetal.com">
    //             Creators
    //           </a>
    //         </li>
    //         <li>
    //           <a className="link-btn" href="www.livepetal.com">
    //             FAQS
    //           </a>
    //         </li>
    //         <li>
    //           <a className="link-btn" href="www.livepetal.com">
    //             Login
    //           </a>
    //         </li>
    //         <a className="nav-btn">Get Started</a>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
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
