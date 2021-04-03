import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import pic from "../assets/img/image2.jpeg";
import { useHistory } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Merge Health
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: `url(${pic})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#5499c7",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#5499c7",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function Tutorial() {
  const classes = useStyles();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [signInError, setSignInError] = useState("");
  const [token, setToken] = useState("");
  const history = useHistory();

  const handleClick = () => {
    history.push("/online");
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      {/* {signInError ? <p>{signInError}</p> : null} */}
      <Grid item xs={false} sm={4} md={7} className={classes.image} />

      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h3">
            How to use:
          </Typography>
          <Typography component="h1" variant="h6"></Typography>
          <Box mt={2}>
            <Typography component="h6" variant="h6">
              The Merge Health web application currently shows you which of your
              friends have similar schedules and creates secure video chat rooms
              to join those friends in their morning and bedtime routines. When
              you click Get Started, you will be redirected to a page with
              dropdowns showing you who else is online and who is hosting a
              video room. If you expand the Joinable Rooms category, you will
              see a list of joinable friends getting ready. Click on any of the
              names in this list to join their room. However, you are always
              welcome to start your own video room with the Go Live button, and
              your friends online will be able to join you.
            </Typography>
          </Box>

          <form className={classes.form} noValidate>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleClick}
            >
              Get Started
            </Button>
            <Box mt={3}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
