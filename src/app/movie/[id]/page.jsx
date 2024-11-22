import Image from "next/image";
import React from "react";

export default async function MoviePage({ params }) {
  const movieId = (await params)?.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  const movie = await res.json();
  // console.log(movie);

  const imageUrl =
    movie.backdrop_path || movie.poster_path
      ? `https://image.tmdb.org/t/p/original/${
          movie.backdrop_path || movie.poster_path
        }`
      : "/images/default-poster.jpg"; 

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          className="rounded-lg"
          src={imageUrl} 
          width={500}
          height={300}
          style={{ maxWidth: '100%', height: '100%' }}
          alt={movie.original_title || "No Title Available"} 
        />

        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">{movie.title || movie.name || "Untitled"}</h2>
          <p className="text-lg mb-3">{movie.overview || "No overview available"}</p>

          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released: </span>
            {movie.release_date || movie.first_air_date || "No release date available"}
          </p>

          <p className="mb-3">
            <span className="font-semibold mr-1">Rating: </span>
            {movie.vote_count || "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
}
