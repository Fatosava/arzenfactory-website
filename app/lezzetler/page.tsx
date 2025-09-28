import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { categories } from "@/lib/categories"
import { ArrowUpRight } from "lucide-react"

export default function LezzetlerPage() {
  return (
    <main className="min-h-screen bg-wood-panels wood-scope">
      <Header />

      {/* HERO: The best ice cream (Arzen uyarlaması) */}
      <section className="relative mt-20 md:mt-24">
        <div className="relative min-h-[52vh] md:min-h-[62vh]">
          <Image
            src="/artisanal-ice-cream-scoops-in-rustic-bowls-with-na.jpg"
            alt="Lezzetli dondurma çeşitleri"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/50 via-black/30 to-black/10" />
          <div className="container mx-auto px-6 h-full">
            <div className="h-full flex items-center justify-end text-right">
              <div className="max-w-2xl text-white drop-shadow-sm">
                <h1 className="text-4xl md:text-6xl font-serif font-extrabold leading-tight">
                  En iyi dondurma en iyi
                  <br className="hidden md:block" /> malzemelerden yapılır
                </h1>
                <p className="mt-4 text-base md:text-lg text-white/90">
                  Arzen’de lezzetin kanıtı tattadır. Dondurmalarımız, en seçkin
                  meyveler, yemişler ve kaliteli çikolatayla; her gün taze
                  hazırlanan kendi sütümüzle buluşur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro: Ahşap pano hissi + açıklama */}
      <section
        className="relative py-16 md:py-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.96) 0 260px, rgba(0,0,0,0.035) 260px 262px)",
        }}
      >
        <div className="container mx-auto px-6">
          <div className="relative">
            {/* Sol dekor görsel */}
            <div className="hidden md:block absolute -left-4 top-1/2 -translate-y-1/2">
              <div className="relative w-[260px] h-[260px]">
                <Image
                  src="/pistachio-ice-cream-scoop-with-pistachios.jpg"
                  alt="Pistachio"
                  fill
                  className="object-cover rounded-full shadow-xl"
                />
              </div>
            </div>

            {/* Sağ dekor görsel */}
            <div className="hidden md:block absolute -right-4 -top-10">
              <div className="relative w-[240px] h-[240px]">
                <Image
                  src="/ChatGPT%20Image%2018%20Eyl%202025%2014_21_55.png"
                  alt="Strawberries"
                  fill
                  className="object-contain drop-shadow-[0_12px_30px_rgba(0,0,0,0.25)]"
                />
              </div>
            </div>

            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-foreground">
                Arzen’in zengin lezzet koleksiyonunu keşfedin
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Aile geleneğimizden gelen ustalıkla, taze ve doğal içerikleri
                özenle harmanlıyor; mükemmel kıvam ve yoğun aromayı yakalayana
                kadar denemekten vazgeçmiyoruz. Her bir lezzetimiz dengeli tat,
                pürüzsüz doku ve ferah bir son dokunuş sunar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kategori listesi */}
      <section className="pb-16">
        <div className="container mx-auto px-3 md:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/lezzetler/kategori/${cat.slug}`}
                className="group relative rounded-xl overflow-hidden border border-black/10 aspect-[16/9]"
                style={{
                  background:
                    `radial-gradient(40% 40% at 20% 30%, rgba(255,255,255,0.35), transparent 60%), radial-gradient(50% 50% at 80% 70%, rgba(255,255,255,0.35), transparent 60%), linear-gradient(135deg, ${cat.color} 0%, ${cat.color} 100%)`,
                }}
              >
                <span className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/80 text-white/95">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="px-6 text-white text-center">
                    <span className="block text-2xl md:text-3xl font-serif font-extrabold">
                      {cat.title}
                    </span>
                    <span className="mt-2 block text-xs tracking-[0.2em] uppercase opacity-90">
                      9 Ürün örnek liste
                    </span>
                  </span>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/15" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
