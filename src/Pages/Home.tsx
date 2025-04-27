import { useState, useEffect } from "react";

function RotatingSection() {


    return (
        //   <section id="showCase" className="w-full h-screen flex justify-center items-center ">
        //     <img src="/src/assets/images/showCase-picture.jpg" alt="sss" />
        //   </section>
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
                <p className="text-lg text-white ">سفارش غذای آنلاین با سرعت و کیفیت</p>
            </div>

        </section>


    );
}
function Home() {
    return (
        <>
            <RotatingSection />
        </>
    )
}
export { Home }