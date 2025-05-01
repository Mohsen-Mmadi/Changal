import { Outlet,Link } from "react-router-dom";
import { Footer } from "./Home";


let time = new Date();
function openingHours() {
  if (time.getHours() >= 8 && time.getHours() <= 22) {
    return true;
  } else {
    return false;
  }
}
type Restaurant = {
    id: number;
    title: string;
    image: string;
    location: string;
    score: number;
    patch: string;
    isOpen: boolean;
  };
let myNearbyRestaurant: Restaurant[] = [
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
      title: "رستوران کارآموزیان",
      image: "/src/assets/images/RS-Karamoozian.jpg",
      location: "میدان قرنی",
      score: 4.5,
      patch: "/Rasturants/Karamoozian",
      isOpen: openingHours(),
    },
    
  ];
  let allRestaurants:Restaurant[]=[
    
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
        title: "رستوران کارآموزیان",
        image: "/src/assets/images/RS-Karamoozian.jpg",
        location: "میدان قرنی",
        score: 4.5,
        patch: "/Rasturants/Karamoozian",
        isOpen: openingHours(),
      },
      {
        id: 3,
        title: "رستوران سنتی مکث",
        image: "/src/assets/images/RS-Max.jpg",
        location: "بلوار جمهوری",
        score: 4,
        patch: "/Rasturants/Max",
        isOpen: openingHours(),
      },
      {
        id: 4,
        title: "رستوران صحرا",
        image: "/src/assets/images/RS-Sahra.jpg",
        location: "خیابان 24 آذر",
        score: 4.2,
        patch: "/Rasturants/Sahra",
        isOpen: openingHours(),
      },
  ]
function NearbyRestaurant() {
    return (
      <>
        <div className="flex mr-2 mt-5 pr-6">
          <h1 className=" fontTitr font-bold text-4xl "> منتخب های چنگال!</h1>
        </div>
  
        <section className="grid grid-cols-2 md:grid-cols-4 gap-3 p-5 items-center justify-between m-3">
          {myNearbyRestaurant.map((item) => (
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
  function AllRestaurants() {
    return (
      <>
        <div className="flex mr-2 mt-5 pr-6">
          <h1 className=" fontTitr font-bold text-4xl "> رستوران های چنگال!</h1>
        </div>
  
        <section className="grid grid-cols-2 md:grid-cols-4 gap-3 p-5 items-center justify-between m-3">
          {allRestaurants.map((item) => (
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
function Rasturants(){
    return(
        <>
        <Outlet/>
        <NearbyRestaurant />
        <AllRestaurants />
        <Footer />
        </>
    )
}
export {Rasturants} 