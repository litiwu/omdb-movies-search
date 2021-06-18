import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosRounded from "@material-ui/icons/ArrowBackIosRounded";
import Logo from "../images/me_movies.png";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
    backgroundColor: "#ffe1e1",
  },
  img: {
    maxHeight: "35px",
    align: "center",
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  title: {
    position: "absolute",
    left: "43%",
    display: "block",
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.root}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            onClick={(e) => {
              history.push("/");
              e.preventDefault();
            }}
          >
            <ArrowBackIosRounded />
          </IconButton>
          <div className={classes.title}>
            <img src={Logo} className={classes.img} alt="Me Movies" />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
