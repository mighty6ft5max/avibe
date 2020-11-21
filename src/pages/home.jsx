import React, { useRef } from "react";
import classNames from "classnames";
import { animated, useTransition } from "react-spring";
import { useHistory } from "react-router-dom";
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
import SH from "../images/slider_home.jpg";
import SHM from "../images/background-home.jpg";

const styles = theme => ({
  actions: {
    padding: 0,
  },
  body: { width: "100%", height: "100%" },
  button: {
    borderRadius: 0,
    height: 30,
    color: "white",
    // fontSize: ".6rem",
    marginLeft: "0px !important",
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
  form_holder: {
    background: "linear-gradient(45deg,rgba(255,255,255,.3),transparent)",
    boxShadow: theme.shadows[8],
  },
  input: { width: 270 },
  input_label: { lineHeight: 1.6, margin: 0 },
  input_holder: {
    marginBottom: 12,
  },
  shop_now: {
    background: `linear-gradient(45deg,${theme.palette.primary.main},${theme.palette.secondary.main})`,
    color: "white",
    padding: 4,
    boxShadow: theme.shadows[4],
    textShadow: "-1px -1px rgb(0 0 0 / 35%)",

    "& span": {
      padding: "0 8px",
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
    width: "50%",
    "& span": {
      // background: `-webkit-linear-gradient(${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
      // "-webkit-background-clip": "text",
      // "-webkit-text-fill-color": "transparent",
      color: "white",
    },
  },
  buy_now: {
    background: `linear-gradient(45deg,${theme.palette.primary.main},${theme.palette.secondary.main})`,
    textShadow: "-1px -1px rgb(0 0 0 / 35%)",
    width: "100%",
  },
  media: {
    paddingTop: "100%",
  },
});

const Home = ({ classes, products }) => {
  let history = useHistory();

  const isMobile = useMediaQuery("(max-width:475px)");
  const ss_holderRef = useRef();
  //const [backgroundImage, setBackgroundImage] = useState(0);
  const backgroundImages = isMobile ? SHM : SH;

  const config = {
    mass: 1,
    tension: 3,
    friction: 10,
  };
  const backgroundTransitions = useTransition(
    backgroundImages,
    isMobile
      ? {
          from: { height: 275 * 1.15, width: "auto" },
          enter: { height: 275, width: "auto" },
          config,
        }
      : {
          from: { height: "auto", width: window.innerWidth * 1.05 },
          enter: { height: "auto", width: window.innerWidth },
          config,
        }
  );

  return (
    <Box style={{}}>
      <div className={classes.slideshow} ref={ss_holderRef}>
        {backgroundTransitions(({ width, height, opacity }, item) => {
          return (
            <animated.img
              src={backgroundImages}
              alt="slideshow"
              style={{
                position: "absolute",
                height,
                width,
              }}
            />
          );
        })}
      </div>
      <Grid container classes={{ root: classes.content }} style={{}}>
        <Grid item xs={12} style={{ marginBottom: 48 }}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={4}
          >
            {products.map(product => {
              const { name, link, store, product_link, img } = product;
              return (
                <Grid item key={link}>
                  <Card classes={{ root: classes.card }}>
                    <CardActionArea>
                      <CardMedia
                        classes={{ root: classes.media }}
                        image={img}
                        title={name}
                      />
                      <CardContent>
                        <Typography variant="h5">{name}</Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions classes={{ root: classes.actions }}>
                      <Button
                        classes={{
                          root: classNames(classes.button, classes.details),
                        }}
                        size="small"
                        onClick={() => history.push(link)}
                      >
                        Details
                      </Button>
                      <a
                        href={product_link}
                        alt={store}
                        style={{ marginLeft: 0, width: "50%" }}
                      >
                        <Button
                          classes={{
                            root: classNames(classes.button, classes.buy_now),
                          }}
                          size="small"
                        >
                          Shop Now
                        </Button>
                      </a>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" style={{ padding: 48, textAlign: "center" }}>
            AVibe LLC is proud to be a family owned company with headquarters in
            Huntsville, Alabama… the Rocket City! We focus on developing top
            brands with high quality products in kitchen, home and health, and
            other categories, all while placing the needs and preferences of our
            customers first! Please visit the Contact Us page if you’d like to
            get in touch with us, and don’t forget to sign up for future
            newsletters, specials, and promotions! Thank you for visiting our
            page!
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default withStyles(styles)(Home);
