import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { Box, Grid, Typography, withStyles } from "@material-ui/core";

import "./App.css";
import Body from "./body";
import Footer from "./footer";
import { useEffect } from "react";
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
  site_title: {
    //    color: theme.palette.secondary.main,
    //textShadow: `1px 1px 1px ${theme.palette.tertiary.main}`,
    background: `-webkit-linear-gradient(${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    paddingLeft: 4,
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },
  twitter: {
    color: "#00acee",
    fontSize: "1rem",
  },
});
const App = ({ classes }) => {
  const [footerHeight, setFooterHeight] = useState(0);

  const headerRef = useRef();
  const bodyRef = useRef();
  const footerRef = useRef();

  useEffect(() => {
    const hr = headerRef.current?.getBoundingClientRect().height;
    const br = bodyRef.current?.getBoundingClientRect().height;
    const minH = window.innerHeight - hr - br;
    console.log(window.innerHeight, hr, br, minH);
    setFooterHeight(minH);
  }, [headerRef, bodyRef]);

  return (
    <div className="App" style={{ width: "100%" }}>
      <Grid container style={{}}>
        <Grid item xs={12} classes={{ root: classes.header }} ref={headerRef}>
          <Box style={{ maxWidth: 700, width: "100%", margin: "0 auto" }}>
            <Grid container>
              <Grid item xs>
                <Typography classes={{ root: classes.site_title }} variant="h1">
                  <Link to="/" alt="AVibe Home Page">
                    {"//AVibe"}
                  </Link>
                </Typography>
              </Grid>
              <Grid item>
                <Grid
                  container
                  style={{ height: "100%" }}
                  direction="column"
                  justify="center"
                  alignItems="flex-end"
                >
                  <Grid item>
                    <Link
                      to="https://www.twitter.com/avibevibe"
                      alt="AVibe Official Twitter"
                    >
                      <FaTwitter className={classes.twitter} />
                    </Link>
                  </Grid>
                </Grid>
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
