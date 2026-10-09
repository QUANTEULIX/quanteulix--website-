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
              GELECEĞİN TEKNOLOJİSİNİN BİR PARÇACIĞI.
            </p>
          </div>

          <div className="signatureProject">
            <div className="projectVisual">
              <Image
                src="/images/prototip_1.jpeg"
                alt="Polarizasyon tabanlı kuantum mantık devresi prototipi"
                width={1364}
                height={597}
                unoptimized
                priority
              />
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
