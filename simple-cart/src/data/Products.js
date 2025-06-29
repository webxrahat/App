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
  image: "https://example.com/images/tshirt2.jpg",
  price: "600",
  inventory: "15",
  rating: "4.5",
  offerPrice: null,
 },
 {
  id: crypto.randomUUID(),
  name: "Graphic Print Tee",
  image: "https://example.com/images/tshirt3.jpg",
  price: "700",
  inventory: "10",
  rating: "4.0",
  offerPrice: null,
 },
 {
  id: crypto.randomUUID(),
  name: "Oversized Streetwear Tee",
  image: "https://example.com/images/tshirt4.jpg",
  price: "750",
  inventory: "25",
  rating: "4.6",
  offerPrice: null,
 },
 {
  id: crypto.randomUUID(),
  name: "Minimalist White Tee",
  image: "https://example.com/images/tshirt5.jpg",
  price: "500",
  inventory: "30",
  rating: "3.9",
  offerPrice: "430",
 },
 {
  id: crypto.randomUUID(),
  name: "Retro Colorblock Tee",
  image: "https://example.com/images/tshirt6.jpg",
  price: "650",
  inventory: "12",
  rating: "4.3",
  offerPrice: "590",
 },
 {
  id: crypto.randomUUID(),
  name: "Tie-Dye Vibes Tee",
  image: "https://example.com/images/tshirt7.jpg",
  price: "800",
  inventory: "8",
  rating: "4.7",
  offerPrice: null,
 },
 {
  id: crypto.randomUUID(),
  name: "Slim Fit Crew Neck",
  image: "https://example.com/images/tshirt8.jpg",
  price: "580",
  inventory: "18",
  rating: "4.1",
  offerPrice: "500",
 },
 {
  id: crypto.randomUUID(),
  name: "Bold Statement Tee",
  image: "https://example.com/images/tshirt9.jpg",
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
