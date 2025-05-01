import { useState, useEffect } from "react";
import { Navigate, Link } from "react-router-dom";
import { Fastfoods } from "./Fastfood";

let time = new Date();
function openingHours() {
  if (time.getHours() >= 8 && time.getHours() <= 22) {
    return true;
  } else {
    return false;
  }
}
// TODO types
type categury = {
  id: number;
  title: string;
  icon: string;
  patch: string;
};
type myAround = {
  id: number;
  title: string;
  image: string;
  location: string;
  score: number;
  patch: string;
  isOpen: boolean;
};
// TODO create varibles&Objects Data
let categuries: categury[] = [
  {
    id: 1,
    title: "رستوران",
    icon: "/src/assets/Icons/Restaurant-icon.png",
    patch: "/Rasturants",
  },
  {
    id: 2,
    title: "فست فود",
    icon: "/src/assets/Icons/FastFood-icon.png",
    patch: "/Fastfoods",
  },
  {
    id: 3,
    title: "کافه",
    icon: "/src/assets/Icons/Cofee-icon.png",
    patch: "/Cafees",
  },
  {
    id: 4,
    title: "سوپر مارکت",
    icon: "/src/assets/Icons/Market-icon.png",
    patch: "/Markets",
  },
];
let myArounds: myAround[] = [
  {
    id: 1,
    title: "رستوران عسکری راد",
    image: "/src/assets/images/RS-Ascari.jpg",
    location: "میدان رسالت",
    score: 4.8,
    patch: "/Rasturants/Ascari",
    isOpen: openingHours(),
  },
  {
    id: 2,
    title: "کافه فنجانه",
    image: "/src/assets/images/Cafee-Fenjaneh.jpg",
    location: "شهرک مطهری",
    score: 4.1,
    patch: "/Cafees/Fenjaneh",
    isOpen: openingHours(),
  },
  {
    id: 3,
    title: "فروشگاه رفاه",
    image: "/src/assets/images/SPMarket-Refah.jpg",
    location: "پارک مطهری",
    score: 3.9,
    patch: "/Markets/Refah",
    isOpen: openingHours(),
  },
  {
    id: 4,
    title: "فست فود عطاویچ",
    image: "/src/assets/images/FSFood-Atavich.jpg",
    location: "بلوار شیراز",
    score: 4.7,
    patch: "/Fastfoods/Atavich",
    isOpen: openingHours(),
  },
];
// TODO Components
function HeroSection() {
  return (
    <section className="relative w-full h-[70vh] flex justify-center items-center overflow-hidden">
      {/* لایه عکس بلور شده */}
      <div className="absolute inset-0 backgroundBlur">
        <img
          src="/src/assets/images/showCase-picture.jpg"
          alt="نمایشگاه"
          className="w-full h-full object-cover "
        />
      </div>

      {/* محتوای واضح روی عکس */}
      <div className="relative z-10 text-center ">
        <h1 className="text-5xl font-bold text-white ">چنگــال خوشمزه!</h1>
        <br />
        <p className="text-lg text-white fontText">
          سفارش غذای آنلاین با سرعت و کیفیت
        </p>
      </div>
    </section>
  );
}
function CTASection() {
  return (
    <>
      <div className="grid grid-cols-1 gap-2 mt-4 md:grid-cols-2">
        <div className="flex flex-col justify-center items-center gap-3">
          <h1 className="fontTitr text-2xl">انتخاب با تو. تحویل سریع با ما!</h1>
          <select
            name=""
            id=""
            className="bg-slate-200 w-1/2 
                h-[3rem] p-2 open:mb-5"
          >
            <option value="کرمان">کرمان</option>
          </select>
          <a href="#" className="fontText font-bold textBrand">
            انتخاب بر اساس نقشه〱
          </a>
          <button
            type="button"
            className="fontTitr p-2 m-2 rounded-md btnColor text-white"
          >
            <a href="#">بزن بریم←</a>
          </button>
        </div>
        <div className="p-5 justify-center m-auto ">
          <img
            src="/src/assets/images/motorcycleCourier.png"
            alt="motorcycle"
          />
        </div>
      </div>
    </>
  );
}

function Categury() {
  return (
    <>
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 items-center justify-between m-3">
        {categuries.map((item) => (
          <Link to={item.patch} key={item.id}>
            <div className="p-5 componentColor rounded-md m-auto text-center cursor-pointer">
              <img
                src={item.icon}
                alt={item.title}
                className="rounded-full w-[50px] h-[50px] m-auto"
              />
              <span className="mt-2 text-sm font-bold fontTitr">
                {item.title}
              </span>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}

function MyAroundShop() {
  return (
    <>
      <div className="flex mr-2 pr-6">
        <h1 className=" fontTitr font-bold text-5xl ">اطراف من!</h1>
      </div>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-3 p-5 items-center justify-between m-3">
        {myArounds.map((item) => (
          <Link to={item.patch} key={item.id}>
            <div className="componentColor rounded-xl cursor-pointer w-full">
              <img
                src={item.image}
                alt={item.image}
                className="w-full h-[30vh] rounded-t-xl mb-3"
              />
              <div className="grid gap-2 p-2">
                {/* عنوان و وضعیت باز بودن در یک ردیف */}
                <div className="flex items-center justify-between text-wrap ">
                  <h1 className="fontTitr font-bold text-lg">{item.title}</h1>
                  <span
                    className={`fontTitr px-2 py-1 rounded-xl text-white text-center  ${
                      item.isOpen ? "bg-green-400" : "bg-red-400"
                    }`}
                  >
                    {item.isOpen ? "باز است" : "بسته است"}
                  </span>
                </div>
                <div className="grid gap-2">
                  <div className="p-2 text-right">
                    <p className="fontText inline">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#535c68"
                        className="inline"
                      >
                        <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
                      </svg>
                      {item.location}
                    </p>
                  </div>
                  <div>
                    <p className="text-right w-1/3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#f9ca24"
                      >
                        <path d="M240-400q0 52 21 98.5t60 81.5q-1-5-1-9v-9q0-32 12-60t35-51l113-111 113 111q23 23 35 51t12 60v9q0 4-1 9 39-35 60-81.5t21-98.5q0-50-18.5-94.5T648-574q-20 13-42 19.5t-45 6.5q-62 0-107.5-41T401-690q-39 33-69 68.5t-50.5 72Q261-513 250.5-475T240-400Zm240 52-57 56q-11 11-17 25t-6 29q0 32 23.5 55t56.5 23q33 0 56.5-23t23.5-55q0-16-6-29.5T537-292l-57-56Zm0-492v132q0 34 23.5 57t57.5 23q18 0 33.5-7.5T622-658l18-22q74 42 117 117t43 163q0 134-93 227T480-80q-134 0-227-93t-93-227q0-129 86.5-245T480-840Z" />
                      </svg>
                      {item.score}
                    </p>
                  </div>
                  {/* دکمه مشاهده منو کامنت شده است */}
                  {/* <div className="p-2 text-left text-white ">
                    <button className="btnColor w-full mx-1 md:mt-3 p-3 rounded-md fontText font-bold cursor-pointer hover:opacity-70">
                      مشاهده منو
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
function OfferCard() {
  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(
      function () {
        alert("متن کپی شد!");
      },
      function (err) {
        console.error("خطا در کپی کردن متن: ", err);
      }
    );
  }
  return (
    <>
      <section className="p-4  ">
        <div className="flex    md:mr-1 mb-5 pr-6">
          <h1 className=" fontTitr font-bold text-3xl ">
            {" "}
            بن های تخفیف برای تو!
          </h1>
        </div>
        <div className=" flex flex-col md:flex-row md:justify-start gap-4">
          {/* بن تخفیف اول */}
          <div className="w-80 h-52 p-3 rounded-xl grid grid-cols-3 gap-3 shadow-lg bg-white">
            {/* بخش کد و آیکن */}
            <div className="flex flex-col items-center justify-between bg-green-100 rounded-md py-2">
              <i className="bi bi-gift-fill text-6xl text-red-500" />
              <h4 className="font-bold text-lg">M-VUE</h4>
              <button
                onClick={() => copyToClipboard("M-VUE")}
                className="bg-slate-200 text-sm font-bold px-3 py-1 rounded-md border-2 border-dashed border-blue-300 hover:bg-blue-100 transition cursor-pointer"
              >
                کپی کردن
              </button>
            </div>
            {/* بخش توضیحات */}
            <div className="col-span-2 border-r-2 border-dashed border-gray-400 pr-3 flex flex-col justify-between">
              <p className="text-sm">
                مبلغ تخفیف: <span className="font-bold">40,000 تومان</span>
              </p>
              <Link to={""}>
                <p className="text-blue-700 font-medium">مجموعه میثم خان</p>
              </Link>
              <p className="text-sm">
                حداقل خرید: <span className="font-bold">280,000 تومان</span>
              </p>

              <p className="text-red-600 text-xs">تاریخ انقضا: 1404/3/2</p>
            </div>
          </div>

          {/* بن تخفیف دوم */}
          <div className="w-80 h-52 p-3 rounded-xl grid grid-cols-3 gap-3 shadow-lg bg-white">
            <div className="flex flex-col items-center justify-between bg-green-100 rounded-md py-2">
              <i className="bi bi-gift-fill text-6xl text-red-500" />
              <h4 className="font-bold text-lg">M-REACT</h4>
              <button
                onClick={() => copyToClipboard("M-REACT")}
                className="bg-slate-200 text-sm font-bold px-3 py-1 rounded-md border-2 border-dashed border-blue-300 hover:bg-blue-100 transition cursor-pointer"
              >
                کپی کردن
              </button>
            </div>
            <div className="col-span-2 border-r-2 border-dashed border-gray-400 pr-3 flex flex-col justify-between">
              <p className="text-sm">
                مبلغ تخفیف: <span className="font-bold">50,000 تومان</span>
              </p>
              <Link to={""}>
                <p className="text-blue-700 font-medium">مجموعه مکث</p>
              </Link>
              <p className="text-sm">
                حداقل خرید: <span className="font-bold">210,000 تومان</span>
              </p>
              <p className="text-red-600 text-xs">تاریخ انقضا: 1404/3/3</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
function Footer() {
  // return (
  //   <>
  //     <footer className="componentColor mb-0 p-2">
  //       <div className="grid grid-rows-1">
  //         <div className="row-start-1 row-end-3 col-span-4 bg-red-600">
  //           <div className="  md:m-0 flex flex-col items-center gap-2 font-bold text-5xl fontBrand textBrand">
  //             {/* لوگو */}
  //             <span className="">Changal</span>
  //             <img
  //               src="/src/assets/Icons/Changal.svg"
  //               alt="fork"
  //               className=" w-[17rem] h-[17rem]  p-0"
  //             />
  //           </div>
  //         </div>
  //         <div className="grid-cols-8 bg-blue-500">
  //           <div className="grid grid-cols-3 bg-green-500">
  //             <div>
  //               <ul>
  //                 <li>dddddd</li>
  //                 <li>dddddws</li>
  //               </ul>
  //             </div>
  //             <div>
  //               <ul>
  //                 <li>ww</li>
  //                 <li>qq</li>
  //               </ul>
  //             </div>
  //             <div>
  //               <ul>
  //                 <li>sssa</li>
  //                 <li>dcfdfd</li>
  //               </ul>
  //             </div>
  //           </div>
  //         </div>
  //         <div id="Mojavez">
  //           <img src="" alt="" /><img src="" alt="" /><img src="" alt="" />
  //         </div>
  //         <div id="copyRight">

  //         </div>
  //       </div>
  //     </footer>
  //   </>
  // );
  return (
    <>
      <footer className="componentColor p-4 mt-10">
        <div className="grid grid-cols-1  md:grid-cols-4 gap-4 items-center">
          {/* برند و لوگو */}
          <div className=" bg-green-200 rounded-xl p-4 text-center col-span-1 flex flex-col items-center md:items-center gap-2 md:col-span-1">
            <span className="fontBrand textBrand text-4xl font-bold ">
              Changal
            </span>
            <img
              src="/src/assets/Icons/Changal.svg"
              alt="fork"
              className="w-40 h-40"
            />
          </div>

          {/* لینک‌ها */}
          <div className="col-span-1 md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-right">
            <div className="linksFooter">
              <h4 className="font-semibold text-lg mb-2">مجموعه ها</h4>
              <ul className="space-y-1">
                <li>
                  <a href="#">رستوران</a>
                </li>
                <li>
                  <a href="#">فست فود</a>
                </li>
                <li>
                  <a href="#">کافه</a>
                </li>
                <li>
                  <a href="#">سوپر مارکت</a>
                </li>
              </ul>
            </div>
            <div className="linksFooter">
              <h4 className="font-semibold text-lg mb-2">مجموعه های منتخب</h4>
              <ul className="space-y-1">
                <li>
                  <a href="#">رستوران عسکری راد</a>
                </li>
                <li>
                  <a href="#">فست فود عطاویچ</a>
                </li>
                <li>
                  <a href="#">کافه جاکارتو</a>
                </li>
                <li>
                  <a href="#">فروشگاه افق کوروش</a>
                </li>
              </ul>
            </div>
            <div className="linksFooter">
              <h4 className="font-semibold text-lg mb-2">راهنمای مشتریان</h4>
              <ul className="space-y-1">
                <li>
                  <Link to={"/About"}>
                    <p>درباره ما</p>
                  </Link>
                </li>
                <li>
                  <Link to={"/CallMe"}>
                    <p>تماس با ما</p>
                  </Link>
                </li>
                <li>
                  <Link to={"/Suports"}>
                    <p>پشتیبانی</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* مجوزها */}
        <div className="flex justify-end items-center gap-6 mt-6">
          <img
            src="/src/assets/images/sibeSalamat.png"
            alt="mojavez3"
            className="w-20 h-20"
          />
          <img
            src="/src/assets/images/iconEtemad.png"
            alt="mojavez2"
            className="w-20 h-20"
          />
          <img
            src="/src/assets/images/estandard.png"
            alt="mojavez1"
            className="w-20 h-20"
          />
        </div>

        {/* کپی رایت */}
        <div className="text-center text-xl text-gray-500 mt-4 border-t pt-2">
          <span className="text-xl font-bold mx-1">&copy;</span>
          {new Date().getFullYear()} تمامی لوگو ها، عکس ها و سایر محتوا های قرار
          داده شده با احترام متعلق به <strong>چنگال</strong> است و امتیاز
          استفاده از این اطلاعات تنها برای <strong>چنگال</strong> مجاز است{" "}
        </div>
      </footer>
    </>
  );
}
function Home() {
  return (
    <>
      <CTASection />
      <Categury />
      <MyAroundShop />
      <OfferCard />
      <Footer />
    </>
  );
}
export { Home };
export { HeroSection };
export { CTASection };
export { Footer };
