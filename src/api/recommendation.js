const API_BASE = "http://localhost:8013/api";

export async function fetchTopMovies(limit = 10) {
  const response = await fetch(`${API_BASE}/movies?limit=${limit}`);
  if (!response.ok) throw new Error("Failed to fetch movies");
  return response.json();
}

export async function fetchMovieDetail(tconst) {
  const response = await fetch(`${API_BASE}/movies/${tconst}`);
  if (!response.ok) throw new Error("Failed to fetch movie details");
  return response.json();
}

export async function fetchRecommendations(title) {
  const response = await fetch(`${API_BASE}/recommendations?title=${encodeURIComponent(title)}`);
  if (!response.ok) throw new Error("Failed to fetch recommendations");
  return response.json();
}