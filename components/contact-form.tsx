"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function ContactForm() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get("name") || "")
    alert(`Teşekkürler ${name}! Mesajınız alındı.`)
    e.currentTarget.reset()
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="name">Ad Soyad</Label>
        <Input id="name" name="name" placeholder="Adınız" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">E‑posta</Label>
        <Input id="email" name="email" type="email" placeholder="ornek@eposta.com" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Mesajınız</Label>
        <Textarea id="message" name="message" placeholder="Merhaba..." rows={5} required />
      </div>
      <div>
        <Button type="submit" className="tracking-wide">Gönder</Button>
      </div>
    </form>
  )
}

