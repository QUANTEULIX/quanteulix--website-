import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

type ProductCardProps = Pick<Product, "slug" | "isim" | "aciklama" | "resim" | "kategori">;

export default function ProductCard({
    slug,
    isim,
    aciklama,
    resim,
    kategori,
}: ProductCardProps) {
    return (
        <Link className="productCardLink" href={`/urunler/${slug}`}>
            <article className="productCard">
                <div className="productVisual">
                    <Image
                        src={resim}
                        alt={`${isim} ürün görseli`}
                        fill
                        sizes="(max-width: 760px) 100vw, (max-width: 1080px) 50vw, 33vw"
                        className="productImage"
                        unoptimized
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
