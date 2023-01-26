import logo from "./logo.svg";
//import "./App.css";
import Navbar from "./Navbar";
import Section from "./Section";
import Sidebar from "./Sidebar";
import Business from "./Business";
import Build from "./Build";
import Launch from "./Launch";
import Wide from "./Wide";
import Affiliate from "./Affiliate";
import Trend from "./Trend";
import Earn from "./Earn";
import Bonus from "./Bonus";
import Live from "./Live";
import Footer from "./Footer";
import Home from "./Home";
import Creator from "./Creator";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/Creator" element={<Creator />} />
        <Route element={<Section />} />
      </Route>
    )
  );
  return (
    <div className="App">
      <Navbar />
      {/* <Sidebar /> */}
      <Section />
      <Business />
      <hr />
      <Build />
      <Launch />
      <Wide />
      <Affiliate />
      <Trend />
      <Earn />
      <Bonus />
      <hr />
      <Live />
      <hr />
      <Footer />
    </div>
  );
}
const Root = () => {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/data">Data</Link>
      </div>

      <div>
        <Outlet />
      </div>
    </>
  );
};
export default App;
