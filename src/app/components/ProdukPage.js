import Image from "next/image";

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
            productDescAlign: "md:order-1",
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
            {productItem.map(item => {
                return (
                    <div key={item.productId} className="mb-[100px]">
                        <div className="flex flex-col md:flex-row gap-4">
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

export default ProdukPage