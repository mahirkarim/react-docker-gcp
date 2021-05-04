import React, { useState, useEffect } from "react";
import { Grid, Paper } from "@material-ui/core";
import { UseForm, Form } from "./UseForm";
import Controls from "./controls/Controls";
import { useHistory } from "react-router-dom";

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "nonbinary", title: "Nonbinary" },
  { id: "agender", title: "Agender" },
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
  ethnicity: "",
};

export default function Edit() {
  const [profile, setProfile] = useState([]);
  const uid = localStorage.getItem("uid");
  const { values, setValues, handleInputChange } = UseForm(initialFValues);

  const history = useHistory();

  const handleClick = () => {
    let req = JSON.stringify({
      userID: uid,
      username: values.username,
      email: values.email,
      city: values.city,
      phone: values.phone,
      birthday: values.birthday,
      gender: values.gender,
      ethnicity: values.ethnicity,
    });
    fetch("https://vid.mergehealth.us/api/editprofile", {
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
          username: json.username,
          email: json.email,
          city: json.city,
          phone: json.phone,
          birthday: json.birthday,
          gender: json.gender,
          ethnicity: json.ethnicity,
        });
      });
  }, []); //the bracket calls use effect whenever what's in it changes

  return (
    <Form>
      <Grid container>
        <Grid>
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
          <Controls.DatePicker
            name="birthday"
            label="Birthday"
            value={values.birthday}
            onChange={handleInputChange}
          />
          <Controls.Input
            label="Ethnicity"
            name="ethnicity"
            value={values.ethnicity}
            onChange={handleInputChange}
          />
          <Controls.RadioGroup
            name="gender"
            label="Gender"
            value={values.gender}
            onChange={handleInputChange}
            items={genderItems}
          />
          <div>
            <Controls.Button
              type="submit"
              text="Submit"
              onClick={handleClick}
            ></Controls.Button>
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
