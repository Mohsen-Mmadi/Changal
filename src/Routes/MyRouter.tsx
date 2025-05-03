import { Routes, Route, useLocation } from "react-router-dom";
import { HeroSection, Home } from "../Pages/Home";
import { LoginForm } from "../Pages/Login";
import { Register } from "../Pages/Register";
import { About } from "../Pages/About";
import { CallMe } from "../Pages/CallMe";
import { Suports } from "../Pages/Suports";
import { Cart } from "../Pages/Cart";
import { Fastfoods } from "../Pages/Fastfood";
import { Rasturants } from "../Pages/Rasturants";
import { Cafees } from "../Pages/Cafees";
import { Markets } from "../Pages/Markets";
import { Ascari } from "../Pages/shop/Ascari";
import { Karamoozian } from "../Pages/shop/Karamoozian";
import { Max } from "../Pages/shop/Max";
import { Sahra } from "../Pages/shop/Sahra";
import { Atavich } from "../Pages/shop/Atavich";
import { MeysamKhan } from "../Pages/shop/MeysamKhan";
import { SirBerger } from "../Pages/shop/SirBerger";
import { Team } from "../Pages/shop/Team";
import { Fenjaneh } from "../Pages/shop/Fenjaneh";
import { Bistro } from "../Pages/shop/Bistro";
import { Ratoon } from "../Pages/shop/Ratoon";
import { Jacarto } from "../Pages/shop/Jacarto";
import { Refah } from "../Pages/shop/Refah";
import { DailyMarket } from "../Pages/shop/DailyMarket";
import { OfoghKoorosh } from "../Pages/shop/OfoghKoorosh";
import { YeganMarket } from "../Pages/shop/YeganMarket";
import { Navbar } from "../components/Navbar";

function MyRouter() {
  const location = useLocation();
  const showHero =
    location.pathname === "/" ||
    location.pathname === "/Home" ||
    location.pathname === "/Cart" ||
    location.pathname === "/Rasturants" ||
    location.pathname === "/Fastfoods" ||
    location.pathname === "/Cafees" ||
    location.pathname === "/Markets" ||
    location.pathname === "/About" ||
    location.pathname === "/CallMe" ||
    location.pathname === "/Suports";
  return (
    <>
      <Navbar />
      {showHero && <HeroSection />}
      <Routes>
        {/* صفحه اصلی */}
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<LoginForm  />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Cart" element={<Cart />} />

        {/* رستوران‌ها */}
        <Route path="/Rasturants" element={<Rasturants />} />
        <Route path="/Rasturants/Ascari" element={<Ascari />} />
        <Route path="/Rasturants/Karamoozian" element={<Karamoozian />} />
        <Route path="/Rasturants/Max" element={<Max />} />
        <Route path="/Rasturants/Sahra" element={<Sahra />} />

        {/* فست فودها */}
        <Route path="/Fastfoods" element={<Fastfoods />} />
        <Route path="/Fastfoods/Atavich" element={<Atavich />} />
        <Route path="/Fastfoods/MeysamKhan" element={<MeysamKhan />} />
        <Route path="/Fastfoods/SirBerger" element={<SirBerger />} />
        <Route path="/Fastfoods/Team" element={<Team />} />

        {/* کافه‌ها */}
        <Route path="/Cafees" element={<Cafees />} />
        <Route path="/Cafees/Fenjaneh" element={<Fenjaneh />} />
        <Route path="/Cafees/Bistro" element={<Bistro />} />
        <Route path="/Cafees/Ratoon" element={<Ratoon />} />
        <Route path="/Cafees/Jacarto" element={<Jacarto />} />

        {/* مارکت‌ها */}
        <Route path="/Markets" element={<Markets />} />
        <Route path="/Markets/Refah" element={<Refah />} />
        <Route path="/Markets/DailyMarket" element={<DailyMarket />} />
        <Route path="/Markets/OfoghKoorosh" element={<OfoghKoorosh />} />
        <Route path="/Markets/YeganMarket" element={<YeganMarket />} />

        {/* سایر صفحات */}
        <Route path="/About" element={<About />} />
        <Route path="/CallMe" element={<CallMe />} />
        <Route path="/Suports" element={<Suports />} />
      </Routes>
    </>
  );
}

export { MyRouter };
