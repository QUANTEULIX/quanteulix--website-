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
              Kısa bir alt söz veya yaklaşımınızı anlatan tek cümlelik metni bu
              alana yazabilirsiniz.
            </p>
          </div>

          <div className="signatureProject">
            <div className="projectImagePlaceholder" role="img" aria-label="İmza proje görseli için yer tutucu">
              <div className="projectFrame">
                <span>İMZA PROJE GÖRSELİ</span>
                <small>Fotoğrafınızı buraya ekleyin</small>
              </div>
            </div>
            <div className="projectDescription">
              <p className="eyebrow">İMZA PROJE</p>
              <h2>Proje adınızı buraya ekleyin.</h2>
              <p>
                Bu alanı, öne çıkarmak istediğiniz projenin ne yaptığını kısa
                ve anlaşılır biçimde anlatmak için kullanabilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
