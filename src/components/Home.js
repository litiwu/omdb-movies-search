import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Logo from "../images/me_movies.png";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  img: {
    maxWidth: "600px",
    paddingTop: "15vw",
    paddingBottom: "2vw",
    height: "100px",
  },
  iconButton: {
    padding: 11,
  },
  search: {
    alignItems: "center",
    width: 400,
    backgroundColor: "#FFFFFF",
    marginLeft: theme.spacing(1),
    flex: 1,
    margin: "auto",
    borderRadius: "30px",
    padding: "5px 5px 5px 30px",
  },
}));

export default function Home() {
  const classes = useStyles();
  const history = useHistory();
  const [query, setQuery] = useState("");

  return (
    <div className={classes.root}>
      <img src={Logo} className={classes.img} />
      <div>
        <InputBase
          placeholder="Search For Movie"
          className={classes.search}
          id="queryInput"
          value={query}
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              history.push("/search", { query: query });
              e.preventDefault();
            }
          }}
        />
        <IconButton
          className={classes.iconButton}
          onClick={(e) => {
            history.push("/search", { query: query });
            e.preventDefault();
          }}
        >
          <SearchIcon />
        </IconButton>
      </div>
    </div>
  );
}
