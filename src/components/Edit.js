// import React, { useState, useEffect } from "react";
// import { Grid, Paper } from "@material-ui/core";
// import { useForm, Form } from "./UseForm";
// import Controls from "./controls/Controls";

// const genderItems = [
//   { id: "male", title: "Male" },
//   { id: "female", title: "Female" },
//   { id: "other", title: "Other" },
// ];

// const initialFValues = {
//   id: 0,
//   fullName: "",
//   email: "",
//   mobile: "",
//   city: "",
//   gender: "male",
//   departmentId: "",
//   hireDate: new Date(),
//   isPermanent: false,
// };

// export default function Edit() {
//   const [profile, setProfile] = useState([]);

//   // useEffect(() => {
//   //   let req = JSON.stringify({ userID: uid });
//   //   fetch("https://vid.mergehealth.us/api/profile", {
//   //     method: "post",
//   //     body: req,
//   //     headers: { "Content-Type": "application/json" },
//   //   })
//   //     .then((res) => {
//   //       return res.json();
//   //     })
//   //     .then((json) => {
//   //       setProfile(json);
//   //       const { values, setValues, handleInputChange } = useForm({
//   //         username: json.username,
//   //         email: json.email,
//   //         city: json.city,
//   //         phone: json.phone,
//   //         age: json.age,
//   //         gender: json.gender,
//   //       });
//   //     });
//   // }, []); //the bracket calls use effect whenever what's in it changes

//   return (
//     <Form>
//       <Grid container>
//         <Grid item xs={6}>
//           <Controls.Input
//             name="username"
//             label="username"
//             value={values.username}
//             onChange={handleInputChange}
//           />
//           <Controls.Input
//             label="Email"
//             name="email"
//             value={values.email}
//             onChange={handleInputChange}
//           />
//           <Controls.Input
//             label="Phone"
//             name="phone"
//             value={values.phone}
//             onChange={handleInputChange}
//           />
//           <Controls.Input
//             label="City"
//             name="city"
//             value={values.city}
//             onChange={handleInputChange}
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <Controls.RadioGroup
//             name="gender"
//             label="Gender"
//             value={values.gender}
//             onChange={handleInputChange}
//             items={genderItems}
//           />
// <Controls.Select
//   name="departmentId"
//   label="Test"
//   value={values.departmentId}
//   onChange={handleInputChange}
//   options={[
//     { id: "1", title: "test" },
//     { id: "2", title: "test" },
//   ]} //this is where the backend comes in?
// />
//           <Controls.DatePicker
//             name="hireDate"
//             label="Date"
//             value={values.hireDate}
//             onChange={handleInputChange}
//           />
//           <div>
//             <Controls.Button type="submit" text="Submit"></Controls.Button>
//           </div>
//         </Grid>
//       </Grid>
//     </Form>
//   );
// }
