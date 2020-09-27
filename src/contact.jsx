import React, { useState } from "react";
import { Grid, TextField, Typography, withStyles } from "@material-ui/core";
import ContactBack from "./images/contact_back.jpg";
const styles = (theme) => ({
  actions: {
    padding: 0,
  },
  body: { width: "100%", height: "100%" },
  button: {
    borderRadius: 4,
    color: "white",
    background: "rgb(5 32 36 / .7)",
    border: "1px solid " + theme.palette.secondary.main,
    padding: "4px 12px",
    fontSize: ".8rem",
    textShadow: "1px 0px 3px rgb(255 255 255 / .6)",
    textTransform: "uppercase",
  },
  card: {
    boxShadow: theme.shadows[8],
    maxWidth: 245,
  },
  contact_back: {
    background: `url(${ContactBack})`,
    backgroundSize: "cover",
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
    borderRadius: 8,
    boxShadow: theme.shadows[12],
    maxWidth: 444,
    width: "100%",
  },
  input: { width: "100%" },
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

const Contact = ({ classes, isMobile }) => {
  const [userMessage, setUserMessage] = useState({
    name: "",
    email: "",
    message: "",
    subscribe: "",
  });

  const handleChange = (field, value) => {
    console.log("changes", field, value);
    setUserMessage({ ...userMessage, [field]: value });
  };

  return (
    <>
      <Grid
        classes={{ root: classes.contact_back }}
        container
        style={{
          padding: isMobile ? 24 : 48,
          minHeight: "100vh",
          width: "100%",
        }}
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <Grid item style={{ width: "100%" }}>
          <Typography variant="h2" style={{ color: "white" }}>
            Contact us
          </Typography>
        </Grid>
        <Grid
          classes={{ root: classes.form_holder }}
          item
          style={{ padding: 48, color: "white", marginBottom: 48 }}
        >
          <form
            action="/"
            name="contact"
            method="post"
            netlify
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            enctype="application/x-www-form-urlencoded"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div style={{}}>
              <div className={classes.input_holder}>
                <TextField
                  className={classes.input}
                  type="text"
                  label="Name"
                  variant="outlined"
                  name="name"
                  onChange={(e) => handleChange("name", e.target.value)}
                  value={userMessage.name}
                />
              </div>
              <div className={classes.input_holder}>
                <TextField
                  className={classes.input}
                  type="email"
                  label="Email"
                  variant="outlined"
                  name="email"
                  onChange={(e) => handleChange("email", e.target.value)}
                  value={userMessage.email}
                />
              </div>
              <div className={classes.input_holder}>
                <TextField
                  className={classes.input}
                  type="text"
                  multiline
                  rows={7}
                  label="Message"
                  variant="outlined"
                  name="message"
                  onChange={(e) => handleChange("message", e.target.value)}
                  value={userMessage.message}
                />
              </div>
              <div>
                <p>
                  <button className={classes.button} type="submit">
                    Send
                  </button>
                </p>
              </div>
            </div>
          </form>
        </Grid>
        <Grid
          classes={{ root: classes.form_holder }}
          item
          style={{ padding: 48, color: "white" }}
        >
          <form name="mailing-list" method="post">
            <input type="hidden" name="form-name" value="mailing-list" />
            <div style={{}}>
              <div className={classes.input_holder}>
                <TextField
                  onChange={(e) => handleChange("subscribe", e.target.value)}
                  className={classes.input}
                  type="email"
                  label="Subscribe to our mailing list"
                  name="email"
                  value={userMessage.subscribe}
                  variant="outlined"
                />
              </div>
              <div>
                <p>
                  <button className={classes.button} type="submit">
                    Subscribe
                  </button>
                </p>
              </div>
            </div>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default withStyles(styles)(Contact);
