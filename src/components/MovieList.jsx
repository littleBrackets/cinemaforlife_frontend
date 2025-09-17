import React from "react";
import DataTable from "./DataTable";

function MovieList({ movies, onSelect }) {
  return (
    <div>
      <h2>Top Movies</h2>

      <DataTable
        metadata={[
          { name: "Title", key: "primarytitle" },
          { name: "Genres", key: "genres" },
          { name: "Rating", key: "averagerating" },
        ]}
        data={movies}
        maxHeight={300}
        handleRowClick={(movie) => onSelect(movie.tconst)}
      />


    </div>
  );
}

export default MovieList;
