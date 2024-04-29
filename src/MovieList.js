import React from "react";

function MovieList({ movies, onSelect }) {
  return (
    <ul>
      {movies.map((movie, index) => (
        <li key={index} onClick={() => onSelect(index)}>
          <h4>{movie.title}</h4>
          <h4>{movie.year}</h4>
          <h4>{movie.imdbRating}</h4>
          <h4>{movie.plot}</h4>
          <br />
          <div>
            <img src={movie.poster} alt="An image" />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
