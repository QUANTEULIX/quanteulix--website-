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
          <p>iletişim bilgileri gelcek buraya</p>
        </div>
      </section>
      <section className="section contactSection">
        <div className="container contactGrid">
          <article className="contentCard">
            <p className="cardLabel">E-POSTA</p>
            <h2>info@quanteulix.com</h2>
            <p className="placeholderText">E-posta adresinizi buradan güncelleyebilirsiniz.</p>
          </article>
          <article className="contentCard">
            <p className="cardLabel">KONUM</p>
            <h2>Konum bilgisi ekleyin.</h2>
            <p className="placeholderText">Ofis, laboratuvar veya çalışma alanı bilgilerinizi bu kutuya ekleyebilirsiniz.</p>
          </article>
          <article className="contentCard">
            <p className="cardLabel">SOSYAL MEDYA</p>
            <h2>Bağlantılarınızı ekleyin.</h2>
            <p className="placeholderText">LinkedIn, Instagram veya diğer sosyal medya bağlantılarınızı bu alana ekleyebilirsiniz.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
