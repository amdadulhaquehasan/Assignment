import { useEffect, useState, useMemo } from "react"
import { fetchAllShows, searchShows} from "../services/tvmaze"
import MovieCard from "../components/MovieCard"
import MovieModal from "../components/MovieModal"
import SearchBar from "../components/SearchBar"

export default function Movies() {
  const [allShows, setAllShows] = useState([])
  const [query, setQuery] = useState("")
  const [searchResults, setSearchResults] = useState(null)
  const [status, setStatus] = useState("loading")
  const [selectedMovie, setSelectedMovie] = useState(null)

  useEffect(() => {
    let cancelled = false
    fetchAllShows()
      .then((shows) => {
        if (!cancelled) {
          setAllShows(shows)
          setStatus("ready")
        }
      })
      .catch(() => {
        if (!cancelled) setStatus("error")
      });
    return () => {
      cancelled = true
    };
  }, [])

  useEffect(() => {
    const trimmed = query.trim();
    if (!trimmed) {
      return;
    }
    const timer = setTimeout(() => {
      searchShows(trimmed)
        .then(setSearchResults)
        .catch(() => setSearchResults([]));
    }, 350);
    return () => clearTimeout(timer)
  }, [query]);

  const moviesToShow = useMemo(() => {
    return searchResults !== null ? searchResults : allShows
  }, [searchResults, allShows]);

  return (
    <div className="flex min-h-screen flex-col">
      <div className="mx-auto max-w-content px-6 py-10">
        <h1 className="font-display text-3xl font-semibold text-paper sm:text-4xl">
          Browse movies
        </h1>
        <p className="mt-2 text-paper-muted">
          {searchResults !== null
            ? `${moviesToShow.length} result${
                moviesToShow.length === 1 ? "" : "s"
              } for "${query.trim()}"`
            : "Explore the full catalog, or search for a title."}
        </p>

        <div className="mt-6 max-w-xl">
          <SearchBar value={query} onChange={setQuery} />
        </div>

        <div className="mt-10">
          {status === "loading" && (
            <p className="py-16 text-center text-paper-muted">
              Loading movies…
            </p>
          )}

          {status === "error" && (
            <p className="py-16 text-center text-paper-muted">
              Something went wrong loading movies. Please try again later.
            </p>
          )}

          {status === "ready" && moviesToShow.length === 0 && (
            <p className="py-16 text-center text-paper-muted">
              No movies found. Try a different title.
            </p>
          )}

          {status === "ready" && moviesToShow.length > 0 && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {moviesToShow.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  onSeeDetails={setSelectedMovie}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
}
