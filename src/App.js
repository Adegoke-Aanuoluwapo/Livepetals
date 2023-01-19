import logo from "./logo.svg";
//import "./App.css";
import Navbar from "./Navbar";
import Section from "./Section";
import Sidebar from "./Sidebar";
import Business from "./Business";
import Build from "./Build";
import Launch from "./Launch";
import Wide from "./Wide";

function App() {
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
    </div>
  );
}

export default App;
