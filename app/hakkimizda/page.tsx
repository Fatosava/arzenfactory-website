import { Header } from "@/components/header"
import { StorySection } from "@/components/story-section"
import { ProductShowcase } from "@/components/product-showcase"
import { Footer } from "@/components/footer"

export default function HakkimizdaPage() {
  return (
    <main className="min-h-screen bg-wood-panels wood-scope">
      <Header />

      {/* Sayfa başlığı */}
      <section className="pt-28 md:pt-32 pb-10">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-serif font-extrabold tracking-tight text-foreground">
            Hikayemiz
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground text-lg">
            Doğadan ilham alan lezzet yolculuğumuz ve Arzen ruhu.
          </p>
        </div>
      </section>

      {/* Mevcut tasarımdan bölümler */}
      <StorySection />
      <ProductShowcase />

      <Footer />
    </main>
  )
}
