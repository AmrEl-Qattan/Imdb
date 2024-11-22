"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";


export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = (e) =>{
    e.preventDefault();
   router.push(`/search/${search}`)
  }  
  return (

    <form onSubmit={handleSubmit} className="flex justify-between px-5 max-w-6xl mx-auto">
      <input
        className="w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1"
        type="text"
        placeholder="Search Keywords..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button disabled={search === ''} className="text-amber-600 disabled:text-gray-400">Search</button>
    </form>
  );
}
