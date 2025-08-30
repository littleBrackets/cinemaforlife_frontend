import axios from "axios";

const API_BASE = "http://localhost:5000/api"; // adjust if needed

export async function getPeople(limit = 20, offset = 0) {
  const res = await axios.get(`${API_BASE}/people?limit=${limit}&offset=${offset}`);
  return res.data;
}

export async function getPersonById(id) {
  const res = await axios.get(`${API_BASE}/people/${id}`);
  return res.data;
}
