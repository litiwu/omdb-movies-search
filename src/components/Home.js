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
  const [pageQuery, setPageQuery] = useState("");

  function handleSubmit(e, page, query) {
    let response;
    let searchParam;
    async function fetchMyAPI(page) {
      if (query === null) searchParam = encodeURIComponent(pageQuery);
      else {
        searchParam = encodeURIComponent(query);
        setPageQuery(query);
      }

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

  return (
    <div>
      <img src={Logo} className={classes.img} />
      <form
        onSubmit={(e) => {
          handleSubmit(e, 1, query);
        }}
      >
        <label htmlFor="queryInput">Search Movie Name:</label>
        <input
          id="queryInput"
          value={query}
          type="text"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="search"
          onClick={(e) => {
            history.push("/search", { query: query });
            e.preventDefault();
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
