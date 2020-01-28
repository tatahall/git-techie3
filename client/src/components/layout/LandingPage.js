import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { spacing } from "@material-ui/system";
import About from "./About";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 250
  },
  media: {
    height: 200
  },
  control: {
    padding: theme.spacing(2)
  }
}));

const backgroundImage = {
  backgroundImage:
    "url('https://images.pexels.com/photos/273230/pexels-photo-273230.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
  height: "80vh",
  color: "#fff"
};

export default function MediaCard() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <About />
      <div className="Home" align="center" style={backgroundImage}>
        <Grid container justify="center" spacing={2}>
          <Grid item xs={6} sm={3}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://avatars3.githubusercontent.com/u/52113276?s=400&v=4"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    AR-Lily
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Angie R. opened her Github repositories in 2019. Interested
                    in front-end development, LizardRoach knows a little bit
                    about backend too.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link to="/login">
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://avatars0.githubusercontent.com/u/37378914?s=400&v=4"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Alex Briody
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Alex opened his Github repositories in 2019. Interested in
                    cyber security, LizardBriody is great with APIs and has a
                    great foundation in the backend.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link to="/login">
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://avatars1.githubusercontent.com/u/34141417?s=400&v=4"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Tatahall
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Tahnee opened her Github repositories in 2019. Interested in
                    full stack development, LizardHall is great with the backend
                    and authentication.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link to="/login">
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://ca.slack-edge.com/TL5B79PS6-ULPRQNLAH-440137f9ee8b-512"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Binbin Fan
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Bin Bin opened his Github repositories in 2019. Interesed in
                    backend development and local storage, LizardBinBin is a
                    good all around full stack jr. developer.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link to="/login">
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
