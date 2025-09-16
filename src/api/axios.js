import axios from "axios";

export const movieService = axios.create({
  baseURL: process.env.REACT_APP_MOVIE_SERVICE, // backend express base URL
});

export const userService = axios.create({
  baseURL: process.env.REACT_APP_USER_SERVICE, // backend express base URL
});
