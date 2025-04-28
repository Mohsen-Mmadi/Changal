import { useState, useEffect } from "react";
import { Navigate, Link } from "react-router-dom";
import { Fastfoods } from "./Fastfood";

// TODO types
type categury = {
    id: number,
    title: string,
    icon: string,
    patch: string
}

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
                <p className="text-lg text-white fontText">سفارش غذای آنلاین با سرعت و کیفیت</p>
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
                    <select name="" id="" className="bg-slate-200 w-1/2 
                h-[3rem] p-2 open:mb-5">
                        <option value="کرمان">کرمان</option>
                    </select>
                    <a href="#" className="fontText font-bold textBrand">
                        انتخاب بر اساس نقشه〱
                    </a>
                    <button type="button" className="fontTitr p-2 m-2 rounded-md btnColor text-white">
                        <a href="#" >بزن بریم←</a>
                    </button>
                </div>
                <div className="p-5 justify-center m-auto ">
                    <img src="/src/assets/images/motorcycleCourier.png" alt="motorcycle" />
                </div>
            </div>
        </>
    )
}
let categuries: categury[] = [
    { id: 1, title: 'رستوران', icon: '/src/assets/Icons/Restaurant-icon.png', patch: "Rasturants" },
    { id: 2, title: 'فست فود', icon: '/src/assets/Icons/FastFood-icon.png', patch: "Fastfoods" },
    { id: 3, title: 'کافه', icon: '/src/assets/Icons/Cofee-icon.png', patch: "Cafees" },
    { id: 4, title: 'سوپر مارکت', icon: '/src/assets/Icons/Market-icon.png', patch:"Markets" }
]
function Categury() {

    return (
        <>
            <section className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 items-center justify-between m-3">
                {categuries.map((item) => (
                    <Link to={item.patch} key={item.id}>
                        <div className="p-5 componentColor rounded-md m-auto text-center cursor-pointer">
                            <img src={item.icon} alt={item.title} className="rounded-full w-[50px] h-[50px] m-auto" />
                            <span className="mt-2 text-sm font-bold fontTitr">{item.title}</span>
                        </div>
                    </Link>
                ))}
            </section>
        </>
    )
}

function Home() {
    return (
        <>
            
            <CTASection />
            <Categury />
        </>
    )
}
export { Home }
export { HeroSection }
export { CTASection }