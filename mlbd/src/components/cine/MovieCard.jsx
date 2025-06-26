import { useState } from "react";
import { getImgUrl } from "../../utils/cine-utility";
import Rating from "./Rating";
import MovieDetailsModal from "./MovieDetailsModal";

export default function MovieCard({ movie }) {
 const [myShowModal, setMyShowModal] = useState(false);
 const [selectedMovie, setSelectedMovie] = useState(null);

 const handleModalClose = () => {
  setSelectedMovie(null);
  setMyShowModal(false);
 };
 const handleMovieSelection = (movie) => {
  setSelectedMovie(movie);
  setMyShowModal(true);

  console.log("click");
 };

 console.log("myShowModal", myShowModal);

 return (
  <>
   {myShowModal && (
    <MovieDetailsModal movie={selectedMovie} onClose={handleModalClose} />
   )}
   <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
    <a href="#" onClick={() => handleMovieSelection(movie)}>
     <img
      className="w-full object-cover"
      src={getImgUrl(movie.cover)}
      alt={movie.title}
     />
     <figcaption className="pt-4">
      <h3 className="text-xl mb-1">{movie.title}</h3>
      <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>

      <Rating value={movie.rating} />

      <button
       className="bg-blue-400 w-full cursor-pointer rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
       href="#"
      >
       <img src="./assets/tag.svg" alt="" />
       <span>${movie.price} | Add to Cart</span>
      </button>
     </figcaption>
    </a>
   </figure>
  </>
 );
}
