import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";

const styles = {
  card: {
    width: 375,
    height: 557,
    display: " inline-block;"
  },
  media: {
    height: 200,
    position: "relative",
    top: 10,
    paddingTop: "16.25%" // 16:9
  },
  // image: {
  //   height: "200px",
  //   width: "200px"
  // },
  title: {
    width:350,
    fontSize: 18,
    overflow:"hidden"
  },
  summary: {
    overflow: "auto"
  }
};

function Game({ game, classes }) {
  const gameCover = game.cover ? game.cover.url : "./default.gif";
  console.log(game);
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography component="h1" variant="h1" className={classes.title}>
          {game.name}
        </Typography>
        <CardMedia
          className={classes.media}
          title={game.name}
          image={gameCover}
        />
        {/* <img src={gameCover} alt="" className={classes.image}/> */}
      </CardContent>
      <Typography className={classes.summary}>{game.summary}</Typography>
    </Card>
  );
}

export default withStyles(styles)(Game);
