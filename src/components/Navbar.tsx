import { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/App.css";
import { useModalStore, useUserStore, useFormStore} from "../Store";
import fork from '../../public/Changal.png'

// function ChangalTheme() {
//   const { darkMode, toggleTheme } = useTheme();
//   return (
//     <>
//       <button
//         onClick={toggleTheme}
//         className={`${
//           darkMode ? "text-white" : "text-black bg-white"
//         } bg-black`}
//       >
//         {darkMode ? (
//           <i className="bi bi-toggle-on"></i>
//         ) : (
//           <i className="bi bi-toggle-off"></i>
//         )}
//       </button>
//     </>
//   );
// }
function PersonalData({
  setShowProfile,
}: {
  setShowProfile: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { formData } = useFormStore();
  const { openModal } = useModalStore();
 
  return (
    <div className="bg-slate-600 pt-10 p-2  w-1/4 h-[150px] hidden md:flex flex-col mt-10">
      <p className="w-full text-white">نام کاربری: {formData.username}</p>
      <button
        onClick={() => openModal("password")}
        className="bg-blue-500 text-white py-1  rounded  my-1 w-full"
      >
        تغییر رمز عبور
      </button>
      <button
        onClick={() => setShowProfile(false)}
        className="bg-red-500 text-white py-1  rounded my-1 w-full"
      >
        بستن
      </button>
    </div>
  );
  
}
// function PasswordModal() {
//   const { isOpen, type, closeModal } = useModalStore();
//   const { login } = useUserStore();
//   const { formData, setFormData } = useFormStore();
//   const [password, setPassword] = useState(formData.password);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   if (!isOpen || type !== "password") return null;

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { value } = e.target;
//     setPassword(value);
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError("");
//     console.log("داده‌های فرم:", formData);

//     login();
//     closeModal();
//     navigate("/Home");
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
//       <div className="bg-white w-11/12 max-w-md rounded-lg p-6 relative">
//         <button
//           className="absolute top-2 right-2 text-xl text-gray-600"
//           onClick={closeModal}
//         >
//           &times;
//         </button>
//         <h2 className="text-2xl font-bold fontTitr mb-4 text-center">
//           تغییر رمز عبور
//         </h2>
//         <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//           <input
//             type="text"
//             name="password"
//             value={password}
//             onChange={handleChange}
//             placeholder="رمز فعلی"
//             className="border px-3 py-2 rounded fontText"
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="رمز جدید"
//             className="border px-3 py-2 rounded fontText"
//             required
//           />
//           {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//           <button className="bg-orange-500 text-white py-2 rounded fontTitr hover:opacity-80 transition-all">

//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

function Navbar() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openModal } = useModalStore();
  const { isLoggedIn } = useUserStore();
  const [showProfile, setShowProfile] = useState(false);
  
  return (
    <>
      <nav className="bg-white  shadow-md fixed top-0 left-0 w-full z-50">
        <div className=" flex  flex-row   items-center justify-between px-6 py-4 text-black dark:text-white">
          {/* لوگو */}
          <Link
            to="Home"
            className="mb-2 ml-0  md:m-0 md:flex items-center gap-2 font-bold text-4xl fontBrand textBrand"
          >
            <span className="hidden md:flex">Changal</span>
            <img
              src={fork}
              alt="fork"
              className="md:absolute h-10 w-10 right-38 p-0"
            />
          </Link>

          {/* سرچ + تغییر تم */}
          <div className="m-2 md:m-0 flex items-center gap-4">
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e3e3e3"
                >
                  <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
                </svg>
              </button>
            </Link>

            {!isLoggedIn ? (
              <>
                <button
                  onClick={() => openModal("login")}
                  className="w-full text-center btnColor rounded-md cursor-pointer font-bold fontTitr p-2 hover:opacity-75"
                >
                  ورود
                </button>

                <button
                  onClick={() => openModal("register")}
                  className="w-full text-center text-blue-500 font-bold fontTitr p-2 rounded-md cursor-pointer hover:opacity-75"
                >
                  ثبت‌نام
                </button>
              </>
            ) : (
              <>
                {!showProfile && (
                  <>
                    <button
                      className="w-full text-center bg-slate-400 p-2 rounded-full cursor-pointer hover:opacity-75"
                      onClick={() => setShowProfile(true)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#000000"
                      >
                        <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
                      </svg>
                    </button>
                  </>
                )}
              </>
            )}
          </div>

          {/* آیکن همبرگر در موبایل */}
          <div className="md:hidden">
            <button
              className="cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="35px"
                viewBox="0 -960 960 960"
                width="35px"
                fill="#161616"
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </button>
          </div>
        </div>
        {/* منوی موبایل */}
        {isMenuOpen && (
          <>
            <div className="flex flex-col items-center gap-4 px-4 py-3 md:hidden bg-white dark:border-t">
              <input
                type="search"
                placeholder="جستجو"
                className="bg-slate-200 dark: rounded-md px-3 py-2 w-full"
              />
              <Link
                to="Cart"
                className="w-full text-center bg-red-500 text-white p-2 rounded-md"
              >
                <button className="bg-red-500 p-2 rounded-md cursor-pointer hover:opacity-75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e3e3e3"
                  >
                    <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
                  </svg>
                </button>
              </Link>

              {!isLoggedIn ? (
                <>
                  <button
                    onClick={() => openModal("login")}
                    className="w-full text-center btnColor rounded-md cursor-pointer font-bold fontTitr p-2 hover:opacity-75"
                  >
                    ورود
                  </button>

                  <button
                    onClick={() => openModal("register")}
                    className="w-full text-center text-blue-500 font-bold fontTitr p-2 rounded-md cursor-pointer hover:opacity-75"
                  >
                    ثبت‌نام
                  </button>
                </>
              ) : (
                <>
                  {!showProfile && (
                    <>
                      <button
                        className="w-full text-center m-auto bg-slate-400 p-2 rounded-full cursor-pointer hover:opacity-75"
                        onClick={() => setShowProfile(true)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 -960 960 960"
                          width="24px"
                          fill="#000000"
                          className=" m-auto"
                        >
                          <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
                        </svg>
                      </button>
                      {isLoggedIn && showProfile && (
                        <PersonalData setShowProfile={setShowProfile} />
                      )}
                    </>
                  )}
                </>
              )}
            </div>
          </>
        )}
      </nav>
      {/* {showProfile && <PersonalData setShowProfile={setShowProfile} />} */}

      {/* اضافه کردن مودال رمز عبور */}
      {/* <PasswordModal /> */}
      {isLoggedIn && showProfile && (
        <PersonalData setShowProfile={setShowProfile} />
      )}

      {/* <PasswordModal /> */}
    </>
  );
}
export { Navbar };
