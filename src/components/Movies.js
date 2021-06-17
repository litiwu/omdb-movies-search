import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import PlaceHolder from "../images/placeholder.png";
import Modal from "@material-ui/core/Modal";
import { useState } from "react";
import ModalInfo from "./ModalInfo";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  grid: {
    display: "flex",
    maxWidth: "1500px",
    flexFlow: "row wrap",
    objectFit: "contain",
    justifyContent: "center",
    alignSelf: "center",
  },
  card: {
    height: "400px",
    width: "250px",
    marginRight: "10px",
    marginTop: "10px",
  },
  img: {
    height: "300px",
    width: "200px",
    margin: "auto",
  },
  title: {
    color: "#363636",
    paddingTop: "10px",
    paddingLeft: "10px",
    paddingRight: "10px",
    fontWeight: 600,
    fontSize: "20px",
  },
  paper: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    height: "70%",
    backgroundColor: "#FBE4E4",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Movies(props) {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  function moviePoster(movie) {
    if (movie.Poster === "N/A") return PlaceHolder;
    else return movie.Poster;
  }

  const handleOpen = (id) => {
    setSelectedId(id);
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <div className={classes.root}>
      <div className={classes.grid}>
        {props.movies.map((movies) => {
          return (
            <Card className={classes.card} key={movies.Title}>
              <div
                onClick={() => {
                  handleOpen(movies.imdbID);
                }}
              >
                <CardContent>
                  <CardMedia
                    className={classes.img}
                    image={moviePoster(movies)}
                  />
                  <Typography variant="h5" className={classes.title}>
                    {movies.Title}
                  </Typography>
                </CardContent>
              </div>
            </Card>
          );
        })}
      </div>
      <Modal open={openModal} onClose={handleClose}>
        <div className={classes.paper}>
          <ModalInfo id={selectedId} />
        </div>
      </Modal>
    </div>
  );
}
