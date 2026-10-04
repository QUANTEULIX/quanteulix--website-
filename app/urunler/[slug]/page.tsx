import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { urunler } from "../urun-data";
import HitboxDiagram from "@/component/hitboxdiagrami";

type UrunDetayPageProps = {
    params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
    return urunler.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
    params,
}: UrunDetayPageProps): Promise<Metadata> {
    const { slug } = await params;
    const urun = urunler.find((item) => item.slug === slug);

    if (!urun) {
        return { title: "Ürün bulunamadı" };
    }

    return {
        title: urun.isim,
        description: urun.aciklama,
    };
}

export default async function UrunDetayPage({
    params,
}: UrunDetayPageProps) {
    const { slug } = await params;

    const urun = urunler.find((item) => item.slug === slug);

    if (!urun) {
        notFound();
    }

    return (
        <main>
            <section className="pageHero productDetailHero">
                <div className="container narrow">
                    <p className="eyebrow">{urun.kategori}</p>

                    <h1>{urun.isim}</h1>

                    <p>{urun.aciklama}</p>
                </div>
            </section>

            <section className="section productDetailSection">
                <div className="container productDetail">
                    <div className="productDetailVisual">
                        <Image
                            src={urun.resim}
                            alt={`${urun.isim} ürün görseli`}
                            fill
                            sizes="(max-width: 760px) 100vw, 50vw"
                            priority
                        />
                    </div>

                    <div className="productDetailCopy">
                        <p className="productCategory">
                            ÜRÜN HAKKINDA
                        </p>

                        <h2>
                            {urun.isim} çalışmalarınızı keşfedin.
                        </h2>

                        <p>{urun.detay}</p>

                        <Link
                            className="productBackLink"
                            href="/urunler"
                        >
                            <span aria-hidden="true">
                                &lt;-
                            </span>{" "}
                            Tüm ürünlere dön
                        </Link>
                    </div>
                </div>
            </section>

            <section className="section productDetailSection">
                <div className="width-full flex justify-center">
                    <div className="w-300">
                        <p>
                            Ürünün konum üretebilmesi için yüksek
                            hassasiyette ölçüm yapması ve bu ölçümü
                            yüksek hassasiyetle veriye çevirmesi
                            gerekmektedir. Prototip-1, gerekli
                            hassasiyete modülde ulaşılabilirliği
                            test ettiğimiz prototiptir. Prototipte
                            polarizasyon verilerinden açı bilgisi
                            üretmek hedeflenmiştir.
                        </p>

                        <HitboxDiagram />
                    </div>
                </div>
            </section>
        </main>
    );
}