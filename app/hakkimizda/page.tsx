import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: "Quanteulix hakkında bilgi, misyon ve vizyon.",
};

export default function Hakkimizda() {
  return (
    <main>
      <section className="pageHero">
        <div className="container narrow">
          <p className="eyebrow">KURUMSAL</p>
          <h1>Bilim, tasarım ve mühendisliğin kesişiminde.</h1>
          <p>Quanteulix&apos;in hikâyesini, çalışma yaklaşımını ve hedeflerini bu sayfada paylaşabilirsiniz.</p>
        </div>
      </section>
      <section className="section aboutSection">
        <div className="container aboutGrid">
          <article className="contentCard contentCardWide">
            <p className="cardLabel">HAKKIMIZDA</p>
            <h2>Quant Eulix; mevcut küresel konumlama altyapılarını optik veriyle destekleyerek hassasiyeti ve kararlılığı üst seviyeye çıkaran kuantum optik seyrüsefer sistemleri ve entegre elektro-optik algılama çözümleri üzerine odaklanmaktadır. Teorik fiziği otonom platform gereksinimleriyle harmanlayan şirketimiz; otonomi, savunma ve kritik algılama alanlarında daha hassas ve güvenilir geleceğin teknolojilerini inşa etmeyi hedeflemektedir.</h2>
            <p className="placeholderText">Bu alanı Quanteulix&apos;in kuruluş hikâyesi, ekibi, uzmanlığı ve sunduğu değer hakkında kısa bir metinle doldurabilirsiniz.</p>
          </article>
          <article className="contentCard">
            <p className="cardLabel">MİSYONUMUZ</p>
            <p className="placeholderText">Polarizasyonun ışık üzerindeki etkisini yüksek hassasiyet ile ölçerek sonuçları inceliyor ve bu sonuçlardan konum verisi elde etmeye yönelik Ar-Ge çalışmaları yürütüyoruz. Gelecek planlarımız arasında daha gelişmiş kuantum tabanlı projeler üzerine ağırlık vermek ve mevcut sistemlerin açıklarını optik devreler ile kapatmak bulunmaktadır.</p>
          </article>
          <article className="contentCard">
            <p className="cardLabel">VİZYONUMUZ</p>
            <p className="placeholderText">Geleneksel sınırların ötesine geçerek, akademik üretkenliği gençliğin getirdiği dinamizm ve teknolojik çeviklikle birleştiren küresel bir araştırma grubu olmak; disiplinlerarası sinerjiden beslenen ve geleceğin mühendislik ve bilim problemlerine bugünden yenilikçi çözümler üreten öncü bir ekip inşa etmektir.</p>
          </article>
        </div>
      </section>
    </main>
  );
}

