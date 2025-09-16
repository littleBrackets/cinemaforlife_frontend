import {movieService} from "./axios";

export async function getMovies() {
  const res = await movieService.get("/movies");
  return res.data;
}

export async function getMovieById(id) {
  const res = await movieService.get(`/movies/${id}`);
  return res.data;
}
