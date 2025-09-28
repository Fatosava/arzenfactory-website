"use client"

import { useEffect, useState, type ReactNode } from "react"
import Link from "next/link"
import { Instagram, Facebook, Twitter, Menu, X } from "lucide-react"

export function Header() {
  const [shrunk, setShrunk] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setShrunk(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const nav = [
    { href: "/", label: "ANASAYFA" },
    { href: "/hakkimizda", label: "HİKAYEMİZ" },
    { href: "/lezzetler", label: "LEZZETLER" },
    { href: "/blog", label: "BLOG" },
    { href: "/franchising", label: "FRANCHISING" },
    { href: "/iletisim", label: "İLETİŞİM" },
  ]

  const navItemClass =
    // Mobilde daha küçük font ve daha az tracking
    "uppercase transition-colors text-[12px] tracking-[0.14em] " +
    "md:text-[13.5px] md:tracking-[0.28em] text-foreground/80 hover:text-foreground"

  const SocialIcon = ({ href, children }: { href: string; children: ReactNode }) => (
    <Link
      href={href}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-foreground/25 text-foreground/80 hover:text-foreground hover:border-foreground/50 transition-colors hover:shadow-[0_0_16px_rgba(255,255,255,0.35)]"
      aria-label="social link"
    >
      {children}
    </Link>
  )

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-black/5",
        shrunk
          ? "bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.96)_45%,rgba(23,169,255,0.08)_100%)] backdrop-blur-md py-3"
          : "bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.92)_40%,rgba(23,169,255,0.08)_100%)] backdrop-blur-md py-6",
      ].join(" ")}
    >
      <div className="container mx-auto px-6 relative">
        {/* --- TOP BAR (mobile) --- */}
        <div className="flex items-center justify-between md:hidden">
          <button
            aria-label="Menüyü aç/kapat"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-foreground/80"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <div className="flex items-center gap-2">
            <SocialIcon href="https://instagram.com"><Instagram className="h-[18px] w-[18px]" /></SocialIcon>
            <SocialIcon href="https://facebook.com"><Facebook className="h-[18px] w-[18px]" /></SocialIcon>
            <SocialIcon href="https://twitter.com"><Twitter className="h-[18px] w-[18px]" /></SocialIcon>
          </div>
        </div>

        {/* --- NAV (desktop) --- */}
        <nav className="hidden md:block">
          <ul className="mx-auto grid max-w-6xl grid-cols-6 place-items-center gap-x-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={
                    navItemClass +
                    " transition-[color,text-shadow] duration-200 hover:[text-shadow:0_0_10px_rgba(255,255,255,0.75)]"
                  }
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* --- FLOATING LOGO (both) --- */}
        <Link
          href="/"
          className={[
            "absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 rounded-full border shadow-sm flex items-center justify-center transition-all duration-300 z-20",
            "bg-[radial-gradient(80%_80%_at_50%_50%,rgba(23,169,255,0.10),rgba(255,92,168,0.08),rgba(255,211,78,0.10))]",
            // Bir tık daha büyük; scroll sonrası daha az küçülür
            shrunk ? "h-16 w-16" : "h-[88px] w-[88px]",
            "border-black/10",
            "hover:shadow-[0_0_32px_rgba(255,255,255,0.35)] hover:ring-2 hover:ring-white/60",
          ].join(" ")}
          aria-label="Arzen Factory home"
        >
          <img
            src="https://icecream-landing.vercel.app/arzen%20factoy%20logo.png"
            alt="Arzen Factory"
            className={shrunk ? "h-12 w-auto" : "h-14 w-auto"}
          />
        </Link>

        {/* Spacer (logo için yer) */}
        <div className={shrunk ? "h-7" : "h-10"} />

        {/* --- MOBILE DROPDOWN --- */}
        <div
          className={[
            "md:hidden absolute left-0 right-0 top-full overflow-hidden transition-[max-height] duration-300",
            open ? "max-h-[320px]" : "max-h-0",
          ].join(" ")}
        >
          <div className="bg-background/95 backdrop-blur border-b border-black/5 shadow-sm">
            <ul className="container mx-auto px-6 py-4 grid grid-cols-2 gap-3">
              {nav.map((item) => (
                <li key={item.href} className="text-center">
                  <Link
                    href={item.href}
                    className={
                      navItemClass +
                      " block py-2 transition-[color,text-shadow] duration-200 hover:[text-shadow:0_0_10px_rgba(255,255,255,0.75)]"
                    }
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}
