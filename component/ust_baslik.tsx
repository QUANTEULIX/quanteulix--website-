import Image from "next/image";

export default function Ust_baslik() {
    return (
        <header className="grid grid-cols-3 items-center bg-gray-800 px-8 py-4 text-white">

            <div className="flex items-center gap-3">
                <Image
                    src="/images/quanteulix_logo.png"
                    alt="Quanteulix logo"
                    width={40}
                    height={40}
                />

                <h1 className="text-2xl font-bold">
                    Quanteulix
                </h1>
            </div>

            <nav className="flex justify-center items-center gap-3">
                <button className="rounded px-4 py-2 hover:bg-gray-700">
                    Ana Sayfa
                </button>
                <button className="rounded px-4 py-2 hover:bg-gray-700">
                    Hakkımızda
                </button>

                <button className="rounded px-4 py-2 hover:bg-gray-700">
                    İletişim
                </button>

                <button className="rounded px-4 py-2 hover:bg-gray-700">
                    Ürünler
                </button>
            </nav>

        </header>
    );
}