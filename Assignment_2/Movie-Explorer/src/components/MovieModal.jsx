import { Calendar, CircleDot, Tv2, X } from "lucide-react"
import { useEffect } from "react"
import Rating from "./Rating";

export default function MovieModal({ movie, onClose }) {
    useEffect(()=>{
        function handleKey(e){
            if(e.key === "Escape") onClose()
        }
        document.addEventListener("keydown", handleKey)
        document.body.style.overflow = "hidden"
        return() =>{
            document.removeEventListener("keydown", handleKey)
            document.body.style.overflow = ""
        }
    },[onClose])

    if(!movie) {
        return null
    }
    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="movie-modal-title"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            onClick={(e) => {
                if (e.target === e.currentTarget) onClose();
            }}
        >
            <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-sm border border-screen-line bg-screen-surface">
                <div className="relative">
                    {movie.backdrop ? (
                        <img
                            src={movie.backdrop}
                            alt={`${movie.title} backdrop`}
                            className="h-64 w-full object-cover sm:h-80"
                        />
                    ):(
                        <div className="flex h-64 w-full items-center justify-center bg-screen-raised text-paper-muted sm:h-80">
                            No image available
                        </div>
                    )}
                    <button
                        onClick={onClose}
                        aria-label="Close"
                        className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-screen/80 text-paper transition-colors hover:bg-violet hover:text-screen"
                    >
                        <X size={18} />
                    </button>
                </div>
                <div className="p-6 sm:p-8">
                    <h2
                        id="movie-modal-title"
                        className="font-display text-2xl font-semibold text-paper sm:text-3xl"
                    >
                        {movie.title}
                    </h2>

                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-paper-muted">
                        <Rating value={movie.rating} />
                        <span className="inline-flex items-center gap-1">
                        <Calendar size={14} />
                        Release: {movie.year}
                        </span>
                        <span className="inline-flex items-center gap-1">
                        <Tv2 size={14} />
                        {movie.network}
                        </span>
                        <span className="inline-flex items-center gap-1 capitalize">
                        <CircleDot size={14} />
                        {movie.status}
                        </span>
                    </div>

                    {movie.genres.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                        {movie.genres.map((genre) => (
                            <span
                            key={genre}
                            className="rounded-full border border-violet-dim px-3 py-1 text-xs font-medium text-violet"
                            >
                            {genre}
                            </span>
                        ))}
                        </div>
                    )}

                    <div className="mt-6">
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-paper-muted">
                        Overview
                        </h3>
                        <p className="mt-2 text-base leading-relaxed text-paper">
                        {movie.summary}
                        </p>
                    </div>

                    <button
                        onClick={onClose}
                        className="mt-8 inline-flex items-center gap-2 rounded-sm border border-violet-dim px-5 py-2.5 text-sm font-semibold text-violet transition-colors hover:bg-violet hover:text-screen"
                    >
                        <X size={16} />
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}
