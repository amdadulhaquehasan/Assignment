import { Calendar, Dot } from "lucide-react";
import Rating from "./Rating";

export default function MovieCard({ movie, onSeeDetails }) {
    return (
        <article className="group flex flex-col overflow-hidden rounded-sm border border-screen-line bg-screen-surface transition-colors hover:border-violet-dim">
            <div className="aspect-2/3 overflow-hidden bg-screen-raised">
                <img 
                    src={movie.poster} 
                    alt={`${movie.title} poster`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" 
                />
            </div>
            <div className="flex flex-1 flex-col gap-2 p-4">
                <h3 className="font-display text-lg font-semibold leading-tight text-paper">
                    {movie.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-paper-muted">
                    <Rating value={movie.rating}/>
                    <span aria-hidden><Dot /></span>
                    <span className="inline-flex items-center gap-1">
                        <Calendar size={14}/>
                        {movie.year}
                    </span>
                </div>
                <button
                    onClick={() => onSeeDetails(movie)}
                    className="mt-3 rounded-sm border border-violet-dim px-4 py-2 text-sm font-semibold text-violet transition-colors hover:bg-violet hover:text-screen" 
                >
                    See Details
                </button>
            </div>
        </article>
    )
}
