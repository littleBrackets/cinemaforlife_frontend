import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { getMovieById } from "../api/movies";

export default function MovieDetailsPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieById(id).then(setMovie).catch(console.error);
  }, [id]);

  if (!movie) return <Typography>Loading...</Typography>;

  return (
    <>
      <Typography variant="h4">{movie.primarytitle}</Typography>
      <Typography>Year: {movie.startyear}</Typography>
      <Typography>Genres: {movie.genres}</Typography>
    </>
  );
}
