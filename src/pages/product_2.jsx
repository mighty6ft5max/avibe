import React from "react";

import {
  Box,
  Button,
  ButtonBase,
  Card,
  Grid,
  Typography,
  withStyles,
} from "@material-ui/core";
import JR2 from "../images/1/Jade2.jpg";
import JR3 from "../images/1/Jade3.jpg";
import JR4 from "../images/1/Jade4.jpg";
import JR5 from "../images/1/Jade5.jpg";
import JR6 from "../images/1/Jade6.jpg";
import JR7 from "../images/1/Jade7.jpg";
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
const Product2 = ({ classes, product, setModalImage }) => {
  const { product_link, store } = product;
  return (
    <Box
      style={{
        width: "100%",
        height: "100%",
        maxWidth: 1366,
        margin: "0 auto",
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
        {[JR2, JR3, JR4, JR5, JR6, JR7].map(pic => {
          return (
            <Grid key={pic} item xs={6} sm={4}>
              <Card style={{}}>
                <ButtonBase
                  onClick={() => setModalImage(pic)}
                  style={{ width: "100%", lineHeight: 0, height: "100%" }}
                >
                  <Box>
                    <img
                      src={pic}
                      alt={"Jade Roller"}
                      style={{ width: "100%" }}
                    />
                  </Box>
                </ButtonBase>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item>
          <a href={product_link} alt={store}>
            <Button classes={{ root: classes.shop_now }}>
              Shop Now on EBay
            </Button>
          </a>
        </Grid>
      </Grid>
      <Box>
        <Grid container style={{ padding: 24, width: "100%" }} spacing={3}>
          <Grid item xs={7}>
            <Typography variant="body1" component="div">
              <p>
                <span role="img" aria-label="Green Hear emoji">
                  💚
                </span>
                 <b>FEEL AND LOOK YOUR SHINING BEST</b> - The Jade Facial Roller
                will not only help your skin absorb your serums better, but will
                also give your skin a boost, and keep those wrinkles at bay! Use
                it to relax your face muscles, relieve the tension, and get rid
                of the puffiness in the under-eye area.
              </p>
              <p>
                <span role="img" aria-label="Green Hear emoji">
                  💚
                </span>
                 <b>DISCOVER FACIAL GUA SHA</b> - The Jade Gua Sha tool is
                designed to promote lymphatic drainage, tone facial muscles, and
                increase circulation. It instantly lifts and tones the face by
                helping to clear away lymphatic fluids, helping you to achieve
                that healthy glow! This is tension relief and relaxation at its
                finest! 
              </p>
              <p>
                <span role="img" aria-label="Green Hear emoji">
                  💚
                </span>
                 <b>BONUS KONJAC SPONGE</b> - To help you get your skin clean
                and ready for rolling, in the Sandholt Luxury Gift Set, you will
                find a delicious Konjac Sponge, infused with green clay. The
                sponge will shed dead skin cells and help with balancing your
                skin's pH level.
              </p>

              <p>
                <span role="img" aria-label="Green Hear emoji">
                  💚
                </span>
                 
                <b>
                  A HANDY USER'S GUIDE EBOOK TO BOOST EFFECTIVENESS OF THE TOOLS
                </b>
                - When you receive your anti-aging gift-set, with double foam
                padding for ultimate protection, you’ll find instructions for
                accessing the eBook guide! It includes information about the
                product, guidelines and great tips. Couple this with the bonus
                Sugar Scrubs DIY Mini-Guide and you own the complete kit to make
                every skincare geek envious of your crisp and radiant skin!
              </p>
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="subtitle1" component="div">
              <p>
                <span role="img" aria-label="gold start emoji">
                  ⭐⭐⭐⭐⭐
                </span>{" "}
                <span>5 Stars</span>
                <br />
                LOVE IT! Fantastic Seller! Super Fast Shipping! Great Packaging!
                Thank You! :-)
              </p>
              <p>
                <span role="img" aria-label="gold start emoji">
                  ⭐⭐⭐⭐⭐
                </span>{" "}
                <span>5 Stars</span>
                <br />
                My order came so fast! The packaging is so cute and the products
                are great!
              </p>
              <p>
                <span role="img" aria-label="gold start emoji">
                  ⭐⭐⭐⭐⭐
                </span>{" "}
                <span>5 Stars</span>
                <br />
                Great ebayer! Quick delivery!
              </p>
              <p>
                <span role="img" aria-label="gold start emoji">
                  ⭐⭐⭐⭐⭐
                </span>{" "}
                <span>5 Stars</span>
                <br />
                {
                  "Unboxing my gift set was a pleasure and my jade roller is so well-made! LOVE <3"
                }
              </p>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default withStyles(styles)(Product2);
