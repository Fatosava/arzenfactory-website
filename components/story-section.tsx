import Image from "next/image"

export function StorySection() {
  return (
    <section className="relative py-28 md:py-36 bg-[#FBF7EF] border-t border-black/10 overflow-hidden">
      {/* Decorative scoops reintroduced for visual balance */}
      <Image
        src="/chocolate_tub@2x.png"
        alt="Chocolate scoop"
        width={360}
        height={360}
        className="hidden md:block absolute -left-0  top-50 drop-shadow-2xl rounded-full"
      />
      <Image
        src="/ice_cream_basket@2x.png"
        alt="Pistachio scoop"
        width={340}
        height={340}
        className="hidden lg:block absolute -right-0 -top-0 drop-shadow-2xl rounded-full"
      />

      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-extrabold leading-tight text-foreground">
            <span className="block">Lezzetiyle Eşsiz,</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-rose-500">Serinliğiyle Arzen!</span>
          </h2>

          <p className="mt-8 text-lg md:text-xl leading-relaxed text-muted-foreground max-w-3xl mx-auto">
            Arzen Dondurma, doğadan ilham alan eşsiz lezzetleriyle, her kaşıkta size mutluluk sunar. Doğal malzemeler ve
            geleneksel tariflerle hazırlanan dondurmalarımız, serinliği ve tatlı keyfi bir araya getiriyor.
          </p>
        </div>
      </div>
    </section>
  )
}

