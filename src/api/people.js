import {movieService} from "./axios";

export async function getPeople(limit = 20, offset = 0) {
  const res = await movieService.get(`/people?limit=${limit}&offset=${offset}`);
  return res.data;
}

export async function getPersonById(id) {
  const res = await movieService.get(`/people/${id}`);
  return res.data;
}
