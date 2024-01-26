import logo from "./logo.svg";
import "./App.css";
// import PropsComponent from './components/functionalComponents/PropsComponent';
// import StateComponent from './components/classComponents/StateComponent';
import NavBar from "./components/functionalcomponents/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/functionalcomponents/about";
import Home from "./components/functionalcomponents/Home";
import Login from "./components/functionalcomponents/Login";
import Experience from "./components/functionalcomponents/Experience";
import PropsComponent from "./components/functionalcomponents/PropsComponent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/experience" element={<Experience />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <PropsComponent name="KEC" course="MERN"/> */}
    </div>
  );
}

export default App;
