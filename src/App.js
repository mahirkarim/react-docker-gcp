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
import Tutorial from "./components/Tutorial.js";
import FriendsList from "./components/FriendsList.js";
import NewFriendsList from "./components/NewFriendsList.js";
import { getFromStorage, setInStorage } from "./utils/storage";
import Profile from "./components/Profile.js";
import Friends from "./components/Friends.js";
import Edit from "./components/Edit.js";
import EditProfile from "./components/EditProfile.js";
import EditMorning from "./components/EditMorning.js";
import EditEvening from "./components/EditEvening.js";
import FriendProfile from "./components/FriendProfile.js";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

function App() {
  window.OneSignal = window.OneSignal || [];
  const OneSignal = window.OneSignal;
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState("");
  const [signUpError, setSignUpError] = useState("");
  const [signInError, setSignInError] = useState("");
  useEffect(() => {
    OneSignal.push(() => {
      OneSignal.init(
        {
          appId: "89228c22-67e9-4d5b-92c1-2817c0a0f711", //https://dev.to/devpato/push-notifications-in-reactjs-with-onesignal-5bon
          promptOptions: {
            slidedown: {
              enabled: true,
              actionMessage:
                "We'd like to let you know when your friends are live",
              acceptButtonText: "Ok",
              cancelButtonText: "Cancel",
              categories: {
                tags: [
                  // {
                  //   tag: "react",
                  //   label: "ReactJS",
                  // },
                  // {
                  //   tag: "angular",
                  //   label: "Angular",
                  // },
                  // {
                  //   tag: "vue",
                  //   label: "VueJS",
                  // },
                  {
                    tag: "notifications",
                    label: "Allow Notifications",
                  },
                ],
              },
            },
          },
          welcomeNotification: {
            title: "One Signal",
            message: "Thanks for subscribing!",
          },
        },
        //Automatically subscribe to the new_app_version tag
        OneSignal.sendTag("new_app_version", "new_app_version", (tagsSent) => {
          // Callback called when tag has finished sending
          console.log("new_app_version TAG SENT", tagsSent);
        })
      );
    });
    const token1 = getFromStorage("token");
    if (token1) {
      fetch("https://vid.mergehealth.us/api/verify?token=" + token1)
        .then((res) => res.json())
        .then((json) => {
          if (json.success) {
            setToken(token1);
            setIsLoading(false);
          } else {
            setIsLoading(false);
          }
        });
    } else {
      setIsLoading(false);
    }
    // return () => {
    //   let req = JSON.stringify({ _id: localStorage.getItem("_id") });
    //   fetch("https://vid.mergehealth.us/api/remove", {
    //     method: "delete",
    //     body: req,
    //     headers: { "Content-Type": "application/json" },
    //   });
    // };
  }, []);
  if (!token) {
    return (
      <Router>
        <Switch>
          <Route path="/SignIn" component={SignIn}></Route>
          <Route path="/online" component={NewFriendsList}></Route>
          <Route path="/SignUp" component={SignUp}></Route>
          <Route path="/tutorial" component={Tutorial}></Route>
          <Route path="/friendslist" component={FriendsList} />
          <Route path="/profile" component={Profile} />
          <Route path="/addFriends" component={Friends} />
          <Route path="/edit" component={Edit} />
          <Route path="/editProfile" component={EditProfile} />
          <Route path="/editEvening" component={EditEvening} />
          <Route path="/editMorning" component={EditMorning} />
          <Route path="/friendProf" component={FriendProfile} />
          <Route
            path="/video"
            component={() => {
              window.location.href = `https://vid.mergehealth.us/${localStorage.getItem(
                "uid"
              )}`;
              return null;
            }}
          />
          <Route path="/" component={Home}></Route>
        </Switch>
      </Router>
    );
  }

  if (token) {
    return (
      <Router>
        <Switch>
          <Route path="/SignIn" component={NewFriendsList}></Route>
          <Route path="/SignUp" component={SignUp}></Route>
          <Route path="/online" component={NewFriendsList}></Route>
          <Route path="/tutorial" component={Tutorial}></Route>
          <Route path="/friendslist" component={FriendsList} />
          <Route path="/profile" component={Profile} />
          <Route path="/addFriends" component={Friends} />
          <Route path="/edit" component={Edit} />
          <Route path="/editProfile" component={EditProfile} />
          <Route path="/editEvening" component={EditEvening} />
          <Route path="/editMorning" component={EditMorning} />
          <Route path="/friendProf" component={FriendProfile} />
          <Route
            path="/video"
            component={() => {
              window.location.href = `https://vid.mergehealth.us/${localStorage.getItem(
                "uid"
              )}`;
              return null;
            }}
          />
          <Route path="/" component={Home}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
