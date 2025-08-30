import { useEffect, useState } from "react";
import { Typography, Grid } from "@mui/material";
import MovieCard from "../components/MovieCard";
import { getMovies } from "../api/movies";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then(setMovies).catch(console.error);
  }, []);

  return (
    <>
      <Typography variant="h4" gutterBottom>Movies</Typography>
      <Grid container spacing={2}>
        {movies.map((movie) => (
          <Grid item xs={12} sm={6} md={4} key={movie.tconst}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
