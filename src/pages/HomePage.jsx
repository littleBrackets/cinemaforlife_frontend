// import { Typography } from "@mui/material";
// import { useSelector } from "react-redux";

// export default function HomePage() {
//   const isAuthorised = useSelector((state) => state.user.isAuthorised);
//   return (
//     <>
//       <Typography variant="h4">Welcome to CinemaForLife 🎬</Typography>
//       {isAuthorised ? (
//         <></>
//       ) : (
//         <Typography variant="h6">
//           Please login or register to access more features.
//         </Typography>
//       )}
//     </>
//   );
// }


import React, { useEffect, useState } from "react";
import { fetchTopMovies, fetchMovieDetail, fetchRecommendations } from "../api/recommendation";
import MovieList from "../components/MovieList";
import MovieDetail from "../components/MovieDetail";
import RecommendationList from "../components/RecommendationList";
import SearchBar from "../components/SearchBar";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    fetchTopMovies(10).then(setMovies).catch(console.error);
  }, []);

  const handleSelectMovie = (tconst) => {
    fetchMovieDetail(tconst).then(setSelectedMovie).catch(console.error);
    setRecommendations([]); // clear previous recs
  };

  const handleSearch = (title) => {
    fetchRecommendations(title)
      .then(setRecommendations)
      .catch(() => setRecommendations([]));
  };

  return (
    <div>
      <h1>IMDb Movie Recommendations</h1>
      <SearchBar onSearch={handleSearch} />
      <div>
        <div style={{ flex: 1 }}>
          <MovieList movies={movies} onSelect={handleSelectMovie} />
        </div>
        <div style={{ flex: 2 }}>
          <MovieDetail movie={selectedMovie} />
          <RecommendationList recommendations={recommendations} onSelect={handleSelectMovie} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;

