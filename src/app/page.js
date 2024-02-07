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
import * as tf from "@tensorflow/tfjs";

const Homepage = () => {
  return <div>Halaman Home Page</div>;
};

const TensorFlow = () => {
  // console.log(tf.version)
  return <div>
    Halaman Tensor
  </div>
}

const LayananPage = () => {
  const productItem = [
    {
      productId: 40,
      productName: "x-Smartz",
      productDesc: "Sistem Informasi Manajemen Pemerintahan Cloud",
      isPlaystoreAvailable: false,
      productLinkDonwload: "",
      productImage: "/slide_4.jpg",
      productImageSize: {
        width: 100,
        height: 200,
      },
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-0 content-start flex-row h-[350px]">
      <div className="bg-green-100 bg-opacity-100 h-[300px]">
        System Integrator
      </div>
      <div className="bg-green-100 bg-opacity-100 h-[300px]">
        E-Commerce
      </div>
      <div className="bg-yellow-100"></div>
    </div>
  );
};

const ProdukPage = () => {
  const productItem = [
    // {
    //   productId: 10,
    //   productName: "Sakola Presensi",
    //   productImage: [
    //       "/sakola_presensi/1.png",
    //       "/sakola_presensi/2.png",
    //       "/sakola_presensi/3.png"
    //     ,
    //   ],
    // },
    // {
    //   productId: 10,
    //   productName: "Sakola Presensi",
    //   productDesc:
    //     "Aplikasi Gratis untuk manajemen kehadiran siswa dan guru di kelas, sehingga gak perlu repot untuk laporannya, aplikasi Sakola Presensi dapat di download di playstore secara gratis, dan Sakola Presensi Client dapat di download pada link dibawah",
    //   isPlaystoreAvailable: true,
    //   productLinkDonwload: "",
    //   productImage: "/sakola_presensi/1.png",
    //   productImageSize: {
    //     width: 400,
    //     height: 200,
    //   },
    // },
    {
      productId: 20,
      productName: "SIMCloud",
      productDesc:
        "SIMCloud adalah SAAS ( Software as a Services platform ) dimana sebuah informasi tergabung dalam satu sistem informasi ",
      isPlaystoreAvailable: false,
      productLinkDonwload: "",
      productImage: "/slide_1.jpg",
      productImageSize: {
        width: 900,
        height: 800,
      },
      productDescAlign: "order-1",
      productFeatures: [
        {
          headInfo: "Manajemen Barang",
          headDetail:
            "Manajemen pengeluaran dan pemasukan barang menjadi lebih mudah dan tertata dengan baik",
          icon: "/Green-Checklist.png",
        },
        {
          headInfo: "Pelaporan",
          headDetail: "Memudahkan pelaporan penggunaan dana anggaran",
          icon: "/Green-Checklist.png",
        },
        {
          headInfo: "Stok Opname",
          headDetail: "Pengecekan jumlah fisik jadi lebih mudah",
          icon: "/Green-Checklist.png",
        },
      ],
    },
    {
      productId: 30,
      productName: "E-RKBMD Electronic Perencanaan",
      productDesc:
        "Rencana Kebutuhan Barang Milik Daerah Elektronik memudahkan SKPD pada suatu pemda atau pemkot menjadi lebih mudah",
      isPlaystoreAvailable: false,
      productLinkDonwload: "",
      productImage: "/slide_4.jpg",
      productImageSize: {
        direction: "flex-row",
        width: 900,
        height: 200,
      },
      productDescAlign: "",
      productFeatures: [
        {
          headInfo: "Monitoring",
          headDetail: "Monitoring pengajuan data barang dan jasa dari SKPD",
          icon: "/Green-Checklist.png",
        },
        {
          headInfo: "Perencanaan",
          headDetail:
            "Manajemen pengeluaran dan pemasukan barang menjadi lebih mudah dan tertata dengan baik",
          icon: "/Green-Checklist.png",
        },
      ],
    },
    // {
    //   productId: 40,
    //   productName: "x-Smartz",
    //   productDesc: "Sistem Informasi Manajemen Pemerintahan Cloud",
    //   isPlaystoreAvailable: false,
    //   productLinkDonwload: "",
    //   productImage: "/slide_4.jpg",
    //   productImageSize : {
    //     width  : 100,
    //     height : 200
    //   }
    // },
  ];

  return (
    <div className="my-10">
      {productItem.map((item, index) => {
        return (
          <div key={item.productId} className="mb-[100px]">
            <div className="flex flex-row">
              <div className={`${item.productDescAlign} mx-5`}>
                <Image
                  src={item.productImage}
                  width={item.productImageSize.width}
                  height={item.productImageSize.height}
                  className="rounded-md "
                />

                {/* {item.productImage.map((item, index) => {
                      
                      // <span>{item}</span>
                      // <div>TESsdfddddddddddddddddddddddddT</div>
                    })} */}
              </div>
              <div className="mx-5 text-dark text-[12px] flex-wrap">
                <div>
                  <div className="text-[25px] font-bold">
                    {item.productName}
                  </div>
                  <div>{item.productDesc}</div>
                  {/* <div className="mt-10 bottom-0">
                        {item.isPlaystoreAvailable ? (
                          <Image
                            src="/sakola_presensi/badge_playstore.png"
                            height={100}
                            width={100}
                          />
                        ) : (
                          ""
                        )}
                      </div> */}
                </div>
                {item.productFeatures.map((item, index) => {
                  return (
                    <div key={index} className="my-3">
                      <div>
                        <div className=" bg-green-100 p-2 rounded-md flex flex-row">
                          <div className=" p-2">
                            <Image src={item.icon} width={40} height={40} />
                          </div>
                          <div>
                            <span className="text-[20px] font-bold">
                              {item.headInfo}
                            </span>
                            <div>{item.headDetail}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <a
                  href=""
                  className=" bg-blue-400 w-[100px] p-2 rounded-md font-bold text-white"
                >
                  Selengkapnya
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const KontakPage = () => {
  return (
    <div class="grid grid-cols-3 gap-4 content-start text-white content-start flex-row h-[250px]">
      <div>
        <div className="font-bold text-[20px] mb-3">
          <Image src="/logo.png" width={250} height={80} />
        </div>
        <div className="font-bold text-[20px] mb-3">
          CV. TRIDAYA MITRA INFORMATIKA
        </div>
        <div className="text-[11px]">
          <div>Jln. Ir. H Djuanda Kota Tasikmalaya</div>
          <div>Telp : ( 0265 ) 3160730</div>
          <div>WhatsApp : 085322288631</div>
          <div>Email : tdm.mitrainformatika@gmail.com</div>
        </div>
      </div>
      <div></div>
      <div>
        Tersedia di :
        <div className="flex flex-row space-x-9 mt-5">
          <div>
            <Image src="/ekatalog.png" width={150} height={50} />
          </div>
          <div>
            <Image src="/lpse.png" width={150} height={50} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="place-self-center">
      {/* Halaman Kontak Page */}
      <div className=" float-none">
        <div className="place-self-center text-white text-[11px]">
          <span className="">
            <center>Copyright 2023</center>
          </span>
        </div>
      </div>
    </div>
  );
};

const Content = ({ page, children }) => {
  const data = {
    Home: <Homepage />,
    Layanan: <LayananPage />,
    Produk: <ProdukPage />,
    Kontak: <KontakPage />,
  };

  return <div className="p-3">{data[page]}</div>;
};

const Home = () => {
  const [pageActive, setPageActive] = useState("Home");

  const changeSlide = (pageName) => {
    setPageActive(pageName);
  };

  return (
    <div className="lg:flex flex-col">
      <div className="min-h-screen  overflow-hidden">
        {/* Section Header */}

        {/* Section Main */}
        <video
          autoPlay="autoplay"
          loop="loop"
          muted
          style={{
            position: "absolute",
            height: "100vh",
            width: "100%",
            objectFit: "cover",
          }}
        >
          <source src="/cloudsky.mp4" type="video/mp4" />
        </video>
        <div className="min-h-screen">
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.55)", // Adjust the opacity as needed
            }}
            className="min-w-full h-screen"
          >
            <nav className="">
              <div className="container flex items-center justify-between">
                <div className="p-[1rem] mx-[100px]">
                  {/* <a href="/" className="text-white text-lg font-bold"> */}
                  <Image src="/logo.png" width={250} height={250} />
                  {/* </a> */}
                </div>
                <div className="absolute top-0 right-0 mx-[100px] my-10">
                  <ul className="flex space-x-10 text-[13px] font-bold sm:collapse lg:visible md:collapse">
                    <li>
                      <a href="/" className="text-white hover:text-[#FF6600]">
                        Beranda
                      </a>
                    </li>
                    <li>
                      <a
                        href="/contact"
                        className="text-white hover:text-[#FF6600]"
                      >
                        Tentang Kami
                      </a>
                    </li>
                    <li>
                      <a
                        href="/about"
                        className="text-white hover:text-[#FF6600]"
                      >
                        Layanan
                      </a>
                    </li>
                    <li>
                      <a
                        href="/contact"
                        className="text-white hover:text-[#FF6600]"
                      >
                        Produk
                      </a>
                    </li>
                    <li>
                      <a
                        href="/contact"
                        className="text-white hover:text-[#FF6600]"
                      >
                        KiosK
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div class="h-screen w-full ">
              <div class="w-40 h-40 top-1/2 left-2/3 absolute transform -translate-x-1/2">
                <div className="space-y-3">
                  <div className="text-white text-[80px]">
                    <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all rounded  group">
                      {/* purple box */}
                      <span className="w-0 h-0 rounded bg-[#FF6600] absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                      <span className=" font-roboto p-2 w-full text-white transition-colors duration-300 ease-in-out group-hover:text-black z-10">
                        #Inovasi
                      </span>
                    </button>
                  </div>
                  <div className="text-white text-[50px]">
                    <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all rounded  group">
                      {/* purple box */}
                      <span className="w-0 h-0 rounded bg-[#FF6600] absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                      <span className="p-2 w-full text-white transition-colors duration-300 ease-in-out group-hover:text-black z-10">
                        #TransformasiDigital
                      </span>
                    </button>
                  </div>
                  <div className="text-white text-[50px]">
                    <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all rounded  group">
                      {/* purple box */}
                      <span className="w-0 h-0 rounded bg-[#FF6600] absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                      <span className="p-2 w-full text-white transition-colors duration-300 ease-in-out group-hover:text-black z-10">
                        #Paperless
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className=" h-[125px] bg-[url('/background_web.png')] bg-center bg-cover bg-no-repeat bg-[#6EB5EB]"></div> */}
        </div>
        {/* Section Layanan */}
        <div>
          <div className="bg-[#E7E7E7]">
            {/* <Content page={pageActive} /> */}
            <div className=" bg-slate-50">
              <div className="p-[1rem] mx-[100px]">
                <div className="">
                  <div>
                    <span className="text-[30px] font-bold text-[#FF6600] font-roboto">
                      <center className=" font-roboto">Produk Kami</center>
                    </span>
                  </div>
                  <div>
                    <ProdukPage />
                  </div>
                </div>
              </div>
            </div>

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

            <div className=" bg-[#02081E]">
              <div className="p-[1rem] mx-[100px]">
                <div className="">
                  <div>
                    {/* <span className="text-[40px] font-bold text-white">
                      Kontak
                    </span> */}
                  </div>
                  <div>
                    <KontakPage />
                  </div>
                </div>
              </div>
            </div>

            {/* <div className=" bg-[#02081E]">
              <div className="p-[1rem] mx-[100px]">
                <div className="">
                  <div>
                    <Footer />
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
