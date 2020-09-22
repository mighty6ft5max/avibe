import React, { useRef, useState } from "react";
import classNames from "classnames";
import { animated, useTransition } from "react-spring";
import { Switch, Route, useHistory } from "react-router-dom";
import {
  Box,
  Button,
  ButtonBase,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Modal,
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
//import TW5_s from "./images/tableware/TE5_s.jpg";
import JadeButton from "./images/1/JadeButton.jpg";

import JR2 from "./images/1/Jade2.jpg";
import JR3 from "./images/1/Jade3.jpg";
import JR4 from "./images/1/Jade4.jpg";
import JR5 from "./images/1/Jade5.jpg";
import JR6 from "./images/1/Jade6.jpg";
import JR7 from "./images/1/Jade7.jpg";
import "./App.css";
import Img_1 from "./images/img_m_1.jpg";
import Img_2 from "./images/img_m_2.jpg";
import Img_3 from "./images/img_m_3.jpg";
import Img_4 from "./images/img_m_4.jpg";
import Imgs_1 from "./images/img_s_1.jpg";
import Imgs_2 from "./images/img_s_2.jpg";
import Imgs_3 from "./images/img_s_3.jpg";
import Imgs_4 from "./images/img_s_4.jpg";
import AboutBack from "./images/background-about.jpg";
const styles = (theme) => ({
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
const Body = ({ classes, bodyRef }) => {
  let history = useHistory();

  const isMobile = useMediaQuery("(max-width:475px)");
  const ss_holderRef = useRef();
  //const [backgroundImage, setBackgroundImage] = useState(0);
  const backgroundImages = isMobile
    ? [Imgs_1, Imgs_2, Imgs_3, Imgs_4]
    : [Img_1, Img_2, Img_3, Img_4];
  const aboutBackgroundImages = [AboutBack];
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
                        history.push(
                          "/products/tiny-express-baby-shower-tableware"
                        )
                      }
                    >
                      Details
                    </Button>
                    <a
                      href="https://www.amazon.com/Tiny-Express-Neutral-Disposable-Supplies/dp/B084TW2FVN"
                      alt="Amazon Shop"
                      style={{ marginLeft: 0, width: "50%" }}
                    >
                      <Button
                        classes={{
                          root: classNames(classes.button, classes.buy_now),
                        }}
                        variant="contained"
                        size="small"
                      >
                        Shop Now
                      </Button>
                    </a>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item>
                <Card classes={{ root: classes.card }}>
                  <CardActionArea>
                    <CardMedia
                      classes={{ root: classes.media }}
                      image={JadeButton}
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
                    <a
                      href="https://www.ebay.com/itm/Jade-Roller-Gua-Sha-Set-Konjac-Sponge-100-Jade-Anti-Aging-Face-Massager/293563858403?_trkparms=ispr%3D1&hash=item4459c4fde3:g:YtMAAOSwUDhfUt~S&amdata=enc%3AAQAFAAACYBaobrjLl8XobRIiIML1V4Imu%252Fn%252BzU5L90Z278x5ickkvjzWOStkxwnlDuxSI1PVVhwbmWS5MB47llWcjCsoIU6yNn8WyR3xg1G4eOmdzYiRaNOBgLT9p4j8RRAeRfbBGICYayYJ1D3BHZcWKftgHJJYtoIuYs1a0OPQIRMeJV973v0CAMi4vlbF2q4KI%252FaM1QSUKPbz%252BDCl8ZMm1lZ%252BuV32tnjHLXgGtclhrVaBwMBg1aMxGPqU9I59GY0wYF4U5VIPussK%252BT0yoTgfqSOhxRxYlPKYPiddf1t6v6hiwC%252FVrUwd%252FZvG%252FdWQdVi7MmEiSUkr2UdI1bEQyyplk6L1uE28nrQdeiuqNanhb7qKG4fUkb8M1MxSdEXV%252BiMPdVssQhJrbt9NgED%252BkYjWJbiVejiVbBOYK5e3RXIuWl6G8buuD9mcTzy2UXTjfcCLwsjfzbVCim7uFiaORk0UlXMKhQxKhDCAeIRRLGhVVbooLe1ZWtYyZNT7Thlfm4YjSRK17y%252FrSTm6ZYEqV%252F3buuqjWGjvNHrPUdz6%252B%252B6cz0UBnatuLl1QwxGF34On0dEmFo%252BxMLyU%252BJOYL4OVH%252F6rmfsiaAzOcfmbwAQXzRPx5WJub8Wa3H7MdLKK%252BFKI8%252FkvuewXXWYyXk%252BViJGBtMPqMnOD%252BMEbb1qBpCr%252FOQZPggALjvQKVbjFD%252FN%252Fbp4yfna8p68wS1NVFr7R65HQcMzYBVA7NCfXDxDb%252BsxlF40oppcDBvUgJ4wNf65LNJ4Y%252FqYNyGtdKk7FEDtUUG9SEhUV%252Fg38P3XqShH3XtQ0mm5TbFILcBM8%7Ccksum%3A2935638584030c21f854e5bd42f0a627472df76d854c%7Campid%3APL_CLK%7Cclp%3A2334524"
                      alt="Ebay Shop"
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
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h4"
              style={{ padding: 48, textAlign: "center" }}
            >
              AVibe LLC is proud to be a family owned company, with headquarters
              in Huntsville, Alabama… the Rocket City! We focus on developing
              top brands with high quality products in kitchen, home and health,
              and other categories, all while placing the needs and preferences
              of our customers first! Please visit the Contact Us page if you’d
              like to get in touch with us, and don’t forget to sign up for
              future newsletters, specials, and promotions! Thank you for
              visiting our page!
            </Typography>
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
              <Grid key={pic} item xs={6} sm={4}>
                <Card style={{}}>
                  <ButtonBase
                    onClick={() => setModalImage(pic)}
                    style={{ width: "100%", lineHeight: 0, height: "100%" }}
                  >
                    <Box>
                      <img
                        src={pic}
                        alt={"Tiny Express Tableware"}
                        style={{ width: "101%" }}
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
            <a
              href="https://www.amazon.com/Tiny-Express-Neutral-Disposable-Supplies/dp/B084TW2FVN"
              alt="Amazon Shop"
            >
              <Button classes={{ root: classes.shop_now }}>
                Shop Now on Amazon
              </Button>
            </a>
          </Grid>
        </Grid>
        <Box>
          <Grid container style={{ padding: 24, width: "100%" }} spacing={3}>
            <Grid item xs={7}>
              <Typography variant="body1" component="div">
                <p>
                  <span role="img" aria-label="Green Heart emoji">
                    💚
                  </span>
                   <b>BEAUTIFULLY DESIGNED</b> - The Tiny Express disposable
                  white and gold party plates and napkins set is the elegant
                  choice for your baby shower or gender reveal party! The shiny
                  gold foil design with falling dots adds glittery pizazz to
                  your place settings, and the gold glitter plasticware
                  compliments the set perfectly!
                </p>
                <p>
                  <span role="img" aria-label="Green Hear emoji">
                    💚
                  </span>
                   <b>SERVES 24</b> - our posh matching baby shower set comes
                  with 24- large 9 inch dinner plates, 24- small 7 inch dessert
                  plates, 24- gold foil napkins, 24- 9 ounce cold beverage cups,
                  and 24 each of gold glitter plastic forks, knives, and spoons.
                  Please do not microwave the plates. Cups are for cold
                  beverages only.
                </p>
                <p>
                  <span role="img" aria-label="Green Hear emoji">
                    💚
                  </span>
                   <b>FOOD SAFE</b> - our baby shower dinnerware sets are
                  designed in the USA to be fully food-grade, manufactured free
                  of BPA components, and are 100% recyclable. Thick 350-gram
                  plates are coated with a protective shield that renders them
                  soak-proof, cut resistant, and able to handle any food from
                  pasta to salad dressing!
                </p>

                <p>
                  <span role="img" aria-label="Green Hear emoji">
                    💚
                  </span>
                   <b>FUN THEME</b> - our Tiny Express stork and baby train
                  gender neutral theme is fun, festive, and easily matches your
                  party colors and baby shower decorations on your special day!
                  Let us ease your party planning worries so that you can focus
                  on what's important- having fun and creating great memories
                  with your family and friends!
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
                  My wife and I were really impressed! We served chicken salad
                  (which can be a bit messy)- the plates are really high-quality
                  and thick! They held up just fine! Also served cake and ice
                  cream on the dessert plates- no problem at all! The design is
                  also really cute! 
                </p>
                <p>
                  <span role="img" aria-label="gold start emoji">
                    ⭐⭐⭐⭐⭐
                  </span>{" "}
                  <span>5 Stars</span>
                  <br />
                  Exceeded all of my expectations for a gender neutral baby
                  shower plate set! The gold foil is gorgeous and shiny, giving
                  the plates an elegant touch! Overall, a perfect purchase for
                  anyone hosting a gender neutral baby shower or gender reveal
                  party! It's beautiful and I love it!
                </p>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  };

  const JadeRoller = () => {
    return (
      <Box
        style={{
          width: "100%",
          height: "100%",
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
          {[JR2, JR3, JR4, JR5, JR6, JR7].map((pic) => {
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
            <a
              href="https://www.ebay.com/itm/Jade-Roller-Gua-Sha-Set-Konjac-Sponge-100-Jade-Anti-Aging-Face-Massager/293563858403?_trkparms=ispr%3D1&hash=item4459c4fde3:g:YtMAAOSwUDhfUt~S&amdata=enc%3AAQAFAAACYBaobrjLl8XobRIiIML1V4Imu%252Fn%252BzU5L90Z278x5ickkvjzWOStkxwnlDuxSI1PVVhwbmWS5MB47llWcjCsoIU6yNn8WyR3xg1G4eOmdzYiRaNOBgLT9p4j8RRAeRfbBGICYayYJ1D3BHZcWKftgHJJYtoIuYs1a0OPQIRMeJV973v0CAMi4vlbF2q4KI%252FaM1QSUKPbz%252BDCl8ZMm1lZ%252BuV32tnjHLXgGtclhrVaBwMBg1aMxGPqU9I59GY0wYF4U5VIPussK%252BT0yoTgfqSOhxRxYlPKYPiddf1t6v6hiwC%252FVrUwd%252FZvG%252FdWQdVi7MmEiSUkr2UdI1bEQyyplk6L1uE28nrQdeiuqNanhb7qKG4fUkb8M1MxSdEXV%252BiMPdVssQhJrbt9NgED%252BkYjWJbiVejiVbBOYK5e3RXIuWl6G8buuD9mcTzy2UXTjfcCLwsjfzbVCim7uFiaORk0UlXMKhQxKhDCAeIRRLGhVVbooLe1ZWtYyZNT7Thlfm4YjSRK17y%252FrSTm6ZYEqV%252F3buuqjWGjvNHrPUdz6%252B%252B6cz0UBnatuLl1QwxGF34On0dEmFo%252BxMLyU%252BJOYL4OVH%252F6rmfsiaAzOcfmbwAQXzRPx5WJub8Wa3H7MdLKK%252BFKI8%252FkvuewXXWYyXk%252BViJGBtMPqMnOD%252BMEbb1qBpCr%252FOQZPggALjvQKVbjFD%252FN%252Fbp4yfna8p68wS1NVFr7R65HQcMzYBVA7NCfXDxDb%252BsxlF40oppcDBvUgJ4wNf65LNJ4Y%252FqYNyGtdKk7FEDtUUG9SEhUV%252Fg38P3XqShH3XtQ0mm5TbFILcBM8%7Ccksum%3A2935638584030c21f854e5bd42f0a627472df76d854c%7Campid%3APL_CLK%7Cclp%3A2334524"
              alt="Ebay Shop"
            >
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
                   <b>FEEL AND LOOK YOUR SHINING BEST</b> - The Jade Facial
                  Roller will not only help your skin absorb your serums better,
                  but will also give your skin a boost, and keep those wrinkles
                  at bay! Use it to relax your face muscles, relieve the
                  tension, and get rid of the puffiness in the under-eye area.
                </p>
                <p>
                  <span role="img" aria-label="Green Hear emoji">
                    💚
                  </span>
                   <b>DISCOVER FACIAL GUA SHA</b> - The Jade Gua Sha tool is
                  designed to promote lymphatic drainage, tone facial muscles,
                  and increase circulation. It instantly lifts and tones the
                  face by helping to clear away lymphatic fluids, helping you to
                  achieve that healthy glow! This is tension relief and
                  relaxation at its finest! 
                </p>
                <p>
                  <span role="img" aria-label="Green Hear emoji">
                    💚
                  </span>
                   <b>BONUS KONJAC SPONGE</b> - To help you get your skin clean
                  and ready for rolling, in the Sandholt Luxury Gift Set, you
                  will find a delicious Konjac Sponge, infused with green clay.
                  The sponge will shed dead skin cells and help with balancing
                  your skin's pH level.
                </p>

                <p>
                  <span role="img" aria-label="Green Hear emoji">
                    💚
                  </span>
                   
                  <b>
                    A HANDY USER'S GUIDE EBOOK TO BOOST EFFECTIVENESS OF THE
                    TOOLS
                  </b>
                  - When you receive your anti-aging gift-set, with double foam
                  padding for ultimate protection, you’ll find instructions for
                  accessing the eBook guide! It includes information about the
                  product, guidelines and great tips. Couple this with the bonus
                  Sugar Scrubs DIY Mini-Guide and you own the complete kit to
                  make every skincare geek envious of your crisp and radiant
                  skin!
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
                  LOVE IT! Fantastic Seller! Super Fast Shipping! Great
                  Packaging! Thank You! :-)
                </p>
                <p>
                  <span role="img" aria-label="gold start emoji">
                    ⭐⭐⭐⭐⭐
                  </span>{" "}
                  <span>5 Stars</span>
                  <br />
                  My order came so fast! The packaging is so cute and the
                  products are great!
                </p>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  };

  const About = () => {
    return (
      <>
        <div className={classes.slideshow}>
          {backgroundTransitions(({ width, height, opacity }, item) => {
            return (
              <animated.img
                src={aboutBackgroundImages[0]}
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
        <Grid container style={{ padding: 48, width: "100%" }} spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h2">Get to know us</Typography>
            <Typography variant="body1" component="div">
              <p>
                Founded in 2019 in Huntsville, Alabama, AVibe LLC is a family
                owned company. We focus on partnering with top manufacturers all
                over the world to build high-quality brands that stand far apart
                from the competition. Our company is constantly evolving and
                growing, but our primary focus is on leveraging online platforms
                for showcasing each of our brands. Steering clear of "brick and
                mortar" locations ensures that we can focus fully on product
                quality, supplier relationships, and the needs of our customers.
              </p>
              <p>
                Our current product brands are Sandholt and Tiny Express, with
                Taste Emporium launching in late 2020! Sandholt jade roller gift
                sets were the company's very first product and can be found on
                EBay! Our first Amazon product came with the launch of the Tiny
                Express disposable gold tableware! This is the start of a line
                of baby shower products that will focus on that all important
                mix of top quality and "cuteness factor."
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
        <Route path="/about">
          <About />
        </Route>
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
