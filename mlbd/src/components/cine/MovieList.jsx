import React from "react";
import { getAllMovies } from "../../Data/movies";
import MovieCard from "./MovieCard";

export default function MovieList() {
 const movies = getAllMovies();

 return (
  <div>
   <div className="content">
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
     {movies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} />
     ))}
    </div>
   </div>
  </div>
 );
}
