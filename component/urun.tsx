import Image from "next/image";
import Link from "next/link";

type UrunProps = {
    slug: string;
    isim: string;
    aciklama: string;
    resim: string;
    kategori: string;
};

export default function Urun({
    slug,
    isim,
    aciklama,
    resim,
    kategori,
}: UrunProps) {
    return (
        <Link className="productCardLink" href={`/urunler/${slug}`}>
            <article className="productCard">
                <div className="productVisual">
                    <span className="productGrid" aria-hidden="true" />
                    <Image
                        src={resim}
                        alt={`${isim} ürün görseli`}
                        fill
                        sizes="(max-width: 760px) 100vw, (max-width: 1080px) 50vw, 33vw"
                        className="productImage"
                    />
                </div>
                <div className="productBody">
                    <p className="productCategory">{kategori}</p>
                    <h2>{isim}</h2>
                    <p>{aciklama}</p>
                    <span className="productStatus">Ürünü incele <span aria-hidden="true">-&gt;</span></span>
                </div>
            </article>
        </Link>
    );
}
