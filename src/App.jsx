import React, { useRef, useState } from "react";
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
    zIndex: 1,
  },
  media: {
    paddingTop: "100%",
  },
  site_title: {
    //    color: theme.palette.secondary.main,
    //textShadow: `1px 1px 1px ${theme.palette.tertiary.main}`,
    background: `-webkit-linear-gradient(${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    paddingLeft: 16,
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
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
  //
  return (
    <div className="App" style={{ width: "100%" }}>
      <Grid container style={{}}>
        <Grid item xs={12} classes={{ root: classes.header }} ref={headerRef}>
          <Box style={{ maxWidth: 700, width: "100%", margin: "0 auto" }}>
            <Grid container>
              <Grid item xs>
                <Typography classes={{ root: classes.site_title }} variant="h1">
                  {"//AVibe"}
                </Typography>
              </Grid>
              <Grid item>
                <FaTwitter />
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
