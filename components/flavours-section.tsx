"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const AUTOPLAY_MS = 5000

const flavours = [
  { name: "Special Dessert",    description: "Signature plate from our studio collection", image: "/DSCF0851.jpg" },
  { name: "Strawberry Sundae",  description: "Fresh strawberry garnish over creamy base",  image: "/DSCF0862.jpg" },
  { name: "Tall Cone",          description: "Multi-scoop cone crafted for the perfect shot", image: "/DSCF0881%201%20(2).jpg" },
  { name: "Cookie Medley",      description: "Assorted cookies paired with artisan ice cream", image: "/DSCF0897.jpg" },
]

export function FlavoursSection() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const intervalId = useRef<number | null>(null)

  const go = useCallback((to: number) => {
    setIndex((prev) => {
      const len = flavours.length
      return ((typeof to === "number" ? to : prev) + len) % len
    })
  }, [])

  const next = useCallback(() => go(index + 1), [go, index])
  const prev = useCallback(() => go(index - 1), [go, index])

  useEffect(() => {
    if (paused || flavours.length <= 1) return
    if (intervalId.current !== null) window.clearInterval(intervalId.current)
    intervalId.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % flavours.length)
    }, AUTOPLAY_MS)
    return () => {
      if (intervalId.current !== null) window.clearInterval(intervalId.current)
      intervalId.current = null
    }
  }, [paused])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next()
      if (e.key === "ArrowLeft") prev()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [next, prev])

  return (
    <section id="favoriler" className="py-20 bg-transparent scroll-mt-28 md:scroll-mt-36">
      <div className="container mx-auto px-4">
        {/* Başlık */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-3 text-balance">
           Sevilen Favori Ürünlerimiz
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            "Her Lokması Serinlik, Her Tat Bir Efsane!"
          </p>
        </div>

        {/* CAROUSEL */}
        <div
          className="relative overflow-hidden rounded-2xl shadow-xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(.2,.8,.2,1)]"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {flavours.map((item, i) => (
              <div key={i} className="relative min-w-full aspect-[16/8] md:aspect-[16/7]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className="object-cover"
                  priority={i === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
                <div className="absolute inset-0 p-6 md:p-12 flex items-end md:items-center justify-center md:justify-end">
                  <div className="w-full md:max-w-md text-white text-right">
                    <h3 className="text-3xl md:text-4xl font-serif font-bold drop-shadow-sm">{item.name}</h3>
                    <p className="mt-2 text-white/90">{item.description}</p>
                    <div className="mt-5 flex justify-end gap-3">
                      <Button asChild variant="secondary" className="backdrop-blur-md bg-white/15 border-white/30">
                        <Link href="/lezzetler">Daha Fazlası için</Link>
                      </Button>
          
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Prev / Next */}
          <button
            aria-label="Previous"
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-black/35 hover:bg-black/50 text-white grid place-items-center transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            aria-label="Next"
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-black/35 hover:bg-black/50 text-white grid place-items-center transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {flavours.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => go(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-8 bg-white" : "w-2 bg-white/60 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Button size="lg" className="px-8">
            View All Flavours
          </Button>
        </div>
      </div>
    </section>
  )
}
