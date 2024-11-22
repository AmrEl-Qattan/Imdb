import Results from "./components/ResultsApi/Results";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  
  const genre = searchParams?.genre || "fetchTrending"; 

  try {
    const res = await fetch(
      `https://api.themoviedb.org/3${
        genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
      }?api_key=${API_KEY}&language=en-US&page=1`,
      { next: { revalidate: 60 } }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    const data = await res.json();

    return (
      <div>
        <Results results={data.results} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <h1 className="text-center mt-5">Error: {error.message}</h1>;
  }
}
