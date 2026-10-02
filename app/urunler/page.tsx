import Urun from "../../component/urun";
import type { Metadata } from "next";
import { urunler } from "./urun-data";

export const metadata: Metadata = {
    title: "Ürünler",
    description: "Quanteulix araştırma, eğitim ve deney sistemleri.",
};

export default function Urunler() {
    return (
        <main>
            <section className="pageHero">
                <div className="container narrow">
                    <p className="eyebrow">ÜRÜN EKOSİSTEMİ</p>
                    <h1>Araştırmadan uygulamaya.</h1>
                    <p>Araştırma, eğitim ve deneysel çalışmalar için geliştirdiğimiz sistemleri keşfedin.</p>
                </div>
            </section>
            <section className="section productSection">
                <div className="container productGrid">
                    {urunler.map((urun) => <Urun key={urun.id} {...urun} />)}
                </div>
            </section>
        </main>
    );
}
