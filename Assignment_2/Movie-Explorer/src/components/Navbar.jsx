import { Clapperboard } from "lucide-react";
import { Link, NavLink } from "react-router";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-screen-line bg-transparent backdrop-blur">
        <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
            <Link to="/" className="flex item gap-2 hover:underline decoration-violet">
                <Clapperboard size={30} className="text-violet"/>
                <span className="font-display text-xl font-semibold tracking-tight text-paper">
                    Movie
                    <span className="text-violet">
                        Explorer
                    </span>
                </span>
            </Link>
            <div className="flex items-center gap-6">
                <NavLink to="/" end className={({ isActive }) => `hidden text-sm font-medium transition-colors sm:block ${isActive ? "text-violet-bright hover:text-violet-dim" : "text-paper hover:text-paper-muted"}`}>
                    Home
                </NavLink>
                <NavLink to="/movies" className={({ isActive }) => `rounded-full px-4 py-2 text-sm font-semibold transition-colors ${ isActive ? "bg-violet text-paper hover:bg-black hover:text-paper": "bg-black text-paper hover:bg-violet hover:text-paper" }`}>
                    Movies
                </NavLink>
            </div>
        </nav>
    </header>
  )
}
