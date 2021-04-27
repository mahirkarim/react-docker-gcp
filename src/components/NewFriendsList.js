import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import API from "./API";

function Copyright() {
  const classes = useStyles();
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
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#5499c7",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#5499c7",
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function NewFriendsList() {
  const classes = useStyles();
  const uid = localStorage.getItem("uid");
  const log = 0;
  const [users, setUsers] = useState([]);
  const [online, setOnline] = useState([]);
  const history = useHistory();
  const [auth, setAuth] = React.useState(true);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  useEffect(() => {
    fetch(API + "/users", {
      method: "get",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setUsers(json);
      });
    fetch(API + "/activeSessions", {
      method: "get",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setOnline(json);
      });
    return () => {
      // let req = JSON.stringify({ userID: uid, isLive: "true" });
      // fetch("https://vid.mergehealth.us/api/live", {
      //   method: "post",
      //   body: req,
      //   headers: { "Content-Type": "application/json" },
      // }).then((res) => {
      //   return res.json();
      // });
      if (log == 1) {
        let req = JSON.stringify({
          userID: uid,
        });
        fetch(API + "/remove", {
          method: "delete",
          body: req,
          headers: { "Content-Type": "application/json" },
        }).then(() => {
          history.push("/SignIn");
        });
      }
    };
  }, []);

  const logOut = () => {
    let req = JSON.stringify({
      userID: uid,
    });
    fetch(API + "/remove", {
      method: "delete",
      body: req,
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      history.push("/SignIn");
    });
  };

  const profile = () => {
    history.push("/profile");
  };

  const goLive = () => {
    let req = JSON.stringify({ userID: uid, isLive: "true" });
    fetch(API + "/live", {
      method: "post",
      body: req,
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then(() => {
        history.push("/vid");
      });
    // .then(() => {
    //   window.location = `https://vid.mergehealth.us/${uid}`;
    // });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Home
            </Typography>
            {auth && (
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={profile}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
      <div className={classes.paper}>
        <Typography component="h3" variant="h3">
          Merge Health
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Accordion>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      Friends Online
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      {online.map((user) => {
                        return (
                          <Typography component="h1" variant="h6">
                            {user.name}
                          </Typography>
                        );
                        // return <a>{user.name}</a>;
                      })}
                    </Card.Body>
                    {/* <Card.Body>Hello! I'm the body</Card.Body> */}
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Accordion>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      Friends Live
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      {users.map((user) => {
                        return (
                          <Typography
                            component="h1"
                            variant="h6"
                            target={"_blank"}
                          >
                            <Link
                              href={`https://vid.mergehealth.us/${user.userID}`}
                              // onClick={preventDefault}
                            >
                              {user.name}
                            </Link>
                          </Typography>
                        );
                        // return <a>{user.name}</a>;
                      })}
                    </Card.Body>
                    {/* <Card.Body>Hello! I'm the body</Card.Body> */}
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Grid>
            <Grid item xs={12}>
              {/* <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              /> */}
            </Grid>
            <Grid item xs={12}>
              {/* <TextField
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              /> */}
            </Grid>
          </Grid>
          <Button
            onClick={goLive}
            // href={`https://vid.mergehealth.us/${uid}`}
            //type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Go Live
          </Button>
          <Button
            //type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={logOut}
          >
            Log Out
          </Button>
          {/* <Button
            //type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={profile}
          >
            Profile
          </Button> */}
          <Grid container justify="center"></Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
