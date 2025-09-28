"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { IceCream, MapPin } from "lucide-react"

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Scroll
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY || 0)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // 5 sn'de bir görsel değiştir
  const images = [
    "url('/original-5e89025d31e913815e114cb236d2b0ca.webp')",
    "url('/original-69f21c11daa136318f5eba9eacce4de3.gif')",
    "url('/original-d576c96399c94ad0aef8c5e2916bd06a.webp')",
    "url('/original-f20bdbe68f5f1bcd25feac376a885c93.webp')",
  ]
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % images.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  // Efekt hesapları
  const blurProgress = Math.max(0, Math.min(scrollY / 100, 1))
  const blurPx = 8 + 10 * blurProgress
  const overlayOpacity = 0.05 + 0.95 * blurProgress
  const parallaxY = Math.min(scrollY * 0.06, 60)

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Base (sharp) */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover will-change-transform"
        style={{
          backgroundImage: images[currentIndex],
          backgroundPosition: "20% center",
          transform: `translateY(${parallaxY * -0.4}px) scale(1.03) translateZ(0)`,
          filter: "saturate(1.05) contrast(1.02)",
        }}
        aria-hidden
      />

      {/* Blur overlay */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover will-change-transform"
        style={{
          backgroundImage: images[currentIndex],
          backgroundPosition: "20% center",
          transform: `translateY(${parallaxY * 0.2}px) scale(1.06) translateZ(0)`,
          filter: `blur(${blurPx}px)`,
          opacity: overlayOpacity,
        }}
        aria-hidden
      />

      {/* Dark gradient (okunabilirlik) */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/45 via-black/25 to-black/5" aria-hidden />

      {/* Dekoratif halkalar */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-20" aria-hidden>
        <svg viewBox="0 0 600 600" className="h-full w-full" fill="none">
          <circle cx="480" cy="180" r="160" stroke="white" strokeWidth="2" />
          <circle cx="520" cy="420" r="220" stroke="white" strokeWidth="2" />
          <circle cx="420" cy="380" r="80" stroke="white" strokeWidth="2" />
          <circle cx="560" cy="100" r="60" stroke="white" strokeWidth="2" />
        </svg>
      </div>

      {/* İÇERİK: SAĞ + DİKEY ORTA SABİT */}
      <div
        className="
          absolute right-6 md:right-10 lg:right-16
          top-1/2 -translate-y-1/2
          z-10 w-full max-w-2xl text-right text-white
        "
      >
        <h1 className="font-serif font-extrabold leading-tight drop-shadow-sm text-5xl md:text-7xl">
          Arzen Factory
        </h1>
        <p className="mt-2 text-2xl md:text-3xl font-semibold text-white/95">
          Lezzetin İzinde...
        </p>
        <p className="mt-6 text-base md:text-lg text-white/85">
          Damaklarda İz Bırakan Tatlar
        </p>

        {/* Aksiyon rozetleri */}
        <div className="mt-10 flex items-center justify-end gap-10">
          <Link href="#favoriler" className="group text-center">
            <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-rose-300/90 bg-white/5 backdrop-blur-sm group-hover:bg-white/10 transition-colors">
              <IceCream className="h-9 w-9 text-rose-200" />
            </span>
            <span className="mt-3 block text-sm tracking-[0.3em] uppercase">Favoriler</span>
          </Link>
          <Link href="/iletisim#konum" className="group text-center">
            <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-emerald-300/90 bg-white/5 backdrop-blur-sm group-hover:bg-white/10 transition-colors">
              <MapPin className="h-9 w-9 text-emerald-200" />
            </span>
            <span className="mt-3 block text-sm tracking-[0.3em] uppercase">Konum</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
