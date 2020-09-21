import React, { useRef, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { FaBars, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import {
  Button,
  Box,
  Grid,
  Hidden,
  Typography,
  withStyles,
} from "@material-ui/core";

import "./App.css";
import Body from "./body";
import Footer from "./footer";
import { useEffect } from "react";
var _ = require("lodash");
const styles = (theme) => ({
  button: {
    borderRadius: 15,
    color: "white",
  },
  card: {
    maxWidth: 245,
  },
  details: {
    background: "gray",
  },
  buy_now: {
    background: `linear-gradient(45deg,${theme.palette.primary.main},${theme.palette.secondary.main})`,
  },
  header: {
    background: theme.palette.tertiary.main,
    boxShadow: theme.shadows[8],
    padding: "0 24px",
    zIndex: 1,
  },
  media: {
    paddingTop: "100%",
  },
  menu: {
    color: theme.palette.primary.main,
  },
  menu_item: {
    color: "white",
  },
  menu_item_active: {
    background: `-webkit-linear-gradient(${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    paddingLeft: 4,
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },

  site_title: {
    //    color: theme.palette.secondary.main,
    //textShadow: `1px 1px 1px ${theme.palette.tertiary.main}`,
    background: `-webkit-linear-gradient(${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    paddingLeft: 4,
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },
  social: {
    minWidth: "unset",
  },
  facebook: {
    color: "#4267B2",
    fontSize: "1rem",
  },
  instagram: {
    // background: `-webkit-linear-gradient(#405DE6,#5851DB,#833AB4,#C13584,#E1306C,#E1306C,#E1306C,#F77737,#FCAF45,#FFDC80)`,
    // "-webkit-background-clip": "text",
    // "-webkit-text-fill-color": "transparent",
    color: "#C13584",
    fontSize: "1rem",
  },
  twitter: {
    color: "#00acee",
    fontSize: "1rem",
  },
});
const App = ({ classes }) => {
  const [footerHeight, setFooterHeight] = useState(0);
  let history = useHistory();
  const { pathname } = useLocation();
  const headerRef = useRef();
  const bodyRef = useRef();
  const footerRef = useRef();

  useEffect(() => {
    const hr = headerRef.current?.getBoundingClientRect().height;
    const br = bodyRef.current?.getBoundingClientRect().height;
    const minH = window.innerHeight - hr - br;
    setFooterHeight(minH);
  }, [headerRef, bodyRef]);

  return (
    <div className="App" style={{ width: "100%" }}>
      <Grid container style={{}}>
        <Grid item xs={12} classes={{ root: classes.header }} ref={headerRef}>
          <Box style={{ maxWidth: 700, width: "100%", margin: "0 auto" }}>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              <Grid item style={{ marginRight: 16 }}>
                <Typography
                  classes={{ root: classes.site_title }}
                  variant="h1"
                  style={{ paddingRight: 8 }}
                >
                  <Link to="/" alt="AVibe Home Page">
                    {"AVibe"}
                  </Link>
                </Typography>
              </Grid>
              <Grid item>
                <Grid
                  container
                  style={{ height: "100%" }}
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                >
                  <Grid item>
                    <a
                      href="https://www.instagram.com/avibellc"
                      alt="AVibe Official Instgram"
                    >
                      <Button
                        classes={{ root: classes.social }}
                        alt="AVibe Official Instagram"
                      >
                        <FaInstagram className={classes.instagram} />
                      </Button>
                    </a>
                  </Grid>
                  <Grid item>
                    <a
                      href="https://www.twitter.com/avibevibe"
                      alt="AVibe Official Twitter"
                    >
                      <Button
                        classes={{ root: classes.social }}
                        onClick={() =>
                          history.push("https://www.twitter.com/avibevibe")
                        }
                        alt="AVibe Official Twitter"
                      >
                        <FaTwitter className={classes.twitter} />
                      </Button>
                    </a>
                  </Grid>
                  <Grid item>
                    <a
                      href="https://www.facebook.com/AVibeUnlimited"
                      alt="AVibe Official Facebook"
                    >
                      <Button
                        classes={{ root: classes.social }}
                        alt="AVibe Official Twitter"
                      >
                        <FaFacebook className={classes.facebook} />
                      </Button>
                    </a>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs style={{ textAlign: "right" }}>
                <Hidden smUp>
                  <FaBars className={classes.menu} />
                </Hidden>
                <Hidden xsDown>
                  <Grid
                    container
                    direction="row"
                    justify="flex-end"
                    alignItems="center"
                  >
                    <Grid item>
                      <Button
                        onClick={() => history.push("/")}
                        classes={{
                          root:
                            classes[
                              !_.startsWith(pathname, "/testimonials") &&
                              !_.startsWith(pathname, "/about")
                                ? "menu_item_active"
                                : "menu_item"
                            ],
                        }}
                      >
                        Home
                      </Button>
                    </Grid>
                    {/* <Grid item>
                      <Button
                        onClick={() => history.push("/testimonials")}
                        classes={{
                          root:
                            classes[
                              _.startsWith(pathname, "/testimonials")
                                ? "menu_item_active"
                                : "menu_item"
                            ],
                        }}
                      >
                        Testimonials
                      </Button>
                    </Grid> */}
                    <Grid item>
                      <Button
                        onClick={() => history.push("/about")}
                        classes={{
                          root:
                            classes[
                              _.startsWith(pathname, "/about")
                                ? "menu_item_active"
                                : "menu_item"
                            ],
                        }}
                      >
                        About Us
                      </Button>
                    </Grid>
                  </Grid>
                </Hidden>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Body bodyRef={bodyRef} />
        <Footer footerRef={footerRef} footerHeight={footerHeight} />
      </Grid>
    </div>
  );
};

export default withStyles(styles)(App);
