import React from "react";

function RecommendationList({ recommendations, onSelect }) {
  if (!recommendations || recommendations.length === 0) return <div>No recommendations available.</div>;

  return (
    <div>
      <h3>Recommended Movies</h3>
      <ul>
        {recommendations.map((rec) => (
          <li key={rec.tconst} onClick={() => onSelect(rec.tconst)}>
            {rec.title} (Score: {rec.score.toFixed(2)})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecommendationList;
