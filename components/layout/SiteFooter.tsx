import Link from "next/link";

export default function SiteFooter() {
    return (
        <footer className="siteFooter">
            <div className="container footerGrid">
                <div>
                    <p className="footerBrand">QUANTEULIX</p>
                    <p className="footerDescription">Kuantum teknolojileri ve ileri mühendislik için yeni nesil çözümler.</p>
                </div>
                <div>
                    <p className="footerHeading">Keşfedin</p>
                    <div className="footerLinks">
                        <Link href="/urunler">Ürünler</Link>
                        <Link href="/hakkimizda">Hakkımızda</Link>
                        <Link href="/iletisim">İletişim</Link>
                    </div>
                </div>
                <div>
                    <p className="footerHeading">İletişim</p>
                    <a className="footerEmail" href="mailto:info@quanteulix.com">info@quanteulix.com</a>
                </div>
            </div>
            <div className="container footerBottom">© 2026 Quanteulix. Tüm hakları saklıdır.</div>
        </footer>
    );
}
