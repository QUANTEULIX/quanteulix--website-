import Image from "next/image";

export default function Home() {
  return (
    <main className="homePage">
      <section className="homeHero">
        <div className="container heroStack">
          <div className="homeLogo">
            <Image
              src="/images/quanteulix_logo.png"
              alt="Quanteulix"
              width={190}
              height={190}
              priority
            />
          </div>

          <div className="heroMessage">
            <p className="eyebrow">2026</p>
            <h1>QUANTEULIX
              şuanda bakımda yapım aşamasında olan bir web sitesidir.
            </h1>
            <p>
              Kısa bir alt söz veya yaklaşımınızı anlatan tek cümlelik metin.
            </p>
          </div>

          <div className="signatureProject">
            <div className="projectImagePlaceholder" role="img" aria-label="İmza proje görseli için yer tutucu">
              <div className="projectFrame">
                <span>İMZA PROJE GÖRSELİ koycaz buraya</span>
                <small>Fotoğrafı koyulacak yer</small>
              </div>
            </div>
            <div className="projectDescription">
              <p className="eyebrow">İMZA PROJEMİZ</p>
              <h2>Polarizasyon Tabanlı Kuantum Mantık Demansistörü</h2>
              <p>
                Bu alanı öne çıkarmak istediğimiz projenin ne yaptığını kısaca anlatmak için kullanak.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
