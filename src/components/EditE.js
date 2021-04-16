import React, { useState, useEffect } from "react";
import { Grid, Paper } from "@material-ui/core";
import { UseForm, Form } from "./UseForm";
import Controls from "./controls/Controls";
import { useHistory } from "react-router-dom";

const initialFValues = {
  id: 0,
  step: "1",
  evening: [],
  addStep: "",
  deleteStep: "",
};

export default function Edit() {
  const [profile, setProfile] = useState([]);
  const uid = localStorage.getItem("uid");
  const { values, setValues, handleInputChange } = UseForm(initialFValues);
  const [arrays, setArrays] = useState([]);
  const history = useHistory();

  const handleClick = () => {
    let req = JSON.stringify({
      userID: uid,
      evening: values.evening,
      step: values.step,
      addStep: values.addStep,
    });
    fetch("https://vid.mergehealth.us/api/editevening", {
      method: "post",
      body: req,
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        if (json.success == false) {
          alert(json.message);
        }
      });
  };
  const handleAdd = () => {
    setArrays([arrays, values.addStep]);

    // values.evening.splice(parseInt(values.step) - 1, 0, values.addStep);
    let req = JSON.stringify({
      userID: uid,
      evening: arrays,
      addStep: values.addStep,
      step: values.step,
    });
    fetch("https://vid.mergehealth.us/api/editevening", {
      method: "post",
      body: req,
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        if (json.success == false) {
          alert(json.message);
        }
      });
  };
  const handleDelete = () => {
    setValues({ evening: values.evening.splice(values.step - 1, 1) });
    let req = JSON.stringify({
      userID: uid,
      evening: values.evening,
    });
    fetch("https://vid.mergehealth.us/api/editevening", {
      method: "post",
      body: req,
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        if (json.success == false) {
          alert(json.message);
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
          evening: json.evening,
          //   step: json.evening.length,
          //   addStep: json.evening[0],
        });
        setArrays(json.evening);
      });
  }, []); //the bracket calls use effect whenever what's in it changes

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name="step#"
            label="Step #"
            value={values.step}
            onChange={handleInputChange}
          />
          <Controls.Input
            label="Step"
            name="Step"
            value={values.addStep}
            onChange={handleInputChange}
          />
          <div>
            <Controls.Button
              type="submit"
              text="Add"
              onClick={handleAdd}
            ></Controls.Button>
          </div>
          <div>
            <Controls.Button
              type="submit"
              text="Delete"
              color="secondary"
              onClick={handleDelete}
            ></Controls.Button>
          </div>
        </Grid>
        <Grid item xs={6}>
          {/* <Controls.Select
            name="delete"
            label="Delete Step"
            value={values.deleteStep}
            onChange={handleInputChange}
            options={values.evening} //this is where the backend comes in?
          /> */}

          {/* <div>
            <Controls.Button
              type="submit"
              text="Delete"
              color="secondary"
              onClick={handleDelete}
            ></Controls.Button>
          </div> */}
        </Grid>
      </Grid>
      {/* <div>
        <Controls.Button
          type="submit"
          text="Submit Changes"
          onClick={handleClick}
        ></Controls.Button>
      </div> */}
    </Form>
  );
}
