import React, { useState, useEffect } from "react";
import { Grid, Paper } from "@material-ui/core";
import { useForm, Form } from "./UseForm";
import Controls from "./controls/Controls";

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];

const initialFValues = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  departmentId: "",
  hireDate: new Date(),
  isPermanent: false,
};

export default function Edit() {
  const { values, setValues, handleInputChange } = useForm(initialFValues);

  //   useEffect(() => {}, []); //the bracket calls use effect whenever what's in it changes

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name="fullName"
            label="Full Name"
            value={values.fullName}
            onChange={handleInputChange}
          />
          <Controls.Input
            label="Username"
            name="username"
            value={values.email}
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
          <Controls.Select
            name="departmentId"
            label="Test"
            value={values.departmentId}
            onChange={handleInputChange}
            options={[
              { id: "1", title: "test" },
              { id: "2", title: "test" },
            ]} //this is where the backend comes in?
          />
        </Grid>
      </Grid>
    </Form>
  );
}
