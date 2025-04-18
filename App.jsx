import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import About from "./Component/About";
import Services from "./Component/Services";
import Work from "./Component/Work";
import Touch from "./Component/Touch";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./routes/Layout";
import Contact from "./Component/Contcat";
import ContactinNav from "./Component/ContactinNav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" h-[100vh] w-[100wh] overflow-x-hidden bg-black ">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="work" element={<Work />} />
              <Route path="ContactWithUs" element={<Contact />} />
              <Route path="Contact" element={<ContactinNav/>} />
              <Route path="Portfolio" element={<Work />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
