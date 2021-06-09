import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, CardMedia } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  grid: {
    display: "flex",
    flexFlow: "row wrap",
    objectFit: "contain",
    justifyContent: "center",
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
}));

export default function Movies(props) {
  const classes = useStyles();

  return (
    <div className={classes.grid}>
      {props.movies.map((movies) => {
        return (
          <Card className={classes.card} key={movies.Title}>
            <CardContent>
              <Typography component="h3">{movies.Title}</Typography>
              <CardMedia className={classes.img} image={movies.Poster} />
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
