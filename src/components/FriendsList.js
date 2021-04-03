import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import { Card } from "@material-ui/core";

const FriendsList = () => {
  const id = localStorage.getItem("_id");
  const name = localStorage.getItem("name");
  const [users, setUsers] = useState([]);
  const [online, setOnline] = useState([]);
  //   const history = useHistory();
  useEffect(() => {
    window.addEventListener("beforeunload", (event) => {
      console.log("addevent");
      event.preventDefault();
      event.returnValue = "";
      let req = JSON.stringify({ _id: localStorage.getItem("_id") });
      fetch("https://vid.mergehealth.us/api/remove", {
        method: "delete",
        body: req,
        headers: { "Content-Type": "application/json" },
      });
    });
    let req = JSON.stringify({ _id: id, isHosting: "false" });
    fetch("https://vid.mergehealth.us/api/hosting", {
      method: "post",
      body: req,
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      return res.json();
    });
    fetch("https://vid.mergehealth.us/api/users", {
      method: "get",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setUsers(json);
      });
    fetch("https://vid.mergehealth.us/api/online", {
      method: "get",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setOnline(json);
      });
  }, []);

  const handleClick = () => {
    let req = JSON.stringify({ _id: id, isHosting: "true" });
    fetch("https://vid.mergehealth.us/api/hosting", {
      method: "post",
      body: req,
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      //   const w = window.open(`https://vid.mergehealth.us/${id}`);

      return res.json();
    });
    // history.push("/host");
  };
  return (
    <div>
      <Button onClick={handleClick} href={`https://vid.mergehealth.us/${id}`}>
        Go Live!
      </Button>
      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              People Online
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              {online.map((user) => {
                return <a>{user.name}</a>;
              })}
            </Card.Body>
            {/* <Card.Body>Hello! I'm the body</Card.Body> */}
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              People Getting Ready
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              {users.map((user) => (
                <a
                  href={`https://vid.mergehealth.us/${user._id}`}
                  target={"_blank"}
                >
                  {user.name}
                </a>
              ))}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

      {/* {<Button
            onClick={handleClick}
            >
                Click me!
            </Button>} */}
    </div>
  );
};

export default FriendsList;
