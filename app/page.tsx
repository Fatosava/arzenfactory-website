import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductShowcase } from "@/components/product-showcase"
import { FlavoursSection } from "@/components/flavours-section"
import { StorySection } from "@/components/story-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"


export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <StorySection />
      <ProductShowcase />
      <FlavoursSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
