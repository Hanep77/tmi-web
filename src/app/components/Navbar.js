"use client"
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
    const [navDrop, setNavDrop] = useState(false)

    function handleNavDrop() {
        setNavDrop(!navDrop)
    }

    return (
        <nav className="absolute w-full z-30 flex justify-center">
            <div className="flex items-center justify-between container mx-5 md:mx-0">
                <div className="py-[1rem]">
                    <Image src="/logo.png" width={250} height={250} />
                </div>
                <div>
                    <ul className={`${navDrop ? 'flex' : 'hidden md:flex'} flex-col md:flex-row absolute md:static top top-28 left-8 right-8 border border-slate-600 md:border-none rounded md:rounded-none bg-slate-100 bg-opacity-10 backdrop-blur-md md:backdrop-blur-0 md:bg-inherit p-4 md:p-0 gap-5 items-center font-semibold`}>
                        <li>
                            <a href="/" className="text-white hover:text-[#FF6600]">Beranda</a>
                        </li>
                        <li>
                            <a href="/contact" className="text-white hover:text-[#FF6600]">Tentang Kami</a>
                        </li>
                        <li>
                            <a href="/about" className="text-white hover:text-[#FF6600]">Layanan</a>
                        </li>
                        <li>
                            <a href="/contact" className="text-white hover:text-[#FF6600]">Produk</a>
                        </li>
                        <li>
                            <a href="/contact" className="text-white hover:text-[#FF6600]">KiosK</a>
                        </li>
                    </ul>
                </div>
                <button type="button" className="flex flex-col gap-2 md:hidden" onClick={handleNavDrop}>
                    <div className="h-1 w-8 bg-slate-300 rounded"></div>
                    <div className="h-1 w-8 bg-slate-300 rounded"></div>
                    <div className="h-1 w-8 bg-slate-300 rounded"></div>
                </button>
            </div>
        </nav>
    )
}