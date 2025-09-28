import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { posts } from "@/lib/blog"

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-wood-panels wood-scope">
      <Header />

      {/* Sayfa başlığı */}
      <section className="pt-28 md:pt-32 pb-6">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-serif font-extrabold tracking-tight text-foreground">
            Blog
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground text-lg">
            Arzen dünyasından haberler, ipuçları ve tarifler.
          </p>
        </div>
      </section>

      {/* Yazılar */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <Card className="overflow-hidden bg-white/70 border-black/10 hover:shadow-md transition-shadow">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <CardHeader className="pt-4">
                    <CardTitle className="text-xl font-serif font-semibold text-foreground group-hover:underline">
                      {post.title}
                    </CardTitle>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/80">
                      {new Date(post.date).toLocaleDateString("tr-TR", {
                        year: "numeric",
                        month: "long",
                        day: "2-digit",
                      })}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
