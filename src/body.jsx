import React, { useRef } from "react";
import classNames from "classnames";
import { animated, useTransition } from "react-spring";
import { Switch, Route, useHistory } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
  withStyles,
} from "@material-ui/core";
//import { useTheme } from "@material-ui/core/styles";
import TW1 from "./images/tableware/TE1.jpg";
import TW2 from "./images/tableware/TE2.jpg";
import TW3 from "./images/tableware/TE3.jpg";
import TW4 from "./images/tableware/TE4.jpg";
import TW5 from "./images/tableware/TE5.jpg";
import JR1 from "./images/1/Jade_Roller_1.jpg";
import JR2 from "./images/1/Jade_Roller_2.jpg";
import JR3 from "./images/1/Jade_Roller_3.jpg";
import "./App.css";
import Img_1 from "./images/img_m_1.jpg";
import Img_2 from "./images/img_m_2.jpg";
import Img_3 from "./images/img_m_3.jpg";
import Img_4 from "./images/img_m_4.jpg";
import Imgs_1 from "./images/img_s_1.jpg";
import Imgs_2 from "./images/img_s_2.jpg";
import Imgs_3 from "./images/img_s_3.jpg";
import Imgs_4 from "./images/img_s_4.jpg";

const styles = (theme) => ({
  actions: {
    padding: 0,
  },
  body: { width: "100%", height: "100%" },
  button: {
    borderRadius: 0,
    height: 30,
    color: "white",
    marginLeft: "0px !important",
    width: "50%",
  },
  card: {
    boxShadow: theme.shadows[8],
    maxWidth: 245,
  },
  content: {
    margin: "0 auto",
    maxWidth: 700,
    padding: "0 24px",
    marginTop: -64,
    width: "100%",
    [theme.breakpoints.up("md")]: {
      marginTop: -128,
      padding: "0 64px",
      // transform: "translateY(250px)",
    },
  },
  slideshow: {
    background: theme.palette.tertiary.main,
    //  backgroundSize: "cover",
    width: "100%",
    height: 275,
    position: "relative",
    overflow: "hidden",
    [theme.breakpoints.up("md")]: {
      height: 400,
    },
  },
  details: {
    background: theme.palette.tertiary.main,
    "& span": {
      background: `-webkit-linear-gradient(${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
    },
  },
  buy_now: {
    background: `linear-gradient(45deg,${theme.palette.primary.main},${theme.palette.secondary.main})`,

    textShadow: "-1px -1px rgb(0 0 0 / 35%)",
  },
  media: {
    paddingTop: "100%",
  },
});
const Body = ({ classes, bodyRef }) => {
  let history = useHistory();

  const isMobile = useMediaQuery("(max-width:475px)");
  const ss_holderRef = useRef();
  //const [backgroundImage, setBackgroundImage] = useState(0);
  const backgroundImages = isMobile
    ? [Imgs_1, Imgs_2, Imgs_3, Imgs_4]
    : [Img_1, Img_2, Img_3, Img_4];

  //   const ss_height = () =>
  //     ss_holderRef.current?.getBoundingClientRect().height || 275;
  const config = {
    mass: 1,
    tension: 3,
    friction: 10,
  };
  const backgroundTransitions = useTransition(
    backgroundImages[0],
    isMobile
      ? {
          from: { height: 275 * 1.05, width: "auto" },
          enter: { height: 275, width: "auto" },
          config,
        }
      : {
          from: { height: "auto", width: window.innerWidth * 1.05 },
          enter: { height: "auto", width: window.innerWidth },
          config,
        }
  );
  console.log("ismobile", isMobile);
  const Home = () => {
    return (
      <Box style={{}}>
        <div className={classes.slideshow} ref={ss_holderRef}>
          {backgroundTransitions(({ width, height, opacity }, item) => {
            return (
              <animated.img
                src={backgroundImages[0]}
                alt="slideshow"
                style={{
                  opacity: 0.7,
                  position: "absolute",
                  height,
                  width,
                }}
              />
            );
          })}
        </div>
        <Grid
          container
          classes={{ root: classes.content }}
          direction="row"
          justify="center"
          alignItems="center"
          spacing={4}
          style={{}}
        >
          <Grid item>
            <Card classes={{ root: classes.card }}>
              <CardActionArea>
                <CardMedia
                  classes={{ root: classes.media }}
                  image={TW4}
                  title="Tiny Express Baby Shower Tableware"
                />
                <CardContent>
                  <Typography variant="h5">
                    Tiny Express Baby Shower Tableware
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions classes={{ root: classes.actions }}>
                <Button
                  classes={{
                    root: classNames(classes.button, classes.details),
                  }}
                  variant="contained"
                  size="small"
                  onClick={() =>
                    history.push("/products/tiny-express-baby-shower-tableware")
                  }
                >
                  Details
                </Button>
                <Button
                  classes={{
                    root: classNames(classes.button, classes.buy_now),
                  }}
                  variant="contained"
                  size="small"
                >
                  Buy Now
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item>
            <Card classes={{ root: classes.card }}>
              <CardActionArea>
                <CardMedia
                  classes={{ root: classes.media }}
                  image={JR1}
                  title="Sandholt Jade Roller and Gua Sha Gift Set"
                />
                <CardContent>
                  <Typography variant="h5">
                    Sandholt Jade Roller and Gua Sha Gift Set
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions classes={{ root: classes.actions }}>
                <Button
                  classes={{
                    root: classNames(classes.button, classes.details),
                  }}
                  size="small"
                  onClick={() =>
                    history.push(
                      "/products/sandholt-jade-roller-and-gua-sha-gift-set"
                    )
                  }
                >
                  Details
                </Button>
                <Button
                  classes={{
                    root: classNames(classes.button, classes.buy_now),
                  }}
                  size="small"
                >
                  Buy Now
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    );
  };

  const Tableware = () => {
    return (
      <Box
        style={{
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,.5)",
        }}
      >
        <Grid
          container
          classes={{ root: classes.content }}
          direction="row"
          justify="center"
          alignItems="center"
          spacing={4}
          style={{ margin: "0 auto", maxWidth: 700, padding: 64 }}
        >
          {[TW1, TW2, TW3, TW4, TW5].map((pic) => {
            return (
              <Grid key={pic} item xs={4}>
                <Card style={{ height: 0, paddingTop: "100%" }}>
                  <CardMedia
                    style={{ paddingTop: "100%", marginTop: "-100%" }}
                    image={pic}
                  />
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    );
  };

  const JadeRoller = () => {
    return (
      <Box
        style={{
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,.5)",
        }}
      >
        <Grid
          container
          classes={{ root: classes.content }}
          direction="row"
          justify="center"
          alignItems="center"
          spacing={4}
          style={{ margin: "0 auto", maxWidth: 700, padding: 64 }}
        >
          {[JR1, JR2, JR3].map((pic) => {
            return (
              <Grid key={pic} item xs={4}>
                <Card style={{ height: 0, paddingTop: "100%" }}>
                  <CardMedia
                    style={{ paddingTop: "100%", marginTop: "-100%" }}
                    image={pic}
                  />
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    );
  };

  return (
    <Grid classes={{ root: classes.body }} item xs={12} ref={bodyRef}>
      <Switch>
        <Route path="/products/sandholt-jade-roller-and-gua-sha-gift-set">
          <JadeRoller />
        </Route>
        <Route path="/products/tiny-express-baby-shower-tableware">
          <Tableware />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Grid>
  );
};

export default withStyles(styles)(Body);
