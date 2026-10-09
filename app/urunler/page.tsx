import ProductCard from "@/components/products/ProductCard";
import { urunler } from "@/data/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ürünler",
    description: "Quanteulix araştırma, eğitim ve deney sistemleri.",
};

export default function Urunler() {
    return (
        <main>
            <section className="pageHero">
                <div className="container narrow">
                    <p className="eyebrow">ÜRÜNLER (ÜRÜN EKOSİSTEMİ)</p>
                    <h1>Araştırmadan uygulamaya.</h1>
                    <p>Araştırma, eğitim ve deneysel çalışmalar için geliştirdiğimiz sistemleri keşfedin.</p>
                </div>
            </section>
            <section className="section productSection">
                <div className="container productGrid">
                    {urunler.map((urun) => <ProductCard key={urun.id} {...urun} />)}
                </div>
            </section>
        </main>
    );
}
