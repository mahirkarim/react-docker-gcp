import React, { useEffect, useState } from "react";
import noprof from "../assets/img/noprof.jpg";
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
import Card from "react-bootstrap/Card";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
// import HomeIcon from "@material-ui/icons/HomeIcon";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import SvgIcon from "@material-ui/core/SvgIcon";
import { useHistory } from "react-router-dom";
import { Paper } from "@material-ui/core";
import EditE from "./EditE";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > svg": {
      margin: theme.spacing(2),
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function EditEvening() {
  const history = useHistory();
  const [profile, setProfile] = useState([]);
  const uid = localStorage.getItem("uid");
  const [following, setFollowing] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [morning, setMorning] = useState([]);
  const [evening, setEvening] = useState([]);
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [editT, setEditT] = useState(0);
  const home = () => {
    history.push("/online");
  };

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
    let req = JSON.stringify({ userID: uid });
    fetch("https://vid.mergehealth.us/api/profile", {
      method: "post",
      body: req,
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setProfile(json);
        setFollowers(json.followers);
        setFollowing(json.following);
        setMorning(json.morning);
        setEvening(json.evening);
      });

    return () => {
      //   let req = JSON.stringify({ userID: uid });
      //   fetch("http://localhost:3002/api/profile", {
      //     method: "post",
      //     body: req,
      //     headers: { "Content-Type": "application/json" },
      //   })
      //     .then((res) => {
      //       return res.json();
      //     })
      //     .then((json) => {
      //       setProfile(json);
      //     });
    };
  }, []);

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
              Profile
            </Typography>
            {auth && (
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={home}
                  color="inherit"
                >
                  <HomeIcon />
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
      <div>
        {/* style={{maxwidth:"550px", margin:"0px auto"}} */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "15px 0px",
            borderBottom: "1px solid grey",
          }}
        >
          <div>
            <img
              style={{
                width: "160px",
                height: "160px",
                borderRadius: "80px",
                margin: "10px 0px",
              }}
              src={noprof}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ alignItems: "center" }}>
              <h3>{profile.firstName + " " + profile.lastName}</h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "107%",
                }}
              >
                <h6>{followers.length} followers</h6>
                <h6>{following.length} following</h6>
              </div>
              <div style={{}}>
                <div>
                  <Grid item xs={6}>
                    <Link href={`https://www.mergehealth.us/editProfile`}>
                      <h7>Edit Profile</h7>
                    </Link>
                  </Grid>
                  <Grid item xs={6}>
                    <Link href={`https://www.mergehealth.us/editMorning`}>
                      <h7>Edit Morning</h7>
                    </Link>
                  </Grid>
                  <Grid item xs={6}>
                    <Link href={`https://www.mergehealth.us/profile`}>
                      <h7>Done Editing</h7>
                    </Link>
                  </Grid>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ maxwidth: "0px", margin: "auto 0px" }}>
          {/* className="gallery" */}
          {/* <h4>{friends[0]}</h4>
        <h4>{profiles[0].friends}</h4> */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                Morning Routine
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {morning.map((value, index) => {
                  return <h4 key={index}>Step {index + 1 + ": " + value}</h4>;
                })}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>
                Evening Routine
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {evening.map((value, index) => {
                  return <h4 key={index}>Step {index + 1 + ": " + value}</h4>;
                })}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography className={classes.heading}>Followers</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {followers.map((value, index) => {
                  return <h4 key={index}>{value}</h4>;
                })}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4a-content"
              id="panel4a-header"
            >
              <Typography className={classes.heading}>Following</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {following.map((value, index) => {
                  return <h4 key={index}>{value}</h4>;
                })}
                <div>
                  <Link
                    href={`https://www.mergehealth.us/addFriends`}
                    // onClick={preventDefault}
                  >
                    <h7>Add Friends</h7>
                  </Link>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <Paper className={classes.pageContent}>
          <EditE />
        </Paper>
      </div>
    </Container>
  );
}
