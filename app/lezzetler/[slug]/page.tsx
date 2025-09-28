import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getFlavour, flavours } from "@/lib/flavours"
import { ArrowLeft } from "lucide-react"

type PageProps = {
  params: { slug: string }
}

export function generateStaticParams() {
  return flavours.map((f) => ({ slug: f.slug }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const flavour = getFlavour(params.slug)
  if (!flavour) return { title: "Lezzetler" }
  return {
    title: `${flavour.name} – Arzen Lezzetler`,
    description: flavour.description,
    openGraph: {
      title: flavour.name,
      description: flavour.description,
      type: "article",
    },
  }
}

export default function FlavourPage({ params }: PageProps) {
  const flavour = getFlavour(params.slug)
  if (!flavour) return null

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero görsel */}
      <section className="relative mt-20 md:mt-24">
        <div className="container mx-auto px-6">
          <div className="relative aspect-[16/6] rounded-2xl overflow-hidden border border-black/10 shadow-sm">
            <Image
              src={flavour.images[0]}
              alt={flavour.name}
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover"
              priority
            />
            <Link
              href="/lezzetler"
              className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-lg bg-white/85 px-3 py-2 text-sm font-medium text-foreground shadow-sm hover:bg-white"
            >
              <ArrowLeft className="h-4 w-4" /> Geri
            </Link>
          </div>
        </div>
      </section>

      {/* Wood planks arkaplanlı başlık & açıklama */}
      <section
        className="py-16 md:py-20 text-center"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.95) 0 240px, rgba(0,0,0,0.03) 240px 242px)",
        }}
      >
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-extrabold text-foreground">
            {flavour.name}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            {flavour.description}
          </p>
        </div>
      </section>

      {/* Alt galeri (mozaik) */}
      <section className="py-10">
        <div className="container mx-auto px-3 md:px-6">
          <div className="grid grid-cols-3 gap-2 md:gap-3">
            {/* Desenli isim kutusu */}
            <div
              className="relative aspect-[16/9] col-span-1 flex items-center justify-center text-center"
              style={{
                background: `radial-gradient(40% 40% at 20% 30%, rgba(255,255,255,0.35), transparent 60%), radial-gradient(50% 50% at 80% 70%, rgba(255,255,255,0.35), transparent 60%), linear-gradient(135deg, ${flavour.color} 0%, ${flavour.color} 100%)`,
              }}
            >
              <span className="px-4 text-white drop-shadow-sm">
                <span className="block text-2xl md:text-3xl font-serif font-extrabold tracking-wide">
                  {flavour.name}
                </span>
              </span>
            </div>

            <div className="relative aspect-[16/9]">
              <Image src={flavour.images[1] ?? flavour.images[0]} alt="" fill className="object-cover" />
            </div>

            <div className="relative aspect-[16/9]">
              <Image src={flavour.images[2] ?? flavour.images[0]} alt="" fill className="object-cover" />
            </div>

            <div className="relative aspect-[16/9] col-span-2">
              <Image src={flavour.images[3] ?? flavour.images[1] ?? flavour.images[0]} alt="" fill className="object-cover" />
            </div>

            <div className="relative aspect-[16/9]">
              <Image src={flavour.images[0]} alt="" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

