export type Flavour = {
  slug: string
  name: string
  description: string
  color: string // hex for accent/pattern
  images: string[]
}

export const flavours: Flavour[] = [
  {
    slug: "vanilya",
    name: "Vanilla Pod",
    description:
      "Gerçek vanilya çubuklarıyla, katkısız ve yalın bir lezzet.",
    color: "#F2A3C7",
    images: [
      "/vanilla-ice-cream-scoop-with-vanilla-beans.jpg",
      "/ChatGPT%20Image%2018%20Eyl%202025%2013_58_47.png",
      "/DSCF0862.jpg",
      "/DSCF0897.jpg",
    ],
  },
  {
    slug: "cilekli-krema",
    name: "Strawberries & Cream",
    description:
      "Taze çileklerle zenginleştirilmiş, dengeli ve ferahlatıcı bir kremalı tat.",
    color: "#EC8FB4",
    images: [
      "/ChatGPT%20Image%2018%20Eyl%202025%2013_54_35.png",
      "/ChatGPT%20Image%2018%20Eyl%202025%2013_49_49.png",
      "/DSCF0851.jpg",
      "/ChatGPT%20Image%2018%20Eyl%202025%2014_21_55.png",
    ],
  },
  {
    slug: "antep-fistikli",
    name: "Pistachio Delight",
    description:
      "Gerçek Antep fıstığıyla hazırlanan yoğun ve doğal aroma.",
    color: "#8BCF9B",
    images: [
      "/pistachio-ice-cream-scoop-with-pistachios.jpg",
      "/ChatGPT%20Image%2018%20Eyl%202025%2014_35_45.png",
      "/ChatGPT%20Image%2018%20Eyl%202025%2014_36_27.png",
      "/ChatGPT%20Image%2018%20Eyl%202025%2014_38_15.png",
    ],
  },
  {
    slug: "cikolata-gevrek",
    name: "Chocolate Crunch",
    description:
      "Zengin kakao ve çıtır dokuların buluştuğu yoğun bir deneyim.",
    color: "#B37C64",
    images: [
      "/chocolate-hazelnut-ice-cream-scoop.jpg",
      "/ChatGPT%20Image%2018%20Eyl%202025%2014_38_48.png",
      "/DSCF0881%201%20(2).jpg",
      "/ChatGPT%20Image%2018%20Eyl%202025%2014_27_03.png",
    ],
  },
  {
    slug: "ozel-tatlilar",
    name: "Special Desserts",
    description: "Stüdyomuzun imza tabakları: göz ve damak şovu.",
    color: "#9CC7F6",
    images: [
      "/DSCF0851.jpg",
      "/DSCF0862.jpg",
      "/DSCF0897.jpg",
      "/ChatGPT%20Image%2018%20Eyl%202025%2015_03_43.png",
    ],
  },
  {
    slug: "cookie-medley",
    name: "Cookie Medley",
    description: "Kurabiye parçacıklarıyla bol dokulu, keyifli bir tat.",
    color: "#C0B7F2",
    images: [
      "/DSCF0897.jpg",
      "/ChatGPT%20Image%2018%20Eyl%202025%2014_04_51.png",
      "/artisanal-ice-cream-scoops-in-rustic-bowls-with-na.jpg",
      "/arzen_0230.jpg",
    ],
  },
]

export function getFlavour(slug: string) {
  return flavours.find((f) => f.slug === slug)
}
