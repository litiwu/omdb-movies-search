import React, { useState, useEffect } from "react";
import Movies from "./Movies";
import movies from "./Home";
import showMovies from "./Home";

export default function MovieInfo(props) {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [showMovies, setShowMovies] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageQuery, setPageQuery] = useState("");

  function getPage(page) {
    let response;
    let searchParam;
    async function fetchMyAPI(page) {
      searchParam = props.location.state.query;
      console.log(searchParam);

      setCurrentPage(page);
      console.log(searchParam);
      const apiUrl = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API}&s=${searchParam}&page=${page}&type=movie&r=json`;
      console.log(apiUrl);
      try {
        response = await fetch(apiUrl);
        response = await response.json();
        console.log(response.Search);
        setMovies(response.Search);
        setShowMovies(true);
        setQuery("");
      } catch {
        alert("bad");
      }
    }

    fetchMyAPI(page);
  }

  useEffect(() => {
    getPage(currentPage);
  }, [currentPage]);

  return (
    <div>
      <div>{showMovies ? <Movies movies={movies} /> : <></>}</div>
      <button
        onClick={() => {
          getPage(currentPage + 1);
        }}
      >
        Next Page
      </button>
    </div>
  );
}
