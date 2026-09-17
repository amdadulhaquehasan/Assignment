import { Copyright } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-screen-line bg-screen">
        <div className="mx-auto flex max-w-content flex-col items-center gap-3 px-6 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-display text-lg font-semibold text-paper">
              Movie
              <span className="text-violet">
                  Explorer
              </span>
            </p>
            <p className="mt-1 text-sm text-paper-muted">
                <span className="flex items-center gap-1"><Copyright size={15}/> 2026 MovieExplorer. Showtimes are always now.</span>
            </p>
          </div>
          <div className="flex items-center gap-5 text-sm text-paper-muted">
          <a
            href="https://github.com/amdadulhaquehasan/Assignment/tree/main/Assignment_2/Movie-Explorer"
            className="transition-colors hover:text-violet"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.tvmaze.com/api"
            className="transition-colors hover:text-violet"
            target="_blank"
            rel="noreferrer"
          >
            Data via TVMaze
          </a>
        </div>
        </div>
    </footer>
  )
}
