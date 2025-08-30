import { Card, CardContent, Typography, CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function MovieCard({ movie }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movies/${movie.tconst}`); // use tconst from IMDb dataset
  };

  return (
    <Card>
      <CardActionArea onClick={handleClick}>
        <CardContent>
          <Typography variant="h6">{movie.primarytitle}</Typography>
          <Typography>Year: {movie.startyear}</Typography>
          <Typography>Genres: {movie.genres}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
