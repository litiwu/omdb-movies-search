import React, { useState } from "react";
import Movies from "./Movies";
import movies from "./Home";
import showMovies from "./Home";

export default function MovieInfo() {
  return <div>{showMovies ? <Movies movies={movies} /> : <></>}</div>;
}
