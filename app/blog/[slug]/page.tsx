import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { posts, getPost } from "@/lib/blog"

type PageProps = {
  params: { slug: string }
}

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getPost(params.slug)
  if (!post) return { title: "Blog" }
  return {
    title: `${post.title} – Arzen Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
    },
  }
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getPost(params.slug)
  if (!post) return notFound()

  const dateText = new Date(post.date).toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  })

  return (
    <main className="min-h-screen bg-wood-panels wood-scope">
      <Header />

      {/* Hero */}
      <section className="pt-28 md:pt-32">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-serif font-extrabold tracking-tight text-foreground">
            {post.title}
          </h1>
          <p className="mt-3 text-muted-foreground max-w-2xl">{post.excerpt}</p>
          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground/80">{dateText}</p>
        </div>
      </section>

      {/* Görsel */}
      <section className="mt-8">
        <div className="container mx-auto px-6">
          <div className="relative aspect-[16/8] md:aspect-[16/6] rounded-2xl overflow-hidden border border-black/10 shadow-sm">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* İçerik */}
      <article className="py-12">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="prose prose-neutral max-w-none prose-p:leading-relaxed">
            {post.content.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
