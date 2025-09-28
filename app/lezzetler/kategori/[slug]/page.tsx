import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { categories, getCategory } from "@/lib/categories"
import { ArrowLeft } from "lucide-react"

type PageProps = { params: { slug: string } }

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const cat = getCategory(params.slug)
  return {
    title: cat ? `${cat.title} – Arzen Lezzetler` : "Lezzetler",
    description: cat ? `${cat.title} kategorisindeki ürünler` : undefined,
  }
}

export default function CategoryPage({ params }: PageProps) {
  const cat = getCategory(params.slug)
  if (!cat) return null

  return (
    <main className="min-h-screen bg-wood-panels wood-scope">
      <Header />

      {/* Başlık paneli */}
      <section className="pt-28 md:pt-32 pb-8">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between gap-3">
            <h1 className="text-3xl md:text-5xl font-serif font-extrabold text-foreground">
              {cat.title}
            </h1>
            <Link
              href="/lezzetler"
              className="inline-flex items-center gap-2 rounded-lg bg-white/90 border border-black/10 px-3 py-2 text-sm hover:bg-white"
            >
              <ArrowLeft className="h-4 w-4" /> Geri
            </Link>
          </div>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Arzen’in {cat.title.toLowerCase()} kategorisindeki ürünlerimizi keşfedin. Üzerine gelince isimleri belirir.
          </p>
        </div>
      </section>

      {/* 9 ürün grid */}
      <section className="pb-16">
        <div className="container mx-auto px-3 md:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
            {cat.items.map((item, i) => (
              <div key={i} className="relative aspect-[16/10] overflow-hidden rounded-xl border border-black/10">
                <Image src={item.image} alt={item.name} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" />
                <div
                  className="absolute inset-0 grid place-items-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      `radial-gradient(40% 40% at 20% 30%, rgba(255,255,255,0.35), transparent 60%), radial-gradient(50% 50% at 80% 70%, rgba(255,255,255,0.35), transparent 60%), linear-gradient(135deg, ${cat.color} 0%, ${cat.color} 100%)`,
                  }}
                >
                  <span className="text-white text-base md:text-lg font-semibold tracking-[0.15em] uppercase">
                    {item.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
