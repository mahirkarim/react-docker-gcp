import React, { useState, useEffect } from "react";
import { Grid, Paper } from "@material-ui/core";
import { UseForm, Form } from "./UseForm";
import Controls from "./controls/Controls";
import { useHistory } from "react-router-dom";

const initialFValues = {
  id: 0,
  addStepE: "",
  stepE: "",
  evening: [],
};

export default function Edit() {
  const [profile, setProfile] = useState([]);
  const uid = localStorage.getItem("uid");
  const { values, setValues, handleInputChange } = UseForm(initialFValues);

  const history = useHistory();

  const handleClick = () => {
    values.evening.splice(parseInt(values.stepE) - 1, 0, values.addStepE);
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

  const handleDelete = () => {
    values.evening.pop();
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
          stepE: json.evening.length + 1,
          addStepE: json.addStepE,
          evening: json.evening,
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
            value={values.stepE}
            onChange={handleInputChange}
          />
          <Controls.Input
            label="Step"
            name="addStep"
            value={values.addStepE}
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

// import React, { useState, useEffect } from "react";
// import { Grid, Paper } from "@material-ui/core";
// import { UseForm, Form } from "./UseForm";
// import Controls from "./controls/Controls";
// import { useHistory } from "react-router-dom";

// const initialFValues = {
//   id: 0,
//   step: "1",
//   evening: [],
//   addStep: "",
//   deleteStep: "",
// };

// export default function Edit() {
//   const [profile, setProfile] = useState([]);
//   const uid = localStorage.getItem("uid");
//   const { values, setValues, handleInputChange } = UseForm(initialFValues);
//   const [arrays, setArrays] = useState([]);
//   const history = useHistory();

//   const handleClick = () => {
//     let req = JSON.stringify({
//       userID: uid,
//       evening: values.evening,
//       step: values.step,
//       addStep: values.addStep,
//     });
//     fetch("https://vid.mergehealth.us/api/editevening", {
//       method: "post",
//       body: req,
//       headers: { "Content-Type": "application/json" },
//     })
//       .then((res) => {
//         return res.json();
//       })
//       .then((json) => {
//         if (json.success === false) {
//           alert(json.message);
//         }
//       });
//   };
//   const handleAdd = () => {
//     // setArrays([arrays, values.addStep]);
//     // let thing = values.evening;
//     // thing.push(values.addStep);

//     // values.evening.splice(parseInt(values.step) - 1, 0, values.addStep);
//     let req = JSON.stringify({
//       userID: uid,
//       evening: values.evening,
//       addStep: values.addStep,
//       step: values.step,
//     });
//     fetch("http://localhost:3002/api/editevening", {
//       method: "post",
//       body: req,
//       headers: { "Content-Type": "application/json" },
//     })
//       .then((res) => {
//         return res.json();
//       })
//       .then((json) => {
//         if (json.success == false) {
//           alert(json.message);
//         } else {
//           history.push("/profile");
//         }
//       });
//   };
//   const handleDelete = () => {
//     let evening = values.evening;
//     evening.splice(parseInt(values.step) - 1, 1);
//     console.log(values.step);
//     console.log(values.evening);
//     let req = JSON.stringify({
//       userID: uid,
//       evening: evening,
//     });
//     fetch("http://localhost:3002/api/editevening", {
//       method: "post",
//       body: req,
//       headers: { "Content-Type": "application/json" },
//     })
//       .then((res) => {
//         return res.json();
//       })
//       .then((json) => {
//         if (json.success === false) {
//           alert(json.message);
//         }
//       });
//   };

//   useEffect(() => {
//     let req = JSON.stringify({ userID: uid });
//     fetch("https://vid.mergehealth.us/api/profile", {
//       method: "post",
//       body: req,
//       headers: { "Content-Type": "application/json" },
//     })
//       .then((res) => {
//         return res.json();
//       })
//       .then((json) => {
//         setProfile(json);
//         setValues({
//           evening: json.evening,
//           step: json.evening.length,
//           addStep: json.evening[0],
//         });
//       });
//   }, []); //the bracket calls use effect whenever what's in it changes

//   return (
//     <Form>
//       <Grid container>
//         <Grid item xs={6}>
//           <Controls.Input
//             name="stepNum"
//             label="Step #"
//             value={values.step}
//             onChange={handleInputChange}
//           />
//           <Controls.Input
//             label="Step"
//             name="Step"
//             value={values.addStep}
//             onChange={handleInputChange}
//           />
//           <div>
//             <Controls.Button
//               type="submit"
//               text="Add"
//               onClick={handleAdd}
//             ></Controls.Button>
//           </div>
//           <div>
//             <Controls.Button
//               type="submit"
//               text="Delete"
//               color="secondary"
//               onClick={handleDelete}
//             ></Controls.Button>
//           </div>
//         </Grid>
//         <Grid item xs={6}>
//           {/* <Controls.Select
//             name="delete"
//             label="Delete Step"
//             value={values.deleteStep}
//             onChange={handleInputChange}
//             options={values.evening} //this is where the backend comes in?
//           /> */}

//           {/* <div>
//             <Controls.Button
//               type="submit"
//               text="Delete"
//               color="secondary"
//               onClick={handleDelete}
//             ></Controls.Button>
//           </div> */}
//         </Grid>
//       </Grid>
//       {/* <div>
//         <Controls.Button
//           type="submit"
//           text="Submit Changes"
//           onClick={handleClick}
//         ></Controls.Button>
//       </div> */}
//     </Form>
//   );
// }
