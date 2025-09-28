"use client"

import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

export function Footer() {
  const nav = [
    { href: "/", label: "ANASAYFA" },
    { href: "/hakkimizda", label: "HİKAYEMİZ" },
    { href: "/lezzetler", label: "LEZZETLER" },
    { href: "/blog", label: "BLOG" },
    { href: "/franchising", label: "FRANCHISING" },
    { href: "/iletisim", label: "İLETİŞİM" },
  ]

  const navItemClass =
    "text-[13px] tracking-[0.28em] uppercase text-foreground/80 hover:text-foreground transition-colors"

  const Social = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
      href={href}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-foreground/25 text-foreground/80 hover:text-foreground hover:border-foreground/50 transition-colors"
      aria-label="social"
    >
      {children}
    </Link>
  )

  return (
    <footer
      className="
        relative mt-24
        border-t border-black/10
        overflow-hidden
        "
      style={{
        // #8FD9FB zemin + çok hafif çift gradient (header ile akraba)
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 35%), radial-gradient(120% 120% at 50% 0%, rgba(255,92,168,0.10) 0%, rgba(255,211,78,0.10) 22%, rgba(23,169,255,0.12) 48%, rgba(143,217,251,1) 48%)",
        backgroundColor: "#8FD9FB",
      }}
    >
      <div className="container mx-auto px-6">
        {/* Sosyal ikonlar */}
        <div className="pt-16 flex items-center justify-center gap-4">
          <Social href="https://instagram.com">
            <Instagram className="h-[18px] w-[18px]" />
          </Social>
          <Social href="https://facebook.com">
            <Facebook className="h-[18px] w-[18px]" />
          </Social>
          <Social href="https://twitter.com">
            <Twitter className="h-[18px] w-[18px]" />
          </Social>
        </div>

        {/* Ortadaki yuvarlak logo (Woodlands 25 years benzeri) */}
        <div className="flex justify-center">
          <div
            className="
              mt-8 mb-6
              relative h-28 w-28 md:h-32 md:w-32
              rounded-full border border-black/10 bg-white
              shadow-[0_10px_30px_rgba(0,0,0,0.12)]
              flex items-center justify-center
            "
          >
            <img
              src="https://icecream-landing.vercel.app/arzen%20factoy%20logo.png"
              alt="Arzen Factory"
              className="h-14 w-auto md:h-16"
            />
            {/* ince iç parlama */}
            <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/60" />
          </div>
        </div>

        {/* Menü */}
        <nav className="pb-8">
          <ul className="mx-auto grid max-w-6xl grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 place-items-center gap-y-4">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={navItemClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Alt telif satırı */}
        <div className="pb-12 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground/70">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Arzen Factory, Türkiye.{" "}
            <span className="mx-2">|</span>
            <Link href="/gizlilik" className="underline decoration-transparent hover:decoration-current">
              Gizlilik Politikası
            </Link>
            <span className="mx-2">|</span>
            <Link href="/sitemap" className="underline decoration-transparent hover:decoration-current">
              Site Haritası
            </Link>
          </p>

          <p className="text-center md:text-right">
            website designed by{" "}
            <Link
              href="/"
              className="font-semibold underline decoration-transparent hover:decoration-current"
            >
              ARZEN
            </Link>
          </p>
        </div>
      </div>

      {/* Üst kenarda çok hafif ayraç çizgisi */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-black/10" />
    </footer>
  )
}
