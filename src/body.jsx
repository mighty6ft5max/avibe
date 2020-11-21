import React, { useState } from "react";

import { animated, useTransition } from "react-spring";
import { Switch, Route } from "react-router-dom";
import {
  Box,
  Button,
  Grid,
  Modal,
  Typography,
  useMediaQuery,
  withStyles,
} from "@material-ui/core";
import Home from "./pages/home";

// import SA from "./images/slider_about.jpg";
// import SAM from "./images/slider_about_m.jpg";
// import Img_1 from "./images/img_m_1.jpg";
// import Img_2 from "./images/img_m_2.jpg";
// import Img_3 from "./images/img_m_3.jpg";
// import Img_4 from "./images/img_m_4.jpg";
// import Imgs_1 from "./images/img_s_1.jpg";
// import Imgs_2 from "./images/img_s_2.jpg";
// import Imgs_3 from "./images/img_s_3.jpg";
// import Imgs_4 from "./images/img_s_4.jpg";

import AboutBack from "./images/slider_about.jpg";
import Contact from "./contact";
import TasteEmporiumButton from "./images/taste_emporium/home_button.jpg";
import JadeButton from "./images/1/JadeButton.jpg";
import Product1 from "./pages/product_1";
import Product2 from "./pages/product_2";
import "./App.css";
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

const products = [
  {
    name: "Taste Emporium Proofing Basket Sets",
    link: "/products/taste-emporium-proofing-basket-sets",
    store: "Amazon",
    img: TasteEmporiumButton,
    product_link:
      "https://www.amazon.com/Taste-Emporium-Proofing-Sourdough-Banneton/dp/B08CQKXN2K",
  },
  {
    name: "Sandholt Jade Roller and Gua Sha Gift Set",
    link: "/products/sandholt-jade-roller-and-gua-sha-gift-set",
    store: "Ebay",
    img: JadeButton,
    product_link:
      "https://www.ebay.com/itm/Jade-Roller-Gua-Sha-Set-Konjac-Sponge-100-Jade-Anti-Aging-Face-Massager/293563858403?_trkparms=ispr%3D1&hash=item4459c4fde3:g:YtMAAOSwUDhfUt~S&amdata=enc%3AAQAFAAACYBaobrjLl8XobRIiIML1V4Imu%252Fn%252BzU5L90Z278x5ickkvjzWOStkxwnlDuxSI1PVVhwbmWS5MB47llWcjCsoIU6yNn8WyR3xg1G4eOmdzYiRaNOBgLT9p4j8RRAeRfbBGICYayYJ1D3BHZcWKftgHJJYtoIuYs1a0OPQIRMeJV973v0CAMi4vlbF2q4KI%252FaM1QSUKPbz%252BDCl8ZMm1lZ%252BuV32tnjHLXgGtclhrVaBwMBg1aMxGPqU9I59GY0wYF4U5VIPussK%252BT0yoTgfqSOhxRxYlPKYPiddf1t6v6hiwC%252FVrUwd%252FZvG%252FdWQdVi7MmEiSUkr2UdI1bEQyyplk6L1uE28nrQdeiuqNanhb7qKG4fUkb8M1MxSdEXV%252BiMPdVssQhJrbt9NgED%252BkYjWJbiVejiVbBOYK5e3RXIuWl6G8buuD9mcTzy2UXTjfcCLwsjfzbVCim7uFiaORk0UlXMKhQxKhDCAeIRRLGhVVbooLe1ZWtYyZNT7Thlfm4YjSRK17y%252FrSTm6ZYEqV%252F3buuqjWGjvNHrPUdz6%252B%252B6cz0UBnatuLl1QwxGF34On0dEmFo%252BxMLyU%252BJOYL4OVH%252F6rmfsiaAzOcfmbwAQXzRPx5WJub8Wa3H7MdLKK%252BFKI8%252FkvuewXXWYyXk%252BViJGBtMPqMnOD%252BMEbb1qBpCr%252FOQZPggALjvQKVbjFD%252FN%252Fbp4yfna8p68wS1NVFr7R65HQcMzYBVA7NCfXDxDb%252BsxlF40oppcDBvUgJ4wNf65LNJ4Y%252FqYNyGtdKk7FEDtUUG9SEhUV%252Fg38P3XqShH3XtQ0mm5TbFILcBM8%7Ccksum%3A2935638584030c21f854e5bd42f0a627472df76d854c%7Campid%3APL_CLK%7Cclp%3A2334524",
  },
];

const Body = ({ classes, bodyRef }) => {
  const isMobile = useMediaQuery("(max-width:475px)");

  const aboutBackgroundImages = AboutBack;

  const config = {
    mass: 1,
    tension: 3,
    friction: 10,
  };
  const backgroundTransitions = useTransition(
    aboutBackgroundImages,
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
  const [modalImage, setModalImage] = useState(false);
  function handleClose() {
    setModalImage(false);
  }

  const About = () => {
    return (
      <>
        <div className={classes.slideshow}>
          {backgroundTransitions(({ width, height, opacity }, item) => {
            return (
              <animated.img
                src={aboutBackgroundImages}
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
        <Grid
          container
          style={{
            padding: 48,
            width: "100%",
            maxWidth: 1366,
            margin: "0 auto",
          }}
          spacing={3}
        >
          <Grid item xs={12}>
            <Typography variant="h2">Get to know us</Typography>
            <Typography variant="body1" component="div">
              <p>
                Founded in 2019 in Huntsville, Alabama, AVibe is a family and
                veteran-owned e-commerce company. We focus on partnering
                with top manufacturers all over the world to build high-quality
                brands that stand far apart from the competition. Our company is
                constantly evolving and growing, but our primary focus is on
                leveraging online platforms for showcasing each of our brands.
                Steering clear of "brick and mortar" locations ensures that we
                can focus fully on product quality, supplier relationships, and
                the needs of our customers.
              </p>
              <p>
                Our current product brands are Taste Emporium and Sandholt, with
                Blu Diamanté Art Supplies launching in 2021! Sandholt jade
                roller gift sets were the company's very first product and can
                be found on EBay! The fine craftsmanship and 100% pure jade in
                the sets has made this product a top seller from coast to coast!
                Taste Emporium banneton proofing basket sets are the company’s
                first baking niche product and are currently sold on Amazon! The
                quality of our hand-woven banneton baskets, along with the
                stylish utensils and premium bread bag in the set has made this
                product a top seller on Amazon!
              </p>
              <p>
                If you would like to contact us, please fill out the contact
                form on our website and we'll get back to you.  We typically
                respond quickly unless your message comes in during an Alabama
                football game weekend... in that case, an answer may have to
                wait until Monday or Tuesday :-) Thank you for visiting our
                site, and don't forget to follow us on Twitter, Facebook, and
                Instagram!
              </p>
            </Typography>
          </Grid>
        </Grid>
      </>
    );
  };

  return (
    <Grid classes={{ root: classes.body }} item xs={12} ref={bodyRef}>
      <Switch>
        <Route path="/contact">
          <Contact isMobile={isMobile} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path={products[1].link}>
          <Product2 setModalImage={setModalImage} product={products[1]} />
        </Route>
        <Route path={products[0].link}>
          <Product1 setModalImage={setModalImage} product={products[0]} />
        </Route>
        <Route path="/">
          <Home products={products} />
        </Route>
      </Switch>
      <Modal
        open={modalImage}
        onClose={handleClose}
        aria-labelledby="preview image"
        aria-describedby="preview image"
      >
        <Box style={{ maxWidth: "100vw", maxHeight: "100vh" }}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            style={{ padding: 24 }}
          >
            <Grid item style={{ textAlign: "right", width: "100%" }}>
              <Button
                style={{
                  backgroundColor: "white",
                  color: "black",
                  fontSize: ".8rem",
                  marginBottom: 8,
                }}
                variant="contained"
                onClick={handleClose}
              >
                Close
              </Button>
            </Grid>
            <Grid item>
              <img
                src={modalImage}
                alt="Item Close Up"
                style={{ width: "100%" }}
              />
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Grid>
  );
};

export default withStyles(styles)(Body);
