import React, { useState, useEffect } from "react";
import { Grid, Paper } from "@material-ui/core";
import { UseForm, Form } from "./UseForm";
import Controls from "./controls/Controls";

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];

const initialFValues = {
  id: 0,
  username: "",
  email: "",
  phone: "",
  city: "",
  gender: "",
  birthday: "",
};

export default function Edit() {
  const [profile, setProfile] = useState([]);
  const uid = localStorage.getItem("uid");
  const { values, setValues, handleInputChange } = UseForm(initialFValues);

  let req = JSON.stringify({ userID: uid });
  fetch("http://vid.mergehealth.us/api/profile", {
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
        username: json.username,
        email: json.email,
        city: json.city,
        phone: json.phone,
        birthday: json.birthday,
        gender: json.gender,
      });
    });

  useEffect(() => {}, []); //the bracket calls use effect whenever what's in it changes

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name="username"
            label="username"
            value={values.username}
            onChange={handleInputChange}
          />
          <Controls.Input
            label="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
          <Controls.Input
            label="Phone"
            name="phone"
            value={values.phone}
            onChange={handleInputChange}
          />
          <Controls.Input
            label="City"
            name="city"
            value={values.city}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.RadioGroup
            name="gender"
            label="Gender"
            value={values.gender}
            onChange={handleInputChange}
            items={genderItems}
          />
          <Controls.DatePicker
            name="birthday"
            label="Birthday"
            value={values.birthday}
            onChange={handleInputChange}
          />
          <div>
            <Controls.Button type="submit" text="Submit"></Controls.Button>
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
