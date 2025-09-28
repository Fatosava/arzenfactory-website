import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FranchiseApplicationForm } from "@/components/franchise-application-form"

export default function FranchisingPage() {
  return (
    <main className="min-h-screen bg-wood-panels wood-scope">
      <Header />

      {/* Hero */}
      <section className="relative mt-20 md:mt-24">
        <div className="relative min-h-[46vh] md:min-h-[56vh]">
          <Image
            src="/artisanal-ice-cream-cone-with-natural-organic-back.jpg"
            alt="Arzen Franchising"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/10" />
          <div className="container mx-auto px-6 h-full">
            <div className="h-full flex items-center">
              <div className="max-w-2xl text-white">
                <h1 className="text-4xl md:text-6xl font-serif font-extrabold leading-tight">
                  Arzen Franchising
                </h1>
                <p className="mt-4 text-base md:text-lg text-white/90">
                  Güçlü marka, oturmuş üretim, eğitim ve sürekli destek. Arzen ailesine katılın, bulunduğunuz bölgede bizimle büyüyün.
                </p>
                <div className="mt-6">
                  <Link href="#basvuru">
                    <Button size="lg" className="tracking-wide">Ön Başvuru Yap</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neden Arzen? */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-center text-foreground">
            Neden Arzen?
          </h2>
          <p className="mt-4 text-center text-muted-foreground max-w-3xl mx-auto">
            Kurumsal üretim gücü ve geleneksel ustalığın birleşimi. Eğitim, tedarik, pazarlama ve operasyonel destekle yanınızdayız.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { t: "Güçlü Tedarik", d: "Merkezi üretim ve istikrarlı kalite." },
              { t: "Eğitim", d: "Açılış öncesi ve sonrası kapsamlı eğitim." },
              { t: "Pazarlama", d: "Yerel kampanya önerileri ve materyaller." },
              { t: "Süreklilik", d: "Rehberlik ve periyodik denetim desteği." },
            ].map((b) => (
              <Card key={b.t} className="bg-white/85 border-black/10">
                <CardHeader>
                  <CardTitle className="font-serif text-xl">{b.t}</CardTitle>
                  <CardDescription>{b.d}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Süreç */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground text-center">Franchise Süreci</h3>
          <div className="mt-8 grid md:grid-cols-3 gap-4 md:gap-6">
            {[
              { s: "Ön Başvuru", d: "Kısa form ile başvurunuzu iletin." },
              { s: "Değerlendirme", d: "Uygun lokasyon ve yatırım planı." },
              { s: "Sözleşme & Açılış", d: "Eğitim, kurulum ve lansman desteği." },
            ].map((x, i) => (
              <Card key={x.s} className="bg-white/85 border-black/10">
                <CardHeader>
                  <CardTitle className="text-foreground">{i + 1}. {x.s}</CardTitle>
                  <CardDescription>{x.d}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-1 rounded bg-gradient-to-r from-pink-400 to-rose-400" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Başvuru Formu */}
      <FranchiseApplicationForm />

      <Footer />
    </main>
  )
}
