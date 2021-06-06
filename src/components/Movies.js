import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, CardMedia, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "500px",
    width: "300px",
  },
  img: {
    height: "350px",
    width: "250px",
    margin: "auto",
  },
}));

export default function Movies(props) {
  const classes = useStyles();

  return (
    <div>
      {props.movies.map((movies) => {
        return (
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Grid item>
              <Card className={classes.card}>
                <CardContent>
                  <Typography gutterBottom variant="h9" component="h3">
                    {movies.Title}
                  </Typography>
                  <CardMedia className={classes.img} image={movies.Poster} />
                  {movies.Year}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        );
      })}
    </div>
  );
}
