export type PcbModel = {
    id: string;
    title: string;
    description: string;
    modelUrl: string;
};

export type Product = {
    id: number;
    slug: string;
    isim: string;
    kategori: string;
    aciklama: string;
    detay: string;
    resim: string;
    teknikAciklama?: string;
    pcbs?: PcbModel[];
};

export const urunler: Product[] = [
    {
        id: 1,
        slug: "quanteulix-q1",
        isim: "QUANTEULIX POLARİZASYON TABANLI KUANTUM MANTIK DEMONSTRATÖRÜ",
        kategori: "KUANTUM DENEY SİSTEMİ",
        aciklama:
            "Polarizasyon tabanlı kuantum deneylerini incelemek için geliştirilen demonstratör sistemi.",
        detay:
            "QUANTEULIX Q1, polarizasyon tabanlı kuantum deneylerini araştırma ve eğitim çalışmalarına taşımak için tasarlanmış bir demonstratör sistemidir.",
        resim: "/images/prototip_1.jpeg",
        teknikAciklama:
            "Sistem, polarizasyon verilerinden açı bilgisi üretebilmek için yüksek hassasiyetli optik ve elektronik ölçüm katmanlarını birlikte kullanır. Aşağıdaki kartlar prototipin ölçüm, kontrol ve bağlantı işlevlerini temsil eder.",
        pcbs: [
            {
                id: "olcum-karti",
                title: "Ölçüm kartı",
                description:
                    "Fotodiyotlardan gelen analog sinyalleri toplar, yükseltir ve sayısallaştırma katmanına iletir.",
                modelUrl: "/PCB12.glb",
            },
            {
                id: "kontrol-karti",
                title: "Kontrol kartı",
                description:
                    "Mikrodenetleyici, peltier kontrolü ve deney akışının yönetildiği merkez karttır.",
                modelUrl: "/PCB12.glb",
            },
            {
                id: "baglanti-karti",
                title: "Bağlantı kartı",
                description:
                    "Güç, veri ve harici sensör bağlantılarını düzenleyen arayüz kartıdır.",
                modelUrl: "/PCB12.glb",
            },
        ],
    },
    {
        id: 2,
        slug: "quanteulix-sensor",
        isim: "QUANTEULIX Sensor",
        kategori: "HASSAS ÖLÇÜM",
        aciklama:
            "Hassas ölçüm uygulamaları ve deneysel çalışmalar için geliştirilen Quanteulix çözümü.",
        detay: "Ürün ayrıntıları yakında paylaşılacaktır.",
        resim: "/images/quanteulix_logo.png",
    },
    {
        id: 3,
        slug: "quanteulix-egitim-platformu",
        isim: "QUANTEULIX",
        kategori: "EĞİTİM PLATFORMU",
        aciklama:
            "Kuantum teknolojileri alanındaki öğrenme ve uygulama çalışmaları için eğitim platformu.",
        detay: "Ürün ayrıntıları yakında paylaşılacaktır.",
        resim: "/images/quanteulix_logo.png",
    },
];
