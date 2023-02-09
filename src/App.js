import logo from "./logo.svg";
//import "./App.css";
import "./index.css";

import Home from "./Homes/Home";
import Creator from "./Creator";
import Affiliate from "./Affiliates/Affiliate";
import Login from "./Login";
import Program from "./Program";
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
        <Route path="/Affiliate" element={<Affiliate />} />
        <Route path="/Creator" element={<Creator />} />
        <Route path="/Program" element={<Program />} />
        <Route path="/Login" element={<Login />} />
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
    // <Navbar />
    // {/* <Sidebar /> */}
    // <Section />
    // <Business />
    // <hr />
    // <Build />
    //     <Launch />
    //     <Wide />
    //     <Affiliate />
    //     <Trend />
    //     <Earn />
    //     <Bonus />
    //     <hr />
    //     <Live />
    //     <hr />
    //     <Footer />
    //   </div>
  );
}

const Root = () => {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/Affiliate">Affiliate</Link>
        <Link to="/Creator">Creators</Link>
        <Link to="/Program">Program</Link>
        <Link to="/Login">Log In</Link>
      </div>

      <div>
        <Outlet />
      </div>
    </>
  );
};
export default App;
