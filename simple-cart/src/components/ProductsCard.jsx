import { useContext } from "react";
import { ProductContext } from "../context";
import Rating from "./Rating";

export default function ProductsCard() {
 const { productList, dispatch } = useContext(ProductContext);

 const handleAddToCart = (item) => {
  dispatch({
   type: "Add",
   cartList: item,
  });
 };
 console.log("productList", productList);

 return (
  <div className="product-grid">
   {productList.itemList.map((item) => (
    <div
     key={item.id}
     className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300"
    >
     <div className="h-48 bg-gray-200 flex items-center justify-center">
      <img
       src={item.image}
       alt={item.name}
       className="h-full w-auto object-cover"
      />
     </div>
     <div className="p-4">
      <h3 className="font-medium">{item.name}</h3>
      <div className="flex items-center justify-between">
       <Rating value={item.rating} />

       <span className="text-xs text-gray-700">
        ({item.inventory} pcs left)
       </span>
      </div>
      <p className="font-bold">$ {item.price} </p>
      <button
       onClick={() => handleAddToCart(item)}
       className="bg-gray-700 w-full mt-2 py-1 text-gray-100 rounded flex items-center justify-center cursor-pointer"
      >
       Add to Cart
      </button>
     </div>
    </div>
   ))}

   <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
    <div className="h-48 bg-gray-200 flex items-center justify-center">
     <img
      src="./assets/img/image 10-1.png"
      alt="Polo with Tipping Details"
      className="h-full w-auto object-cover"
     />
    </div>
    <div className="p-4">
     <h3 className="font-medium">Polo with Tipping Details</h3>
     <div className="flex items-center justify-between">
      <div className="flex items-center my-1">
       <div className="flex text-yellow-400">
        <span>★</span>
        <span className="text-gray-300">★</span>
        <span className="text-gray-300">★</span>
        <span className="text-gray-300">★</span>
        <span className="text-gray-300">★</span>
       </div>
       <span className="text-xs text-gray-500 ml-1">1/5</span>
      </div>
      <span className="text-xs text-gray-700">(320 pcs left)</span>
     </div>
     <p className="font-bold">$180</p>
     <button className="disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed w-full mt-2 bg-gray-800 py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1 transition-all active:bg-gray-900">
      Add to Cart
     </button>
    </div>
   </div>

   <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
    <div className="h-48 bg-gray-200 flex items-center justify-center">
     <img
      src="./assets/img/image 10-2.png"
      alt="Black Striped T-shirt"
      className="h-full w-auto object-cover"
     />
    </div>
    <div className="p-4">
     <h3 className="font-medium">Black Striped T-shirt</h3>
     <div className="flex items-center justify-between">
      <div className="flex items-center my-1">
       <div className="flex text-yellow-400">
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span className="text-gray-300">★</span>
        <span className="text-gray-300">★</span>
       </div>
       <span className="text-xs text-gray-500 ml-1">3/5</span>
      </div>
      <span className="text-xs text-gray-700">(420 pcs left)</span>
     </div>
     <div className="flex items-center">
      <p className="font-bold">$120</p>
      <p className="text-gray-400 line-through ml-2">$160</p>
     </div>
     <button className="w-full mt-2 bg-red-800 py-1 text-gray-100 rounded flex items-center justify-center">
      Remove from Cart
     </button>
    </div>
   </div>
  </div>
 );
}
