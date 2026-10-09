import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { urunler } from "@/data/products";
import HitboxDiagram from "@/components/products/HitboxDiagram";
import PcbShowcase from "@/components/products/PcbShowcase";

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
                            unoptimized
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

            {urun.teknikAciklama && (
                <section className="section sectionSoft technicalSection">
                    <div className="container technicalContent">
                        <div className="sectionIntro">
                            <p className="eyebrow">SİSTEM MİMARİSİ</p>
                            <h2>Ölçümden açı bilgisine uzanan akış.</h2>
                            <p>{urun.teknikAciklama}</p>
                        </div>
                        <HitboxDiagram />
                    </div>
                </section>
            )}

            {urun.pcbs && urun.pcbs.length > 0 && (
                <section className="section pcbSection">
                    <div className="container">
                        <div className="sectionIntro">
                            <p className="eyebrow">ELEKTRONİK KARTLAR</p>
                            <h2>Her kartı 3 boyutta inceleyin.</h2>
                            <p>
                                Kartı sürükleyerek tüm yüzeylerini inceleyebilir,
                                altındaki açıklamadan sistemdeki görevini görebilirsiniz.
                            </p>
                        </div>
                        <PcbShowcase boards={urun.pcbs} />
                    </div>
                </section>
            )}
        </main>
    );
}
