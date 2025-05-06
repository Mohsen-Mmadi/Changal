import "../../CSS/App.css";
import fenjaneh from '../../assets/images/Cafee-Fenjaneh.jpg';
import esperso from '../../assets/images/food/esperso.jpg';
import lateh from '../../assets/images/food/lateh.jpg';
import kasni from '../../assets/images/food/kasni.jpg';
import abporteghal from '../../assets/images/food/abporteghal.jpg';
import krosan from '../../assets/images/food/krosan.jpg';
import eshtrodel from '../../assets/images/food/eshtrodel.jpg';
import { Footer } from "../Home";

type menu = {
  id: number;
  title: string;
  image: string;
  ditales?: string;
  price: number;
};
let barHot: menu[] = [
  {
    id: 1,
    title: "اسپرسو",
    image: esperso,
    price: 38000,
  },
  {
    id: 2,
    title: "لاته",
    image: lateh,
    price: 65000,
  },
  
];
let barCold: menu[] = [
  {
    id: 1,
    title: "شربت کاسنی ",
    image: kasni,
    price: 32000,
  },
  {
    id: 2,
    title: "شربت آب پرتقال",
    image: abporteghal,
    price: 30000,
  },
  
];
let asraneh: menu[] = [
  {
    id: 1,
    title: "اشترودل",
    image: eshtrodel,
    price: 60000,
  },
  {
    id: 2,
    title: "کروسان",
    image: krosan,
    price: 25000,
  },
  
];
function CafeeBanner() {
  return (
    <section className="relative w-full h-[70vh] flex justify-center items-center overflow-hidden">
      {/* لایه عکس بلور شده */}
      <div className="absolute inset-0 backgroundBlur">
        <img
          src={fenjaneh}
          alt="نمایشگاه"
          className="w-full h-full object-cover "
        />
      </div>

      {/* محتوای واضح روی عکس */}
      {/* <div className="relative z-10 text-center ">
        
      </div> */}
    </section>
  );
}

function CafeeProfile() {
  const time = new Date();

  const isOpenNow = time.getHours() >= 9 && time.getHours() <= 22;

  const restaurant = {
    id: 1,
    title: "کافه فنجانه",
    image: fenjaneh,
    location: "شهرک مطهری",
    score: 4.1,
    patch: "/Cafee/Femjaneh",
    isOpen: isOpenNow,
    workTime: "9-23",
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 max-w-6xl mx-auto">
      {/* تصویر + وضعیت */}
      <div className="relative w-full h-full">
        <img
          src={restaurant.image}
          alt={restaurant.title}
          className="rounded-2xl w-full h-[32vh] object-cover shadow-lg "
        />

        <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md rounded-xl p-3 shadow-md flex flex-col items-start">
          <span
            className={`text-sm font-semibold px-3 py-1 rounded-full text-white ${
              restaurant.isOpen ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {restaurant.isOpen ? "آنلاین" : "آفلاین"}
          </span>
          <span className="text-gray-800 text-sm mt-1">
            {restaurant.isOpen
              ? "آماده‌ی سفارش هستیم"
              : "در حال حاضر سفارش نمی‌پذیرد"}
          </span>
        </div>
      </div>
      {/* اطلاعات متنی */}
      <div className="flex flex-col justify-center gap-4 text-right">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 fontTitr">
          {restaurant.title}
        </h1>

        <p className="text-xl text-gray-700 flex items-center gap-2">
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
          {restaurant.score}
        </p>

        <p className="text-xl fontText text-gray-700 flex items-center gap-2">
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
          {restaurant.location}
        </p>

        <p className="text-lg text-gray-700 fontText">
          <span className="font-semibold text-xl text-gray-900">
            ساعت کاری:
          </span>{" "}
          {restaurant.workTime}
        </p>

        <div className="flex flex-wrap gap-4 mt-2">
          <button className="bg-orange-500  hover:bg-orange-600 transition px-4 py-2 rounded-lg text-white font-semibold">
            <a href="#barHot">منوی کافه</a>
          </button>
          <button className="bg-slate-600  hover:bg-slate-700 transition px-4 py-2 rounded-lg text-white font-semibold">
            <a href="#">نظرات کاربران</a>
          </button>
        </div>
      </div>
    </div>
  );
}
function MenuTabs() {
  return (
    <>
      <div className="w-full p-3 mb-3 componentColor border-b-4 border-orange-500 fontTitr">
        {/* عنوان */}
        <div className="w-full text-center mb-4">
          <h1 className="text-3xl font-bold">منوی کافه</h1>
        </div>

        {/* دکمه‌ها */}
        <div className="flex justify-center flex-wrap gap-2 text-2xl">
          <button className="px-4 py-2 border-4 border-orange-500 bg-orange-300 rounded-md hover:opacity-95">
            <a href="#barHot">بار گرم</a>
          </button>
          <button className="px-4 py-2 border-4 border-orange-500 bg-orange-300 rounded-md hover:opacity-95">
            <a href="#barCold">بار سرد</a>
          </button>
          <button className="px-4 py-2 border-4 border-orange-500 bg-orange-300 rounded-md hover:opacity-95">
            <a href="#asraneh">عصرانه</a>
          </button>
        </div>
      </div>
    </>
  );
}
function Menu() {
  return (
    <>
      
      <h1 id="barHot" className="fontTitr font-bold text-3xl text-center ">
        بار گرم
      </h1>

      <div className="grid md:grid-cols-2 gap-6 px-4 md:px-20 mt-5 mb-5">
        {barHot.map((item) => (
          <div
            key={item.id}
            className="flex bg-white rounded-xl  overflow-hidden  max-w-xl w-full mx-auto gap-x-20 md:gap-0"
          >
            {/* عکس غذا */}
            <div className="w-40 h-40 shrink-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover rounded-l-xl"
              />
            </div>

            {/* جزئیات غذا */}
            <div className="flex flex-col justify-between p-4 w-full">
              <div>
                <h2 className="fontText font-bold text-lg mb-2">
                  {item.title}
                </h2>
                <p className="fontText text-gray-700">
                  {item.price.toLocaleString()} <span>تومان</span>
                </p>
              </div>

              {/* دکمه افزودن */}
              <button className="bg-orange-500 text-white flex items-center justify-center gap-2 px-3 py-1 rounded-md self-start mt-4 hover:bg-orange-600 transition">
                افزودن
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  fill="#000"
                  className="bg-white rounded-md"
                >
                  <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
      <h1 id="barCold" className="fontTitr font-bold text-3xl text-center ">
         بار سرد
      </h1>
      <div className="grid md:grid-cols-2 gap-6 px-4 md:px-20 mt-5 mb-5">
        {barCold.map((item) => (
          <div
            key={item.id}
            className="flex bg-white rounded-xl  overflow-hidden  max-w-xl w-full mx-auto gap-x-20 md:gap-0"
          >
            {/* عکس غذا */}
            <div className="w-40 h-40 shrink-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover rounded-l-xl"
              />
            </div>

            {/* جزئیات غذا */}
            <div className="flex flex-col justify-between p-4 w-full">
              <div>
                <h2 className="fontText font-bold text-lg mb-2">
                  {item.title}
                </h2>
                <p className="fontText text-gray-700">
                  {item.price.toLocaleString()} <span>تومان</span>
                </p>
              </div>

              {/* دکمه افزودن */}
              <button className="bg-orange-500 text-white flex items-center justify-center gap-2 px-3 py-1 rounded-md self-start mt-4 hover:bg-orange-600 transition">
                افزودن
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  fill="#000"
                  className="bg-white rounded-md"
                >
                  <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                </svg>
              </button>
            </div>
          </div>
        ))}
        
      </div>
      <h1 id="asraneh" className="fontTitr font-bold text-3xl text-center ">
         عصرانه
      </h1>
      <div className="grid md:grid-cols-2 gap-6 px-4 md:px-20 mt-5 mb-5">
        {asraneh.map((item) => (
          <div
            key={item.id}
            className="flex bg-white rounded-xl  overflow-hidden  max-w-xl w-full mx-auto gap-x-20 md:gap-0"
          >
            {/* عکس غذا */}
            <div className="w-40 h-40 shrink-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover rounded-l-xl"
              />
            </div>

            {/* جزئیات غذا */}
            <div className="flex flex-col justify-between p-4 w-full">
              <div>
                <h2 className="fontText font-bold text-lg mb-2">
                  {item.title}
                </h2>
                <p className="fontText text-gray-700">
                  {item.price.toLocaleString()} <span>تومان</span>
                </p>
              </div>

              {/* دکمه افزودن */}
              <button className="bg-orange-500 text-white flex items-center justify-center gap-2 px-3 py-1 rounded-md self-start mt-4 hover:bg-orange-600 transition">
                افزودن
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  fill="#000"
                  className="bg-white rounded-md"
                >
                  <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                </svg>
              </button>
            </div>
          </div>
        ))}
        
      </div>
    </>
  );
}
function Fenjaneh() {
  return (
    <>
      <CafeeBanner />
      <CafeeProfile />
      <MenuTabs />
      <Menu />
      <Footer />
    </>
  );
}
export { Fenjaneh };
