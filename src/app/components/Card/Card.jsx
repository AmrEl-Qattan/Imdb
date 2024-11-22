import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";

export default function Card({ result }) {
  // Check if the backdrop_path or poster_path exists
  const imageUrl = result.backdrop_path
    ? `https://image.tmdb.org/t/p/original/${result.backdrop_path}`
    : result.poster_path
    ? `https://image.tmdb.org/t/p/original/${result.poster_path}`
    : '/images/default-poster.jpg'; // Fallback to default image if neither path exists

  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={imageUrl}
          width={500}
          height={300}
          alt={result.original_title || result.title || "Movie Poster"} // Use meaningful alt text
          className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300"
        />
        <div className="p-2">
          <p className="line-clamp-2">{result.overview}</p>
          <h2 className="text-lg font-bold truncate">
            {result.title || result.name || "Untitled"}
          </h2>
          <p className="flex items-center">
            {result.release_date || result.first_air_date}
            <FiThumbsUp className="h-5 mr-1 ml-3" />
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}
