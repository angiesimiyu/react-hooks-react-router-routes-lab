import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>
    <h1>Directors Page</h1>

    {directors.map((director, index) => {
      return (
      <ul key={index}>
        <h3  key={director.name}>Name:{director.name}</h3>
        {director.movies.map((directors, name) => {
          return (<li key={name}>{directors}</li>)
        })}
      </ul>
      )
    })}
  </div>;
}

export default Directors;
