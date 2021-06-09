import React, { useState } from "react";
import Movies from "./Movies";
import movies from "./Home";
import showMovies from "./Home";

export default function MovieInfo(props) {
  console.log(props);
  return (
    <div>
      {showMovies ? <Movies movies={props.location.state.movies} /> : <></>}
    </div>
  );
}
