import React, { useState, useEffect } from "react";
import { Grid, Paper } from "@material-ui/core";
import { UseForm, Form } from "./UseForm";
import Controls from "./controls/Controls";
import { useHistory } from "react-router-dom";
import API from "./API";

const initialFValues = {
  id: 0,
  username: "",
  following: [],
  followers: [],
};

export default function AddF() {
  const [profile, setProfile] = useState([]);
  const uid = localStorage.getItem("uid");
  const { values, setValues, handleInputChange } = UseForm(initialFValues);

  const history = useHistory();

  const handleClick = () => {
    values.following.push(values.username);
    let req = JSON.stringify({
      username: values.username,
    });
    fetch(API + "/friendprofile", {
      method: "post",
      body: req,
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setProfile(json);
        setValues({
          followers: json.followers,
        });
      });
    values.followers.push(values.username);
    let req2 = JSON.stringify({
      username: values.username,
      followers: values.followers,
      following: values.following,
      userID: uid,
    });
    fetch(API + "/addfriend", {
      method: "post",
      body: req2,
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        if (json.success == false) {
          alert(json.message);
        } else {
          history.push("/profile");
        }
      });
  };

  const handleDelete = () => {
    values.following.pop();
    let req = JSON.stringify({
      userID: uid,
      addStepE: values.addStepE,
      stepE: values.stepE,
      evening: values.evening,
    });
    fetch("https://vid.mergehealth.us/api/editevening", {
      method: "post",
      body: req,
      headers: { "Content-Type": "application/json" },
    })
      // .then((res) => res.json())
      // .then((json) => {
      //   setSignUpError(json.message);
      //   history.push("/SignIn");
      // });
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        if (json.success == false) {
          alert(json.message);
        } else {
          history.push("/profile");
        }
      });
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
        setValues({
          following: json.following,
        });
      });
  }, []); //the bracket calls use effect whenever what's in it changes

  return (
    <Form>
      <Grid container>
        <Grid>
          <Controls.Input
            label="Username"
            name="username"
            value={values.username}
            onChange={handleInputChange}
          />
          {/* <Controls.RadioGroup
            name="gender"
            label="Gender"
            value={values.gender}
            onChange={handleInputChange}
            items={genderItems}
          /> */}
          <div>
            <Controls.Button
              type="submit"
              text="Add Step"
              onClick={handleClick}
            ></Controls.Button>
            <Controls.Button
              type="submit"
              text="Delete Last"
              color="secondary"
              onClick={handleDelete}
            ></Controls.Button>
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
