import Image from "next/image"

export function ProductShowcase() {
  return (
    <section className="py-20 md:py-24" style={{ backgroundColor: "#FBF7EF" }}>
      <div className="container mx-auto px-6">
        {/* Two-column content like the reference */}
        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* Left copy */}
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl md:text-4xl font-serif font-extrabold tracking-tight mb-6">
              <span className="text-foreground">Biz </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-rose-500">Kimiz?</span>
            </h3>

            <div className="space-y-5 text-neutral-600 text-lg md:text-xl leading-relaxed">
              <p>
                Arzen, 1989’dan beri müşteriler için eşsiz lezzetler sunan bir markadır. En kaliteli malzemelerle
                hazırladığımız ürünlerimizle müşterilerimize unutulmaz tatlar yaşatıyoruz. Arzen Dondurma Üretim
                Tesisleri, 10.000 m² kapalı alan, toplamda 22.000 m² alana sahiptir.
              </p>
              <p>
                Tesis kendi elektriğini üretmektedir. İtalyan dondurma üretim teknolojileri kullanılarak donatılmış
                modern tesislerimizde hijyen, en üst standartlarda tutulmaktadır.
              </p>
              <p>
                Ürünlerimiz, Türkiye’nin dört bir yanında ve dünyanın çeşitli ülkelerine ihracat faaliyeti gösteren
                zincir marketlerin (Macro Center, Migros, File vs.) raflarında satışa sunulmaktadır.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-8 flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden shadow-md">
                <Image
                  src="/artisanal-ice-cream-maker-portrait.jpg"
                  alt="Master Ice Cream Maker"
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="font-medium text-foreground">Hakkımızda</p>
                <p className="text-sm text-neutral-500">Arzen Factory</p>
              </div>
            </div>
          </div>

          {/* Right hero image with hover grow */}
          <div className="order-1 lg:order-2">
            <div className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/ChatGPT%20Image%2018%20Eyl%202025%2013_58_47.png"
                alt="Scoops in bowls"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>
          </div>
        </div>

        {/* Uniform card grid (Lezzetler düzeni gibi, kartlar aynı boy) */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
          {[
            { src: "/ChatGPT%20Image%2018%20Eyl%202025%2013_49_49.png", label: "Arzen Factory", cta:"İncele", variant: "rose" },
            { src: "/ChatGPT%20Image%2018%20Eyl%202025%2013_52_36.png", label: "Arzen Factory", cta: "İncele", variant: "emerald" },
            { src: "/ChatGPT%20Image%2018%20Eyl%202025%2013_54_35.png", label: "Arzen Factory", cta: "İncele", variant: "indigo" },
            { src: "/ChatGPT%20Image%2018%20Eyl%202025%2014_49_58.png", label: "Arzen Factory", cta: "İncele", variant: "slate" },
            { src: "/rose-pomegranate-ice-cream-scoop-with-rose-petals.jpg", label: "Arzen Factory", cta: "İncele", variant: "amber" },
            { src: "/ChatGPT%20Image%2018%20Eyl%202025%2014_04_51.png", label: "Arzen Factory", cta: "İncele", variant: "purple" },
            { src: "/ChatGPT%20Image%2018%20Eyl%202025%2014_35_45.png", label: "Arzen Factory", cta: "İncele", variant: "teal" },
            { src: "/ChatGPT%20Image%2018%20Eyl%202025%2015_03_43.png", label: "Arzen Factory", cta: "İncele", variant: "lime" },
            { src: "/artisanal-ice-cream-scoops-in-rustic-bowls-with-na.jpg", label: "Arzen Factory", cta: "İncele", variant: "emerald" },
          ].map((item) => {
            const variants: Record<string, string> = {
              rose: "from-rose-500 to-pink-500",
              emerald: "from-emerald-500 to-emerald-400",
              indigo: "from-indigo-500 to-sky-500",
              amber: "from-amber-500 to-orange-500",
              purple: "from-fuchsia-500 to-purple-500",
              slate: "from-slate-700 to-slate-500",
              teal: "from-teal-500 to-cyan-500",
              lime: "from-lime-500 to-green-500",
            }
            const grad = variants[item.variant] ?? variants.rose
            return (
              <figure key={item.label} className="group relative rounded-xl overflow-hidden border border-black/10 aspect-[16/10] bg-white">
                <img
                  src={item.src}
                  alt={item.label}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <figcaption className="absolute left-3 bottom-2 md:left-4 md:bottom-3 text-white tracking-[0.2em] text-[10px] md:text-xs font-semibold drop-shadow">
                  {item.label}
                </figcaption>
                <span
                  className={`absolute right-2 bottom-2 md:right-3 md:bottom-3 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] md:text-xs font-medium text-white bg-gradient-to-r ${grad} shadow-md`}
                >
                  {item.cta}
                </span>
              </figure>
            )
          })}
        </div>
      </div>
    </section>
  )
}
