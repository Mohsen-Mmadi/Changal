import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../CSS/App.css'
import { useTheme } from "../Store";
import { useModalStore } from '../Store';

function ChangalTheme() {
    const { darkMode, toggleTheme } = useTheme();
    return (
        <>
            <button
                onClick={toggleTheme}
                className={`${darkMode ? 'text-white' : 'text-black bg-white'} bg-black`}
            >
                {darkMode ? <i className="bi bi-toggle-on"></i> : <i className="bi bi-toggle-off"></i>}
            </button>
        </>
    );
}
function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { openModal } = useModalStore();
    return (
        <>
            <nav className="bg-white  shadow-md fixed top-0 left-0 w-full z-50">
                <div className=" flex  flex-row   items-center justify-between px-6 py-4 text-black dark:text-white">

                    {/* لوگو */}
                    <Link to="Home" className="mb-2 ml-0  md:m-0 md:flex items-center gap-2 font-bold text-4xl fontBrand textBrand">
                        <span className="hidden md:flex">Changal</span>
                        <img src="/src/assets/Icons/Changal.svg" alt="fork" className="md:absolute h-25 w-25 right-30 p-0" />

                    </Link>

                    {/* سرچ + تغییر تم */}
                    <div className="m-2 md:m-0 flex items-center gap-4">
                        <ChangalTheme />
                        <input
                            type="search"
                            placeholder="جستجو"
                            className="text-right bg-slate-200 text-black rounded-md px-3 py-2"
                        />
                    </div>

                    {/* دکمه‌ها */}
                    <div className="hidden m-2  md:m-0 md:flex items-center gap-3">
                        <Link to="Cart">
                            <button className="bg-red-500 p-2 rounded-md cursor-pointer hover:opacity-75">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" /></svg>
                            </button>
                        </Link>

                        
                            <button onClick={() => openModal('login')} className="btnColor font-bold fontTitr p-2 rounded-md cursor-pointer hover:opacity-75">ورود</button>
                        

                        
                            <button onClick={() => openModal('register')} className="text-blue-500 font-bold fontTitr p-2 rounded-md cursor-pointer hover:opacity-75">
                                ثبت‌نام
                            </button>
                        
                    </div>

                    {/* آیکن همبرگر در موبایل */}
                    <div className="md:hidden">
                        <button className="cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#161616"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
                        </button>
                    </div>
                </div>
                {/* منوی موبایل */}
                {isMenuOpen && (
                    <div className="flex flex-col items-center gap-4 px-4 py-3 md:hidden bg-white dark:border-t">
                        <ChangalTheme />
                        <input
                            type="search"
                            placeholder="جستجو"
                            className="bg-slate-200 dark: rounded-md px-3 py-2 w-full"
                        />
                        <Link to="Cart" className="w-full text-center bg-red-500 text-white p-2 rounded-md">
                            <button className="bg-red-500 p-2 rounded-md cursor-pointer hover:opacity-75">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" /></svg>
                            </button>
                        </Link>
                        <Link to="Login" className="w-full text-center btnColor rounded-md cursor-pointer">
                            <button className=" font-bold fontTitr p-2 hover:opacity-75">ورود

                            </button>
                        </Link>
                        <Link to="Register" className="w-full text-center ">
                            <button className="text-blue-500 font-bold fontTitr p-2 rounded-md cursor-pointer hover:opacity-75">
                                ثبت‌نام
                            </button>
                        </Link>
                    </div>
                )}
            </nav >

        </>
    )
}
export { Navbar }