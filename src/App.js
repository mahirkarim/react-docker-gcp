import "./App.css";
//import VideoPage from './components/VideoPage.js' //then add <VideoPage/> tag
import logo from "./logo.svg";
import pic from "./assets/img/img2.png";
import areeb from "./assets/img/IMG_0030.jpeg";
import sarah from "./assets/img/IMG_0054.jpeg";
import mahir from "./assets/img/IMG_0048.jpeg";
import altLogo from "./assets/img/image3.jpeg";
import SignInSide from "./components/SignInSide.js";
import SignUp from "./components/SignUp.js";
import SignIn from "./components/SignIn.js";
import Home from "./Home";
import FriendsList from "./components/FriendsList.js";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // return () => {
    //   let req = JSON.stringify({ _id: localStorage.getItem("_id") });
    //   fetch("https://vid.mergehealth.us/api/remove", {
    //     method: "delete",
    //     body: req,
    //     headers: { "Content-Type": "application/json" },
    //   });
    // };
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/SignIn" component={SignIn}></Route>
        <Route path="/SignUp" component={SignUp}></Route>
        <Route path="/friendslist" component={FriendsList} />
        <Route
          path="/host"
          component={() => {
            window.location.href = `https://vid.mergehealth.us/${localStorage.getItem(
              "_id"
            )}`;
            return null;
          }}
        />
        <Route path="/" component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;
