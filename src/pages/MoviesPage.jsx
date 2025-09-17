import { useEffect, useState } from "react";
import { Typography, Grid } from "@mui/material";
import { getMovies } from "../api/movies";
import DataTable from "../components/DataTable";
import { useNavigate } from "react-router-dom";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getMovies().then(setMovies).catch(console.error);
  }, []);

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Movies
      </Typography>

      <DataTable
        metadata={[
          { name: "Title", key: "primarytitle" },
          { name: "Year", key: "startyear" },
          { name: "Genres", key: "genres" },
        ]}
        data={movies}
        maxHeight={400}
        handleRowClick={(movie) => navigate(`/movies/${movie.tconst}`)}
      />
    </>
  );
}
