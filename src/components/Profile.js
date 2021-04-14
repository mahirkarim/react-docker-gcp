import React, { useEffect, useState } from "react";
import noprof from "../assets/img/noprof.jpg";

const Profile = () => {
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    let req = JSON.stringify({ userID: "60685037f21ad6001290a8f1" });
    fetch("http://localhost:3002/api/profile", {
      method: "post",
      body: req,
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setProfiles(json);
      });

    return () => {
      let req = JSON.stringify({ userID: "60685037f21ad6001290a8f1" });
      fetch("http://localhost:3002/api/profile", {
        method: "post",
        body: req,
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          setProfiles(json);
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
            <h3>{profiles[0].firstName + " " + profiles[0].lastName}</h3>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "107%",
              }}
            >
              <h5>40 followers</h5>
              <h5>40 following</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="gallery">
        {/* <h4>{friends[0]}</h4>
        <h4>{profiles[0].friends}</h4> */}
        {/* {friends.map((value, index) => {
          return <h4 key={index}>{value}</h4>;
        })}

        {friends.map((user) => {
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
