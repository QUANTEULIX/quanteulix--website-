import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Quanteulix iletişim bilgileri.",
};

export default function Iletisim() {
  return (
    <main>
      <section className="pageHero">
        <div className="container narrow">
          <p className="eyebrow">İLETİŞİM</p>
          <h1>Birlikte yeni olasılıkları keşfedelim.</h1>
          <p>Ürünlerimiz ve çalışmalarımız hakkında bilgi almak için bize e-posta gönderebilirsiniz.</p>
        </div>
      </section>
      <section className="section contactSection">
        <div className="container contactGrid">
          <article className="contentCard">
            <p className="cardLabel">E-POSTA</p>
            <h2>
              <a href="mailto:info@quanteulix.com">info@quanteulix.com</a>
            </h2>
            <p className="placeholderText">
              Mesajınızı e-posta ile iletin; ekibimiz en kısa sürede size dönüş
              yapsın.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
