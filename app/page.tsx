import Image from "next/image";
import type { Metadata } from "next";
import Ust_baslik from "../component/ust_baslik";

export const metadata: Metadata = {
  title: "QUANTEULIX",
  description:
    "Quanteulix - İleri teknoloji ve mühendislik çözümleri geliştiren teknoloji markası.",
};

export default function Home() {
  return (
    <>
      <Ust_baslik />
      <main className="page">
        <section className="hero">
          <div className="brand">
            <div className="logoWrap">
              <Image
                src="/images/quanteulix_logo.png"
                alt="Quanteulix Logo"
                width={210}
                height={210}
                priority
              />
            </div>

            <h1 className="title">QUANTEULIX</h1>
            <p className="tagline">Geleceği Teknolojiyle Şekillendiriyoruz.</p>
          </div>
        </section>

        <section className="about">
          <div className="aboutBox">
            <p className="eyebrow">QUANTEULIX</p>

            <h2>
              İleri teknoloji.
              <br />
              Gerçek dünya çözümleri.
            </h2>

            <p>
              Quanteulix, ileri teknoloji ve mühendislik çözümleri geliştirerek
              geleceğin sistemlerini tasarlamayı hedefleyen teknoloji odaklı bir
              markadır.
            </p>

            <p>
              Elektronik, yazılım, yapay zekâ ve otonom sistemler alanlarında
              yenilikçi çözümler geliştirmeye odaklanıyoruz.
            </p>
          </div>
        </section>

        <footer className="footer">
          <div className="footerInner">
            <div>
              <h3>QUANTEULIX</h3>
              <p>Geleceği teknolojiyle şekillendiriyoruz.</p>
            </div>

            <div className="footerLinks">
              <div>
                <h4>Kurumsal</h4>
                <a href="#">Hakkımızda</a>
                <a href="#">Sistem</a>
                <a href="#">Deney</a>
                <a href="#">Sonuç</a>
              </div>

              <div>
                <h4>İletişim</h4>
                <a href="mailto:info@quanteulix.com">info@quanteulix.com</a>
              </div>
            </div>
          </div>

          <div className="copy">© 2026 Quanteulix. Tüm hakları saklıdır.</div>
        </footer>
      </main>
    </>
  );
}

