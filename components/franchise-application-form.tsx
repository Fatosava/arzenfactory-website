"use client"

import { useState } from "react"

export function FranchiseApplicationForm() {
  const [pending, setPending] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    setPending(true)
    try {
      await new Promise((r) => setTimeout(r, 800))
      alert("Başvurunuz alındı, teşekkürler!")
      form.reset()
    } finally {
      setPending(false)
    }
  }

  return (
    <section id="basvuru" className="py-12 md:py-16">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-center text-4xl md:text-5xl font-serif font-extrabold text-foreground">
          Franchising <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-rose-500">Başvuru</span> Formu
        </h2>
        <p className="mt-3 text-center text-muted-foreground">
          "Lezzeti paylaşmak için bir adım at, Arzen ailesine katıl!"
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className="block text-sm text-neutral-700 mb-2">Ad:</label>
            <input
              name="ad"
              required
              className="w-full rounded-full border border-black/10 bg-white/90 px-5 py-3.5 outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>
          <div>
            <label className="block text-sm text-neutral-700 mb-2">Soyad:</label>
            <input
              name="soyad"
              required
              className="w-full rounded-full border border-black/10 bg-white/90 px-5 py-3.5 outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>
          <div>
            <label className="block text-sm text-neutral-700 mb-2">E-mail:</label>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-full border border-black/10 bg-white/90 px-5 py-3.5 outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>
          <div>
            <label className="block text-sm text-neutral-700 mb-2">Telefon:</label>
            <input
              type="tel"
              name="telefon"
              required
              className="w-full rounded-full border border-black/10 bg-white/90 px-5 py-3.5 outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>
          <div>
            <label className="block text-sm text-neutral-700 mb-2">Mesaj:</label>
            <textarea
              name="mesaj"
              rows={6}
              className="w-full rounded-2xl border border-black/10 bg-white/90 px-5 py-3.5 outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>

          <button
            type="submit"
            disabled={pending}
            className="inline-flex items-center justify-center rounded-full px-6 md:px-8 py-3.5 font-medium text-white bg-gradient-to-r from-pink-500 to-rose-500 shadow-lg shadow-pink-400/30 hover:opacity-95 disabled:opacity-70 disabled:cursor-not-allowed transition"
          >
            Başvuru Tamamla
            <span className="ml-2">→</span>
          </button>
        </form>
      </div>
    </section>
  )
}

