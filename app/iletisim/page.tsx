import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import ContactForm from "@/components/contact-form"

export default function IletisimPage() {
  return (
    <main className="min-h-screen bg-wood-panels wood-scope">
      <Header />

      {/* Başlık */}
      <section className="pt-28 md:pt-32 pb-8">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-serif font-extrabold text-foreground">İletişim</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Sorularınız ve iş birlikleri için bize yazın. Size en kısa sürede dönüş yapacağız.
          </p>
        </div>
      </section>

      {/* İçerik */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            {/* Form */}
            <Card className="bg-white/85 border-black/10">
              <CardHeader>
                <CardTitle>Mesaj Gönder</CardTitle>
                <CardDescription>Formu doldurun; sizi arayalım veya e‑posta ile dönüş yapalım.</CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>

            {/* Bilgiler */}
            <Card id="konum" className="bg-white/85 border-black/10">
              <CardHeader>
                <CardTitle>İletişim Bilgileri</CardTitle>
                <CardDescription>Merkez ve iletişim kanallarımız.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6 text-foreground/90">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">E‑posta</p>
                      <a href="mailto:info@arzen.com.tr" className="underline decoration-transparent hover:decoration-current">info@arzen.com.tr</a>
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Telefon</p>
                      <a href="tel:4443615" className="underline decoration-transparent hover:decoration-current">444 36 15</a>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-serif font-bold text-foreground text-center mb-3">Şubelerimiz</h4>
                    <Tabs defaultValue="ankara" className="w-full">
                      <div className="flex items-center justify-center">
                        <TabsList>
                          <TabsTrigger value="ankara">Ankara</TabsTrigger>
                          <TabsTrigger value="erzurum">Erzurum</TabsTrigger>
                        </TabsList>
                      </div>

                      <TabsContent value="ankara" className="mt-4">
                        <div className="rounded-xl overflow-hidden border border-black/10 bg-white">
                          <AspectRatio ratio={16/9}>
                            <iframe
                              src="https://www.google.com/maps?q=Mayra%20Park%20AVM%20Ankara&output=embed"
                              loading="lazy"
                              allowFullScreen
                              referrerPolicy="no-referrer-when-downgrade"
                              className="h-full w-full"
                              style={{ border: 0 }}
                            />
                          </AspectRatio>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground text-center">MAYRA PARK AVM, Gölbaşı / Ankara</p>
                      </TabsContent>

                      <TabsContent value="erzurum" className="mt-4">
                        <div className="rounded-xl overflow-hidden border border-black/10 bg-white">
                          <AspectRatio ratio={16/9}>
                            <iframe
                              src="https://www.google.com/maps?q=Erzurum%20Yıldızkent&output=embed"
                              loading="lazy"
                              allowFullScreen
                              referrerPolicy="no-referrer-when-downgrade"
                              className="h-full w-full"
                              style={{ border: 0 }}
                            />
                          </AspectRatio>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground text-center">ERZURUM / YILDIZKENT</p>
                      </TabsContent>
                    </Tabs>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
