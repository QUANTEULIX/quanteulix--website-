import Image from "next/image";

type UrunProps = {
    isim: string;
    aciklama: string;
    resim: string;
};

export default function Urun({
    isim,
    aciklama,
    resim,
}: UrunProps) {
    return (
        <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

            {/* Ürün görseli */}
            <div className="relative flex h-56 items-center justify-center bg-gray-50 p-6">
                <Image
                    src={resim}
                    alt={isim}
                    fill
                    className="object-contain p-6 transition duration-300 group-hover:scale-105"
                />
            </div>

            {/* Ürün bilgileri */}
            <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900">
                    {isim}
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                    {aciklama}
                </p>

                <button className="mt-5 font-medium text-blue-600 transition hover:text-blue-800">
                    Detayları Gör →
                </button>
            </div>

        </article>
    );
}
