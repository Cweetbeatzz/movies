import logo from "./logo.svg";
import "./App.css";

import MovieList from "./MovieList";
import MovieDetails from "./MovieDetail";
import SearchMovie from "./SearchMovie.js";
import { useState } from "react";
import axios from "axios";

// function App() {
//   return (
//     <div className="App">
//       <h1> IMDB Movie Search</h1>
//       <SearchMovies />

//       {/* <MovieDetails id="tt3896198" /> */}
//     </div>
//   );
// }

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchHistory, setSearchHistory] = useState(
    JSON.parse(localStorage.getItem("searchHistory")) || []
  );

  const searchMovies = async (title) => {
    await axios
      .get(`https://localhost:44302/api/movies/search/${title}`)
      .then((res) => {
        console.log("res", res);

        if (res.data.search) {
          setMovies(res.data.search || []);
          updateSearchHistory(title);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const updateSearchHistory = (query) => {
    const updatedHistory = [
      query,
      ...searchHistory.filter((item) => item !== query).slice(0, 4),
    ];
    setSearchHistory(updatedHistory);
    localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
  };

  const selectMovie = async (id) => {
    await axios
      .get(`https://localhost:44302/api/movies/movie/${id}`)
      .then((res) => {
        console.log("res", res);

        setSelectedMovie(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <>
      <h1>Search History: </h1>
      {searchHistory.map((srr, index) => (
        <li key={index}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h4>{srr}</h4>
          </div>

          <br />
        </li>
      ))}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1> IMDB Movie Search</h1>
        <br />

        <br />
        <div>
          <SearchMovie onSearch={searchMovies} />
          <MovieList movies={movies} onSelect={selectMovie} />
          {selectedMovie && <MovieDetails movie={selectedMovie} />}
        </div>
      </div>
    </>
  );
}

export default App;
