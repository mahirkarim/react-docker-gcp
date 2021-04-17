import React, { useState, useEffect } from "react";
import { Grid, Paper } from "@material-ui/core";
import { UseForm, Form } from "./UseForm";
import Controls from "./controls/Controls";
import { useHistory } from "react-router-dom";

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];

const initialFValues = {
  id: 0,
  addStep: "",
  step: "",
  morning: [],
};

export default function Edit() {
  const [profile, setProfile] = useState([]);
  const uid = localStorage.getItem("uid");
  const { values, setValues, handleInputChange } = UseForm(initialFValues);

  const history = useHistory();

  const handleClick = () => {
    values.morning.splice(parseInt(values.step) - 1, 0, values.addStep);
    let req = JSON.stringify({
      userID: uid,
      addStep: values.addStep,
      step: values.step,
      morning: values.morning,
    });
    fetch("https://vid.mergehealth.us/api/editmorning", {
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

  const handleDelete = () => {
    values.morning.pop();
    let req = JSON.stringify({
      userID: uid,
      addStep: values.addStep,
      step: values.step,
      morning: values.morning,
    });
    fetch("https://vid.mergehealth.us/api/editmorning", {
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
          step: json.morning.length + 1,
          addStep: json.addStep,
          morning: json.morning,
        });
      });
  }, []); //the bracket calls use effect whenever what's in it changes

  return (
    <Form>
      <Grid container>
        <Grid>
          <Controls.Input
            name="stepNum"
            label="Step #"
            value={values.step}
            onChange={handleInputChange}
          />
          <Controls.Input
            label="Step"
            name="addStep"
            value={values.addStep}
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
