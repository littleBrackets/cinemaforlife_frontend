import React from "react";

function MovieDetail({ movie }) {
  if (!movie) return <div>Select a movie to see details</div>;

  return (
    <div>
      <h2>{movie.primaryTitle}</h2>
      <p>Genres: {movie.genres || "N/A"}</p>
      <p>Rating: {movie.averageRating || "N/A"} from {movie.numVotes || 0} votes</p>
    </div>
  );
}

export default MovieDetail;
