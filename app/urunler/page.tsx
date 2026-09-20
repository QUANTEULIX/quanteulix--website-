import Urun from "../../component/urun";
import Ust_baslik from "../../component/ust_baslik";

const urunler = [
    {
        id: 1,
        isim: "QUANTEULIX Q1",
        aciklama:
            "Polarizasyon tabanlı kuantum deneyleri için geliştirilen demonstratör sistemi.",
        resim: "/images/quanteulix_logo.png",
    },
    {
        id: 2,
        isim: "QUANTEULIX Sensor",
        aciklama:
            "Deneysel ölçümler için geliştirilen sensör ve veri toplama modülü.",
        resim: "/images/quanteulix_logo.png",
    },
    {
        id: 3,
        isim: "QUANTEULIX Lab",
        aciklama:
            "Eğitim ve araştırma çalışmalarında kullanılmak üzere tasarlanan deney platformu.",
        resim: "/images/quanteulix_logo.png",
    },
];

export default function Urunler() {
    return (
        <>
            <Ust_baslik />
            <main className="min-h-screen bg-gray-50">

            {/* Sayfa başlığı */}
            <section className="px-6 pb-12 pt-20 text-center">

                <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                    QUANTEULIX
                </p>

                <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                    Ürünlerimiz
                </h1>

                <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 md:text-lg">
                    Araştırma, eğitim ve deneysel çalışmalar için
                    geliştirdiğimiz sistemleri keşfedin.
                </p>

            </section>

            {/* Ürünler */}
            <section className="mx-auto max-w-7xl px-6 pb-20">

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                    {urunler.map((urun) => (
                        <Urun
                            key={urun.id}
                            isim={urun.isim}
                            aciklama={urun.aciklama}
                            resim={urun.resim}
                        />
                    ))}

                </div>

            </section>

            </main>
        </>
    );
}