import Image from "next/image";
import Link from "next/link";

const navigation = [
    { href: "/", label: "Ana Sayfa" },
    { href: "/urunler", label: "Ürünler" },
    { href: "/hakkimizda", label: "Hakkımızda" },
    { href: "/iletisim", label: "İletişim" },
];

export default function SiteHeader() {
    return (
        <header className="siteHeader">
            <div className="container headerInner">
                <Link className="brandLink" href="/" aria-label="Quanteulix ana sayfa">
                    <span className="brandMark">
                        <Image src="/images/quanteulix_logo.png" alt="" width={42} height={42} priority />
                    </span>
                    <span>QUANTEULIX</span>
                </Link>
                <nav className="mainNav" aria-label="Ana menü">
                    {navigation.map((item) => (
                        <Link href={item.href} key={item.href}>{item.label}</Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
