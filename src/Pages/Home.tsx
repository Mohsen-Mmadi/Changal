import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
function HeroSection() {


    return (
        
        <section  className="relative w-full h-[70vh] flex justify-center items-center overflow-hidden">

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
function CTASection (){
    return(
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
function Home() {
    return (
        <>
            <HeroSection />
            <CTASection />
        </>
    )
}
export { Home }