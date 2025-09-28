"use client"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export function ContactSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-6">
        <Tabs defaultValue="ankara" className="w-full">
          {/* Map area */}
          <div className="rounded-2xl overflow-hidden border border-black/10 bg-white">
            <TabsContent value="ankara" className="m-0">
              <AspectRatio ratio={16 / 7}>
                <iframe
                  src="https://www.google.com/maps?q=Mayra%20Park%20AVM%20Ankara&output=embed"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full"
                  style={{ border: 0 }}
                />
              </AspectRatio>
            </TabsContent>
            <TabsContent value="erzurum" className="m-0">
              <AspectRatio ratio={16 / 7}>
                <iframe
                  src="https://www.google.com/maps?q=Erzurum%20Yıldızkent&output=embed"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full"
                  style={{ border: 0 }}
                />
              </AspectRatio>
            </TabsContent>
          </div>

          {/* Branch selector */}
          <div className="mt-8 text-center">
            <h3 className="text-3xl md:text-4xl font-serif font-extrabold text-foreground">Şubelerimiz</h3>
            <div className="mt-4 flex justify-center">
              <TabsList>
                <TabsTrigger value="ankara">Ankara</TabsTrigger>
                <TabsTrigger value="erzurum">Erzurum</TabsTrigger>
              </TabsList>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Ankara: Mayra Park AVM — Erzurum: Yıldızkent
            </p>
          </div>
        </Tabs>
      </div>
    </section>
  )
}
