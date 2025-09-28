export type CategoryItem = {
  name: string
  image: string
}

export type Category = {
  slug: string
  title: string
  color: string
  items: CategoryItem[]
}

const defaultImages: string[] = [
  "/DSCF0851.jpg",
  "/DSCF0862.jpg",
  "/DSCF0897.jpg",
  "/chocolate-hazelnut-ice-cream-scoop.jpg",
  "/artisanal-ice-cream-scoops-in-rustic-bowls-with-na.jpg",
  "/pistachio-ice-cream-scoop-with-pistachios.jpg",
  "/vanilla-ice-cream-scoop-with-vanilla-beans.jpg",
  "/ChatGPT%20Image%2018%20Eyl%202025%2013_49_49.png",
  "/ChatGPT%20Image%2018%20Eyl%202025%2013_52_36.png",
]

type CategoryImageMap = Record<string, string[]>

// Her kategori için görselleri buraya girin.
// Dolu değilse otomatik olarak defaultImages kullanılır.
export const categoryImages: CategoryImageMap = {
  "dondurma-cesitleri": [],
  "daha-cok-lezzet": [],
  "ekstra-lezzetli-kornet": [],
  "dondurma-menu": [],
  profiterol: [],
  "ekler-pastalar": [],
  "tek-pastalar-cookies": [],
  kahveler: [],
  "filtre-kahveler": [],
  "sicak-icecekler": [],
  "soguk-icecekler": [],
}

function itemsFor(slug: string, namePrefix = "Ürün"): CategoryItem[] {
  const images = categoryImages[slug]?.length ? categoryImages[slug] : defaultImages
  return images.map((img, i) => ({ name: `${namePrefix} ${i + 1}`, image: img }))
}

export const categories: Category[] = [
  { slug: "dondurma-cesitleri", title: "Dondurma Çeşitleri", color: "#EC8FB4", items: itemsFor("dondurma-cesitleri") },
  { slug: "daha-cok-lezzet", title: "Daha Çok Lezzet", color: "#9CC7F6", items: itemsFor("daha-cok-lezzet") },
  { slug: "ekstra-lezzetli-kornet", title: "Ekstra Lezzetli Kornet", color: "#8BCF9B", items: itemsFor("ekstra-lezzetli-kornet") },
  { slug: "dondurma-menu", title: "Dondurma Menü", color: "#B37C64", items: itemsFor("dondurma-menu") },
  { slug: "profiterol", title: "Profiterol", color: "#C0B7F2", items: itemsFor("profiterol") },
  { slug: "ekler-pastalar", title: "Ekler Pastalar", color: "#FFA38E", items: itemsFor("ekler-pastalar") },
  { slug: "tek-pastalar-cookies", title: "Tek Pastalar & Cookies", color: "#FFDD77", items: itemsFor("tek-pastalar-cookies") },
  { slug: "kahveler", title: "Kahveler", color: "#8FD9FB", items: itemsFor("kahveler") },
  { slug: "filtre-kahveler", title: "Filtre Kahveler", color: "#6BB7F2", items: itemsFor("filtre-kahveler") },
  { slug: "sicak-icecekler", title: "Sıcak İçecekler", color: "#F29EAE", items: itemsFor("sicak-icecekler") },
  { slug: "soguk-icecekler", title: "Soğuk İçecekler", color: "#8BCFDF", items: itemsFor("soguk-icecekler") },
]

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug)
}

