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

import TW1 from "../images/taste_emporium/1.jpg";
import TW2 from "../images/taste_emporium/2.jpg";
import TW3 from "../images/taste_emporium/3.jpg";
import TW4 from "../images/taste_emporium/4.jpg";
import TW5 from "../images/taste_emporium/5.jpg";
import TW6 from "../images/taste_emporium/7.jpg";
import TW7 from "../images/taste_emporium/7a.jpg";

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

const Product_1 = ({ classes, product, setModalImage }) => {
  const { name, product_link, store } = product;
  const productDetails = [
    {
      bold: "ALL IN ONE SET",
      detail:
        "Our proofing baskets for sourdough include the 9 inch round and 9.6 inch oval banneton | each holds 1.5 pounds of dough, a perfect choice for Artisan bread recipes involving flour, water, salt, and yeast! Smooth rattan helps ensure dough does not stick after rising, and the cloth liners may also be used if you prefer loaves without the spiral texture!",
    },
    {
      bold: " GIFTS FOR BAKERS",
      detail:
        "Our sourdough starter kit comes with a beautifully designed bread bag for 'Hot Buns and Sweetie Pies,' making it the cutest gift in home bread baking! Instead of rough linen, our premium bread bag and basket liners are made from a durable cotton and hemp blend, which are beautifully textured and lighter in color than linen!",
    },
    {
      bold: " ADDED VALUE",
      detail:
        "Sourdough banneton basket set includes a bread lame and stainless dough scraper for a well-rounded set! Our premium bread lame is used to score the surface of the dough before baking; the stainless-steel dough scraper is useful for handling and portioning dough, and for cleaning work surfaces! ",
    },
    {
      bold: " NATURAL RATTAN",
      detail:
        "Each brotform bowl is hand-woven from 100% natural Indonesian rattan; free of splinters or hazardous chemicals, it is eco-friendly, food-safe, and non-toxic | Rattan creates beautiful spiral patterns in each loaf and wickers moisture away for a nice crisp crust!",
    },
    {
      bold: " FAMILY FUN",
      detail:
        "Banneton proofing basket set of 2 (each with a liner) and tools are designed with both the professional and novice baker in mind! This beautiful proofing set provides a nutritious, wholesome, and fun new hobby for the entire family!",
    },
  ];

  const productReviews = [
    `This product is a nice surprise- we're happily impressed! The baskets are high quality, nice and smooth, and the perfect size for our Artisan dough recipes! The bread bag and basket liners are really high quality and the bread bag design is SO cute! Attention to detail makes this a fantastic product! We would definitely buy again!`,
    `We really wanted to find a set of medium size bannetons that would work for most Artisan recipes! Unfortunately, we found that most sellers like to include a large 10 inch round banneton with a much smaller oval (maybe because the oval fits inside the round and makes shipping cheaper?)... until we found this set- the round and oval are perfect for making those medium size loaves that most recipes call for! And what a BEAUTIFUL set- bannetons are really nice and smooth! You can really tell that these are hand-woven! The entire package is charming! And the bread bag... we LOVE it!`,
    `We're extremely impressed with this banneton set! From the cute design on the bread bag, to the graphic on the dough scraper handle, to how nice and smooth the bannetons are- this is a really fantastic set! I finally have a scoring lame like all of the videos and recipes call for- Food Network, here we come!  We love this proofing basket set and would definitely buy again!`,
  ];
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
        {[TW1, TW2, TW3, TW4, TW5, TW6, TW7].map(pic => {
          return (
            <Grid key={pic} item xs={6} sm={4}>
              <Card style={{}}>
                <ButtonBase
                  onClick={() => setModalImage(pic)}
                  style={{ width: "100%", lineHeight: 0, height: "100%" }}
                >
                  <Box>
                    <img src={pic} alt={name} style={{ width: "101%" }} />
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
              Shop Now on {store}
            </Button>
          </a>
        </Grid>
      </Grid>
      <Box>
        <Grid container style={{ padding: 24, width: "100%" }} spacing={3}>
          <Grid item xs={7}>
            <Typography variant="body1" component="div">
              {productDetails.map((productDetail, idx) => {
                const { bold, detail } = productDetail;
                return (
                  <p key={idx}>
                    <span role="img" aria-label="Green Heart emoji">
                      💚
                    </span>
                     <b>{bold}</b> - {detail}
                  </p>
                );
              })}
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="subtitle1" component="div">
              {productReviews.map((productReview, idx) => {
                return (
                  <p key={idx}>
                    <span role="img" aria-label="gold start emoji">
                      ⭐⭐⭐⭐⭐
                    </span>{" "}
                    <span>5 Stars</span>
                    <br />
                    {productReview}
                  </p>
                );
              })}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default withStyles(styles)(Product_1);
