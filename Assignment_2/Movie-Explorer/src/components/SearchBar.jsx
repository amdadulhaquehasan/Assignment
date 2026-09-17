import { Search } from "lucide-react";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative">
      <Search
        size={18}
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-paper-muted"
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search for a movie…"
        aria-label="Search for a movie"
        className="w-full rounded-sm border border-screen-line bg-screen-surface py-3.5 pl-11 pr-4 font-body text-paper placeholder:text-paper-muted focus:border-marquee"
      />
    </div>
  )
}
