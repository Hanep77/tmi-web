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

export default LayananPage