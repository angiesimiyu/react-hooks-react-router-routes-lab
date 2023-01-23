import React from "react";
import { actors } from "../data";

function Actors() {
  return <div>
    <h1>Actors Page</h1>

    {actors.map((actor, index )=> {
      return ( <ul key={index}>
    <h2 key={actor.name}>Name: {actor.name}</h2>

   {actor.movies.map((movie, name) => {
    return <li key={name}>{movie}</li>
   })}
    </ul>
      )
    })}
  </div>;
}

export default Actors;
