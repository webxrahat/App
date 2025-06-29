const data = [
  {
    id: crypto.randomUUID(),
    name: "Classic Cotton Tee",
    image: "/img/image-1.png",
    price: "550",
    inventory: "20",
    rating: "4.2",
    offerPrice: "450",
  },
  {
    id: crypto.randomUUID(),
    name: "Vintage Logo Shirt",
    image: "/img/image-2.png",
    price: "600",
    inventory: "15",
    rating: "4.5",
    offerPrice: null,
  },
  {
    id: crypto.randomUUID(),
    name: "Graphic Print Tee",
    image: "/img/image-3.png",
    price: "700",
    inventory: "10",
    rating: "4.0",
    offerPrice: null,
  },
  {
    id: crypto.randomUUID(),
    name: "Oversized Streetwear Tee",
    image: "/img/image-5.png",
    price: "750",
    inventory: "25",
    rating: "4.6",
    offerPrice: null,
  },
  {
    id: crypto.randomUUID(),
    name: "Minimalist White Tee",
    image: "/img/image-6.png",
    price: "500",
    inventory: "30",
    rating: "3.9",
    offerPrice: "430",
  },
  {
    id: crypto.randomUUID(),
    name: "Retro Colorblock Tee",
    image: "/img/image-7.png",
    price: "650",
    inventory: "12",
    rating: "4.3",
    offerPrice: "590",
  },
  {
    id: crypto.randomUUID(),
    name: "Tie-Dye Vibes Tee",
    image: "/img/image-8.png",
    price: "800",
    inventory: "8",
    rating: "4.7",
    offerPrice: null,
  },
  {
    id: crypto.randomUUID(),
    name: "Slim Fit Crew Neck",
    image: "/img/image-9.png",
    price: "580",
    inventory: "18",
    rating: "4.1",
    offerPrice: "500",
  },
  {
    id: crypto.randomUUID(),
    name: "Bold Statement Tee",
    image: "/img/image-10.png",
    price: "620",
    inventory: "22",
    rating: "4.4",
    offerPrice: null,
  },
];

function Products() {
  return data;
}

export { Products };
