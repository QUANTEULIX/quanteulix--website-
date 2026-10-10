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
            <h1>QUANTEULIX</h1>
            <p>
              Geleceğin teknolojisinin bir parçacığı. Web sitemiz şu anda
              geliştirme aşamasında; çok yakında yeniden buradayız.
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
              <h2>Polarizasyon Tabanlı Kuantum Mantık Demonstratörü</h2>
              <p>
                Polarizasyon ölçümlerinden açı bilgisi üretmeyi hedefleyen
                Prototip-1 sistemimizi keşfedin.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
