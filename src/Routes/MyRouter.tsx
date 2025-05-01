import { Routes, Route } from "react-router-dom";
import { HeroSection, Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
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
import { Atavich } from "../Pages/shop/Atavich";
import { Fenjaneh } from "../Pages/shop/Fenjaneh";
import { Refah } from "../Pages/shop/Refah";
import { Navbar } from "../components/Navbar";

function MyRouter() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <Routes>
                {/* صفحه اصلی */}
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/Cart" element={<Cart />} />

                {/* رستوران‌ها */}
                <Route path="/Rasturants" element={<Rasturants />}>
                    <Route path="Ascari" element={<Ascari />} />
                </Route>

                {/* فست فودها */}
                <Route path="/Fastfoods" element={<Fastfoods />}>
                    <Route path="Atavich" element={<Atavich />} />
                </Route>

                {/* کافه‌ها */}
                <Route path="/Cafees" element={<Cafees />}>
                    <Route path="Fenjaneh" element={<Fenjaneh />} />
                </Route>

                {/* مارکت‌ها */}
                <Route path="/Markets" element={<Markets />}>
                    <Route path="Refah" element={<Refah />} />
                </Route>

                {/* سایر صفحات */}
                <Route path="/About" element={<About />} />
                <Route path="/CallMe" element={<CallMe />} />
                <Route path="/Suports" element={<Suports />} />
            </Routes>

        </>
    );
}

export { MyRouter };
