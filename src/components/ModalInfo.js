import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PlaceHolder from "../images/placeholder.png";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
  flex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  poster: {
    paddingLeft: "20px",
  },
  img: {
    height: "400px",
    width: "280px",
    margin: "auto",
    objectFit: "contain",
  },
  info: {
    alignItems: "center",
    paddingLeft: "40px",
    paddingBottom: "80px",
  },
  h2: {
    marginBlock: "5px",
    fontSize: "50px",
    color: "#484343",
  },
  p: {
    fontSize: "18px",
    color: "#858585",
  },
  plot: {
    fontSize: "18px",
    color: "#858585",
  },
  dir: {
    fontSize: "22px",
    color: "#686868",
  },
  chip: {
    backgroundColor: "#FFB2B2",
    fontSize: "14px",
    color: "#FFFFFF",
  },
}));

export default function ModalInfo(props) {
  const classes = useStyles();
  const [movieDetail, setMovieDetail] = useState([]);

  function moviePosterGetter() {
    if (movieDetail.Poster === "N/A") return PlaceHolder;
    else return movieDetail.Poster;
  }

  function getMovieDetails(id) {
    let response;
    async function fetchMyAPI(id) {
      const apiUrl = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API}&i=${id}&r=json`;
      response = await fetch(apiUrl);
      response = await response.json();
      if (response.Response === "True") setMovieDetail(response);
    }
    fetchMyAPI(id);
  }

  useEffect(() => {
    getMovieDetails(props.id);
  }, [props.id]);

  return (
    <div className={classes.flex}>
      <div className={classes.poster}>
        <img
          className={classes.img}
          src={moviePosterGetter()}
          alt={movieDetail.Name}
        />
      </div>
      <div className={classes.info}>
        <p className={classes.p}>
          {movieDetail.Released} · {movieDetail.Runtime}
        </p>
        <h2 className={classes.h2}>{movieDetail.Title}</h2>
        <h3 className={classes.dir}>{movieDetail.Director}</h3>
        <p className={classes.plot}>{movieDetail.Plot}</p>
        <div>
          {movieDetail.Genre &&
            movieDetail.Genre.split(", ").map((g) => {
              return (
                <span style={{ paddingRight: "5px" }}>
                  <Chip className={classes.chip} label={g}></Chip>
                </span>
              );
            })}
        </div>
      </div>
    </div>
  );
}
