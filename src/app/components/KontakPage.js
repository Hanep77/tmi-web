import Image from "next/image";

const KontakPage = () => {
    return (
        <div class="grid md:grid-cols-3 gap-4 text-white content-start flex-row">
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

export default KontakPage