import Logo from "../assets/logo.svg";
import Ring from "../assets/ring.svg";
import Moon from "../assets/icons/moon.svg";
import Cart from "../assets/shopping-cart.svg";
import { useContext, useState } from "react";
import CartDetails from "./cine/CartDetails";
import { MovieContext } from "../context";

export default function Header() {
 const [showCart, setShowCart] = useState(false);
 const { cartData } = useContext(MovieContext);

 //  console.log("cartData", cartData);

 const handleShowCart = () => {
  setShowCart(true);
 };

 return (
  <header>
   {showCart && <CartDetails onClose={() => setShowCart(false)} />}
   <nav className="container flex items-center justify-between space-x-10 py-6 mx-auto">
    <a href="index.html">
     <img src={Logo} width="139" height="26" alt="" />
    </a>

    <ul className="flex items-center space-x-5">
     <li>
      <a
       className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
       href="#"
      >
       <img src={Ring} width="24" height="24" alt="" />
      </a>
     </li>
     <li>
      <a
       className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
       href="#"
      >
       <img src={Moon} width="24" height="24" alt="" />
      </a>
     </li>
     <li>
      <a
       className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
       href="#"
       onClick={handleShowCart}
      >
       <img src={Cart} width="24" height="24" alt="" />
       {cartData.length > 0 && <span>{cartData.length}</span>}
      </a>
     </li>
    </ul>
   </nav>
  </header>
 );
}
