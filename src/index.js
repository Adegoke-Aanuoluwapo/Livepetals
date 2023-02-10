import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./css/menu.css";
import "./css/bootstrap.min.css";
import "./css/animate.css";
//import "./css/flaticon.css";
import "./css/responsive.css";
import "./css/menu.css";
import Affiliates from "./Affiliate";
//import "./css/style.css";
//import "./js/bootstrap.min.js";
//import "./js/imagesloaded.pkgd.min.js";
//import "./js/wow.js";
import App from "./App";
import Navbar from "./Navbars/Navbar";
import { AppProvider } from "./Homes/context";
//import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
