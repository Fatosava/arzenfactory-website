export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  image: string
  date: string // ISO
  content: string[]
}

export const posts: BlogPost[] = [
  {
    slug: "dogal-malzemelerle-uretilen-dondurma",
    title: "Doğal Malzemelerle Üretilen Dondurma",
    excerpt:
      "Organik içeriklerle hazırlanan dondurmalarımızın hikayesi ve püf noktaları.",
    image: "/vanilla-ice-cream-scoop-with-vanilla-beans.jpg",
    date: "2025-09-01",
    content: [
      "Arzen’de dondurmanın kalbi, doğallık ve şeffaflıkta atar. Sadece gerçek vanilya, taze süt ve katkısız içeriklerle çalışırız.",
      "Her partide tat ve doku tutarlılığı için küçük ölçekli üretim tercih ederiz. Bu sayede her kaşıkta beklediğiniz o pürüzsüz dokuya ulaşırsınız.",
      "Şeker oranını dengeler, aroma yoğunluğunu doğal kaynaklardan alırız. Bu yaklaşım, hem daha hafif hem de doyurucu bir lezzet sunar.",
    ],
  },
  {
    slug: "ustalikla-gelen-lezzet",
    title: "Ustalıkla Gelen Lezzet",
    excerpt: "Geleneksel yöntemlerle modern dokunuşları buluşturuyoruz.",
    image: "/artisanal-ice-cream-scoops-in-rustic-bowls-with-na.jpg",
    date: "2025-08-20",
    content: [
      "Ustalığımız, yılların birikimini modern tekniklerle buluşturmaktan gelir.",
      "Pastörizasyon, olgunlaştırma ve yavaş çevirme gibi adımları özenle uygular; dokuyu bozmadan yoğun kıvam elde ederiz.",
      "Sonuç: Damağa hafif, aroması zengin, dengeli bir dondurma.",
    ],
  },
  {
    slug: "anadolu-tatlari",
    title: "Anadolu Tatlarıyla Esinlenen Tarifler",
    excerpt: "Yerel lezzetleri Arzen yorumu ile keşfedin.",
    image: "/pistachio-ice-cream-scoop-with-pistachios.jpg",
    date: "2025-08-05",
    content: [
      "Anadolu’nun zengin mutfak kültürü, menümüzün ilham kaynağıdır.",
      "Antep fıstığı, gül ve nar gibi yerel tatları, özgün tariflerle dondurmaya uyarlıyoruz.",
      "Her lokma, bölgesel mirasın modern ve rafine bir yorumudur.",
    ],
  },
  {
    slug: "gozde-lezzetlerimiz",
    title: "Gözde Lezzetlerimiz",
    excerpt: "En çok sevilen dondurmalarımız ve önerilen servis fikirleri.",
    image: "/chocolate-hazelnut-ice-cream-scoop.jpg",
    date: "2025-07-18",
    content: [
      "Klasik çikolata ve vanilya, her zaman favorimiz; ancak fıstıklı ve gül aromalı seçenekler de öne çıkıyor.",
      "Servis önerisi: Taze meyveler, gevrek fındık ve hafif soslarla dengeli sunumlar hazırlayın.",
    ],
  },
  {
    slug: "sutun-kokeni",
    title: "Sütün Kökeni ve Kalitesi",
    excerpt: "Ham maddede şeffaflık: Süt tedarik zincirimiz.",
    image: "/artisanal-ice-cream-cone-with-natural-organic-back.jpg",
    date: "2025-07-01",
    content: [
      "Süt kalitesi, dondurmanın karakterini belirler. Yerel üreticilerle uzun soluklu iş birlikleri kurarız.",
      "Protein/yağ dengesi ve tazelik, her sevkiyatta titizlikle kontrol edilir.",
    ],
  },
  {
    slug: "surdurulebilir-uretim",
    title: "Sürdürülebilir Üretim Yaklaşımımız",
    excerpt: "Enerji verimliliği ve çevre dostu süreçler.",
    image: "/arzen_0230.jpg",
    date: "2025-06-15",
    content: [
      "Enerji verimliliği yüksek ekipmanlar kullanır, atıkları azaltmaya odaklanırız.",
      "Ambalajda geri dönüştürülebilir malzemeleri tercih eder, tedarik zincirinde karbon ayak izini düşürmeye çalışırız.",
    ],
  },
]

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug)
}

