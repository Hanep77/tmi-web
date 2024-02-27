import Image from "next/image";

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
        <div className="flex flex-col lg:flex-row min-h-screen lg:h-screen overflow-hidden">

            <div className="bg-green-100 p-5 flex flex-col justify-end lg:items-center gap-2 lg:pb-20 lg:text-center group h-60 lg:h-full lg:w-1/3 lg:hover:w-[36%] transition-[width]">
                <h3 className="text-lg font-semibold lg:group-hover:-translate-y-8 transition duration-200">System Integrator</h3>
                <p className="lg:w-80 text-sm lg:group-hover:-translate-y-8 transition duration-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi maxime aut ipsum facere iusto beatae dicta, nesciunt labore exercitationem modi ipsa vel iste sapiente reprehenderit, eveniet provident, asperiores laborum? Optio.</p>
                <button className="h-10 w-40 px-5 border border-black mt-2 rounded-full lg:opacity-0 lg:group-hover:opacity-100 transition duration-200 lg:group-hover:-translate-y-2 hover:bg-slate-600 hover:text-slate-100">selengkapnya...</button>
            </div>
            <div className="bg-slate-100 p-5 flex flex-col justify-end lg:items-center gap-2 lg:pb-20 lg:text-center group h-60 lg:h-full lg:w-1/3 lg:hover:w-2/5 transition-[width]">
                <h3 className="text-lg font-semibold lg:group-hover:-translate-y-8 transition duration-200">System Integrator</h3>
                <p className="lg:w-80 text-sm lg:group-hover:-translate-y-8 transition duration-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi maxime aut ipsum facere iusto beatae dicta, nesciunt labore exercitationem modi ipsa vel iste sapiente reprehenderit, eveniet provident, asperiores laborum? Optio.</p>
                <button className="h-10 w-40 px-5 border border-black mt-2 rounded-full lg:opacity-0 lg:group-hover:opacity-100 transition duration-200 lg:group-hover:-translate-y-2 hover:bg-slate-600 hover:text-slate-100">selengkapnya...</button>
            </div>
            <div className="bg-blue-100 p-5 flex flex-col justify-end lg:items-center gap-2 lg:pb-20 lg:text-center group h-60 lg:h-full lg:w-1/3 lg:hover:w-2/5 transition-[width]">
                <h3 className="text-lg font-semibold lg:group-hover:-translate-y-8 transition duration-200">System Integrator</h3>
                <p className="lg:w-80 text-sm lg:group-hover:-translate-y-8 transition duration-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi maxime aut ipsum facere iusto beatae dicta, nesciunt labore exercitationem modi ipsa vel iste sapiente reprehenderit, eveniet provident, asperiores laborum? Optio.</p>
                <button className="h-10 w-40 px-5 border border-black mt-2 rounded-full lg:opacity-0 lg:group-hover:opacity-100 transition duration-200 lg:group-hover:-translate-y-2 hover:bg-slate-600 hover:text-slate-100">selengkapnya...</button>
            </div>
        </div>
    );
};

export default LayananPage