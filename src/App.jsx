import NavbarComp from "./components/MainComp/NavbarComp";
import { Route, Routes } from "react-router-dom";
import Home from './components/MainComp/Home'
import About from "./components/MainComp/About";
import Contact from "./components/MainComp/Contact";
import Destination from "./components/MainComp/Destination";
function App() {
  return (
    <>
      <NavbarComp></NavbarComp>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/destination" element={<Destination />} />
      </Routes>
    </>
  );
}

export default App;
