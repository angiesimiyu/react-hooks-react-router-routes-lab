import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>
    <h1>Movies Page</h1>
    {movies.map((movie, index) => {
        return (
          <div key={index}>
              <h2>Name: {movie.title}</h2>
              <h3>Time: {movie.time}</h3>
              <h3>Genre</h3>

            {movie.genres.map((genre,name) => {
              return (
              <ul key={name}>
              <li >{genre}</li>
              </ul>
              )
            }) }

          </div>)
      })}
  </div>;
}

export default Movies;
