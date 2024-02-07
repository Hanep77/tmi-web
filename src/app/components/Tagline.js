export default function Tagline() {
    return (
        <div class="h-screen w-full pt-20 relative">
            <div class="absolute bottom-20 right-8 md:right-16">
                <div className="space-y-3">
                    <div className="text-white text-5xl md:text-[80px]">
                        <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all rounded group py-4">
                            {/* purple box */}
                            <span className="w-0 h-0 rounded bg-[#FF6600] absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                            <span className=" font-roboto p-2 w-full text-white transition-colors duration-300 ease-in-out group-hover:text-black z-10">
                                #Inovasi
                            </span>
                        </button>
                    </div>
                    <div className="text-white text-3xl md:text-[50px]">
                        <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all rounded group  py-4">
                            {/* purple box */}
                            <span className="w-0 h-0 rounded bg-[#FF6600] absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                            <span className="p-2 w-full text-white transition-colors duration-300 ease-in-out group-hover:text-black z-10">
                                #TransformasiDigital
                            </span>
                        </button>
                    </div>
                    <div className="text-white text-3xl md:text-[50px]">
                        <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all rounded group py-4">
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
    )
}