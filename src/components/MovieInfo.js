import React, { useState, useEffect } from "react";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core";
import Movies from "./Movies";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
  },
  pge: {
    marginTop: "20px",
  },
}));

export default function MovieInfo(props) {
  const classes = useStyles();
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [showMovies, setShowMovies] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  function getPage(page) {
    let response;
    let searchParam;
    async function fetchMyAPI(page) {
      searchParam = props.location.state.query;

      setCurrentPage(page);
      const apiUrl = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API}&s=${searchParam}&page=${page}&type=movie&r=json`;
      console.log(apiUrl);
      response = await fetch(apiUrl);
      response = await response.json();
      console.log(response.Search);
      if (response.Response == "False") setShowMovies(false);
      else {
        console.log("error in movieInfo");
        setMovies(response.Search);
        setTotalPages(Math.ceil(response.totalResults / 10));
        setShowMovies(true);
      }
      setQuery("");
    }

    fetchMyAPI(page);
  }

  useEffect(() => {
    console.log("error in useEffect");
    getPage(currentPage);
  }, [currentPage]);

  return (
    <div>
      <Navbar />
      <div className={classes.root}>
        <div>{showMovies ? <Movies movies={movies} /> : <div />}</div>
        <Pagination
          className={classes.pge}
          count={totalPages}
          onChange={(event, page) => {
            setCurrentPage(page);
          }}
        />
      </div>
    </div>
  );
}
