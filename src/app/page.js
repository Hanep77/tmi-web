"use client";
import React, { useState } from "react";
// import Carousel from "react-elastic-carousel";
import { EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide, Autoplay } from "swiper/react";
import Image from "next/image";
// import Swiper styles
import "swiper/css";
import "swiper/css/virtual";
import "swiper/css/autoplay";
import { SidePanel } from "./components";
import ProdukPage from "./components/ProdukPage";
import KontakPage from "./components/KontakPage";
import LayananPage from "./components/LayananPage";
import TensorFlow from "./components/TensorFlow";
import Tagline from "./components/Tagline";

// const Content = ({ page, children }) => {
//   const data = {
//     Home: <Homepage />,
//     Layanan: <LayananPage />,
//     Produk: <ProdukPage />,
//     Kontak: <KontakPage />,
//   };

//   return <div className="p-3">{data[page]}</div>;
// };

const Home = () => {
  // const [pageActive, setPageActive] = useState("Home");

  // const changeSlide = (pageName) => {
  //   setPageActive(pageName);
  // };

  return (
    <>
      <section id="hero" className="min-h-screen">
        <video
          autoPlay="autoplay"
          loop="loop"
          muted
          className="absolute w-full h-screen"
          style={{
            position: "absolute",
            height: "100vh",
            width: "100%",
            objectFit: "cover",
          }}
        >
          <source src="/cloudsky.mp4" type="video/mp4" />
        </video>

        <Tagline />
      </section>

      <section id="product" className="flex justify-center">
        <div className="container mx-5 md:mx-0 py-8">
          <h3 className="font-roboto text-3xl text-[#FF6600] font-semibold text-center">Produk Kami</h3>
          <div>
            <ProdukPage />
          </div>
        </div>
      </section >

      <div className=" bg-white">
        <div className="p-[1rem] mx-[100px]">
          <div className="">
            <div>
              <LayananPage />
            </div>
          </div>
        </div>
      </div>


      <div className=" bg-white">
        <div className="p-[1rem] mx-[100px]">
          <div className="">
            <div>
              <TensorFlow />
            </div>
          </div>
        </div>
      </div>

      <section id="contact" className="bg-[#02081E] flex justify-center py-8">
        <div className="container mx-5 md:mx-0">
          <KontakPage />
        </div>
      </section>
    </>
  );
};

export default Home;
