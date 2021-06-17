import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";

export default function ModalInfo(props) {
  const [movieDetail, setMovieDetail] = useState([]);
  const [showMovieDetail, setShowMovieDetail] = useState(false);

  function getMovieDetails(id) {
    let response;
    async function fetchMyAPI(id) {
      const apiUrl = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API}&i=${id}&r=json`;
      console.log(apiUrl);
      response = await fetch(apiUrl);
      response = await response.json();
      console.log(response.Search);
      if (response.Response == "False") setShowMovieDetail(false);
      else {
        movieDetail(response.Search);
        setMovieDetail(true);
      }
    }

    fetchMyAPI(id);
  }

  return (
    <div>
      <h2>its me, modal</h2>
    </div>
  );
}
