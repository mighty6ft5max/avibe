import React from "react";
import { Grid, Typography, withStyles } from "@material-ui/core";
import Logo from "./images/logo_footer.png";

const styles = (theme) => ({
  body: {
    boxShadow:
      "0px -6px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
    textAlign: "center",
  },
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
  media: {
    paddingTop: "100%",
  },
  logo: {
    marginBottom: 25,
    width: 40,
    "-webkit-box-reflect":
      "below 4px -webkit-gradient(linear, right top, right bottom, from(transparent), color-stop(40%, transparent), to(rgba(255, 255, 255, 0.3)))",
  },
});
const Footer = ({ classes, footerRef, footerHeight }) => {
  return (
    <Grid
      classes={{ root: classes.body }}
      item
      xs={12}
      ref={footerRef}
      style={{ minHeight: footerHeight }}
    >
      <Grid
        container
        style={{ width: "100%", height: "100%" }}
        direction="column"
        justify="flex-end"
        alignItems="center"
      >
        <Grid item style={{ padding: 48 }}>
          <img className={classes.logo} src={Logo} alt="AVibe Logo" />
          <Typography variant="body2">
            AVibe LLC
            <br />
            <span>Strategic Global Commerce</span>
            <br />
            <br />
            Copyright c 2020
            <br />
            All Rights Reserved
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Footer);
