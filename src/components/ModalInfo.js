import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

const useStyles = makeStyles((theme) => ({
  flex: {
    display: "flex",
    flexDirection: "row",
  },
  poster: {
    justifyContent: "center",

    paddingRight: "20px",
  },
  info: {
    alignItems: "center",
    paddingTop: "20px",
  },
}));

export default function ModalInfo(props) {
  const classes = useStyles();
  const [movieDetail, setMovieDetail] = useState([]);
  const [showMovieDetail, setShowMovieDetail] = useState(false);

  console.log("inside modal info");

  function getMovieDetails(id) {
    let response;
    async function fetchMyAPI(id) {
      const apiUrl = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API}&i=${id}&r=json`;
      console.log(apiUrl);
      response = await fetch(apiUrl);
      response = await response.json();
      console.log(response);
      if (response.Response == "False") setShowMovieDetail(false);
      else {
        setMovieDetail(response);
        setShowMovieDetail(true);
      }
    }

    fetchMyAPI(id);
  }

  useEffect(() => {
    getMovieDetails(props.id);
  }, [props.id]);

  return (
    <div className={classes.flex}>
      <div className={classes.poster}>
        <img src={movieDetail.Poster} />
      </div>
      <div className={classes.info}>
        <p>
          {movieDetail.Released} · {movieDetail.Runtime}
        </p>
        <h2>{movieDetail.Title}</h2>
        <h3>{movieDetail.Director}</h3>
        <p>{movieDetail.Plot}</p>
      </div>
    </div>
  );
}
