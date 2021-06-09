import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Logo from "../images/me_movies.png";
import Movies from "./Movies";

const useStyles = makeStyles((theme) => ({
  img: {
    paddingTop: "5vw",
    paddingBottom: "2vw",
    height: "100px",
  },
}));

export default function Home() {
  const classes = useStyles();
  const history = useHistory();

  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [showMovies, setShowMovies] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 10;

  function handleSubmit(e, page) {
    e.preventDefault();
    let response;
    async function fetchMyAPI(page) {
      const searchParam = encodeURIComponent(query);
      const apiUrl = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API}&s=${searchParam}&page={currentPage}&type=movie&r=json`;
      console.log(apiUrl);
      response = await fetch(apiUrl);
      response = await response.json();
      console.log(response.Search);
      setMovies(response.Search);
    }

    fetchMyAPI(page);
    setShowMovies(true);
    setQuery("");

    //history.push("/search");
  }

  return (
    <div>
      <img src={Logo} className={classes.img} c />
      <form onSubmit={handleSubmit}>
        <label htmlFor="queryInput">Search Movie Name:</label>
        <input
          id="queryInput"
          value={query}
          type="text"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search">Submit</button>
      </form>
      <button
        onClick={() => {
          setCurrentPage(currentPage + 1);
          handleSubmit(currentPage).then((movies) => setMovies(movies));
        }}
      ></button>
      <div>{showMovies ? <Movies movies={movies} /> : <></>}</div>
    </div>
  );
}
