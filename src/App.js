import logo from "./logo.svg";
//import "./App.css";
import "./index.css";

import Home from "./Homes/House";
import Creator from "./Creators";
import Affiliate from "./Affiliate";
import Login from "./Login";
import Program from "./Program";
import GetStarted from "./Getstarted";
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
        <Route path="/Creators" element={<Creator />} />
        <Route path="/Program" element={<Program />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Getstarted" element={<GetStarted />} />
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
        <Outlet />
      </div>
    </>
  );
};
export default App;
