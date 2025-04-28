import { Routes, Route } from "react-router-dom";
import { HeroSection, Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
import { About } from "../Pages/About";
import { CallMe } from "../Pages/CallMe";
import { Cart } from "../Pages/Cart";
import { Fastfoods } from "../Pages/Fastfood";
import { Rasturants } from "../Pages/Rasturants";
import { Cafees } from "../Pages/Cafees";
import { Markets } from "../Pages/Markets";
import { Navbar } from "../components/Navbar";

function MyRouter() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Fastfoods" element={<Fastfoods />} />
        <Route path="/Rasturants" element={<Rasturants />} />
        <Route path="/Cafees" element={<Cafees />} />
        <Route path="/Markets" element={<Markets />} />
        <Route path="/About" element={<About />} />
        <Route path="/CallMe" element={<CallMe />} />
      </Routes>
    </>
  );
}

export { MyRouter };
