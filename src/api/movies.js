import api from "./axios";

export async function getMovies() {
  const res = await api.get("/movies");
  return res.data;
}

export async function getMovieById(id) {
  const res = await api.get(`/movies/${id}`);
  return res.data;
}
