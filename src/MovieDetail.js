import React from "react";

function MovieDetails({ movie }) {
  return (
    <div>
      <h3>{movie.Title}</h3>
      <p>{movie.Plot}</p>
      <img src={movie.Poster} alt={`Title: ${movie.Title}`} />
      <p>IMDB Rating: {movie.imdbRating}</p>
    </div>
  );
}

export default MovieDetails;
