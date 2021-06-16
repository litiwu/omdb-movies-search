import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import PlaceHolder from "../images/placeholder.png";

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
}));

export default function Movies(props) {
  const classes = useStyles();

  function moviePoster(movie) {
    if (movie.Poster === "N/A") return PlaceHolder;
    else return movie.Poster;
  }

  return (
    <div className={classes.root}>
      <div className={classes.grid}>
        {props.movies.map((movies) => {
          return (
            <Card className={classes.card} key={movies.Title}>
              <div
                onClick={() => {
                  console.log("hi");
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
    </div>
  );
}
