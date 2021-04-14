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

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Profile = () => {
  const [profile, setProfile] = useState([]);
  const uid = localStorage.getItem("uid");
  const [following, setFollowing] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [morning, setMorning] = useState([]);
  const [evening, setEvening] = useState([]);
  const classes = useStyles();
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
    <div>
      {/* style{{maxwidth:"550px", margin:"0px auto"}} */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "15px 0px",
          borderBottom: "1px solid grey",
        }}
      >
        <div style={{ margin: "0px 20px" }}>
          <div>
            <h5>Add Friends</h5>
          </div>
          <div>
            <h5>Edit Profile</h5>
          </div>
        </div>
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
              <h5>{followers.length} followers</h5>
              <h5>{following.length} following</h5>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* className="gallery" */}
        {/* <h4>{friends[0]}</h4>
        <h4>{profiles[0].friends}</h4> */}
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Morning Routine</Typography>
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
            <Typography className={classes.heading}>Evening Routine</Typography>
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
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* <h4>{profile.friends[0]}</h4> */}
        {/* {friends.map((user) => {
          return <h4>{user[0]}</h4>;
          // return <a>{user.name}</a>;
        })} */}
        {/* <img className="item" src={noprof} />
        <img className="item" src={noprof} />
        <img className="item" src={noprof} />
        <img className="item" src={noprof} />
        <img className="item" src={noprof} /> */}
      </div>
    </div>
  );
};

export default Profile;
