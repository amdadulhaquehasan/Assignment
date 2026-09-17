const url = "https://api.tvmaze.com";

function normalizeShow(show) {
  return {
    id: show.id,
    title: show.name,
    poster:
      show.image?.original ||
      show.image?.medium ||
      "https://placehold.co/400x600/181B21/9A9CA5?text=No+Poster",
    backdrop: show.image?.original || show.image?.medium || null,
    year: show.premiered ? show.premiered.slice(0, 4) : "—",
    rating: show.rating?.average ?? null,
    genres: show.genres ?? [],
    network: show.network?.name || show.webChannel?.name || "Unknown network",
    status: show.status || "Unknown",
    summary: stripHtml(show.summary),
  };
}

function stripHtml(html) {
  if (!html) return "No summary available.";
  return html
    .replace(/<\/p>/g, " ")
    .replace(/<[^>]+>/g, "")
    .trim();
}

export async function fetchAllShows() {
  const res = await fetch(`${url}/shows`);
  if (!res.ok) throw new Error(`Failed to load shows (${res.status})`);
  const data = await res.json();
  return data.map(normalizeShow);
}

export async function searchShows(query) {
  const res = await fetch(
    `${url}/search/shows?q=${encodeURIComponent(query)}`
  );
  if (!res.ok) throw new Error(`Search failed (${res.status})`);
  const data = await res.json();
  // /search/shows wraps each result as { score, show }
  return data.map((entry) => normalizeShow(entry.show));
}
