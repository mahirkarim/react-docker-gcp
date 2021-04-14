import React, { useEffect, useState } from "react";
import noprof from "../assets/img/noprof.jpg";

const Profile = () => {
  const [profile, setProfile] = useState([]);
  const uid = localStorage.getItem("uid");
  const [following, setFollowing] = useState([]);
  const [followers, setFollowers] = useState([]);
  useEffect(() => {
    let req = JSON.stringify({ userID: uid });
    fetch("http://localhost:3002/api/profile", {
      method: "post",
      body: req,
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setProfile(json);
        setFollowers(json.followers);
        setFollowing(json.following);
      });

    return () => {
      let req = JSON.stringify({ userID: uid });
      fetch("http://localhost:3002/api/profile", {
        method: "post",
        body: req,
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          setProfile(json);
        });
    };
  }, []);

  return (
    <div>
      {/* style{{maxwidth:"550px", margin:"0px auto"}} */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "15px 0px",
          borderBottom: "1px solid grey",
        }}
      >
        <div>
          <img
            style={{
              width: "160px",
              height: "160px",
              borderRadius: "80px",
              margin: "10px 0px",
            }}
            src={noprof}
          />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ alignItems: "center" }}>
            <h3>{profile.firstName + " " + profile.lastName}</h3>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "107%",
              }}
            >
              <h5>{followers.length} followers</h5>
              <h5>{following.length} following</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="gallery">
        {/* <h4>{friends[0]}</h4>
        <h4>{profiles[0].friends}</h4> */}
        {followers.map((value, index) => {
          return <h4 key={index}>{value}</h4>;
        })}
        {/* <h4>{profile.friends[0]}</h4> */}
        {/* {friends.map((user) => {
          return <h4>{user[0]}</h4>;
          // return <a>{user.name}</a>;
        })} */}
        {/* <img className="item" src={noprof} />
        <img className="item" src={noprof} />
        <img className="item" src={noprof} />
        <img className="item" src={noprof} />
        <img className="item" src={noprof} /> */}
      </div>
    </div>
  );
};

export default Profile;
