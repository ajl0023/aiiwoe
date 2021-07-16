import { Box, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import ChatBox from "../ChatBox/ChatBox";
import Users from "./Users/Users";
import { generateId } from "../../ably.js";
const useStyles = makeStyles((theme) => ({
  chatTable: {
    borderRadius: "50%",
    width: "200px",
    height: "200px",
    background: "red",
  },
}));
const Individual = (props) => {
  const [currentUser, setCurrentUser] = useState();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    generateId().presence.enter(props.currentUser.name);
  }, []);
  const classes = useStyles();
  useEffect(() => {
    props.setChatType("individual");
    const channel = generateId();
    channel.presence.subscribe((msg) => {
      channel.presence.get((err, members) => {
        const usersCopy = [...users];

        usersCopy.push(...members);
        setUsers(usersCopy);
      });
    });
  }, []);
  return (
    <>
      <Container maxWidth="xl">
        <Box
          width="100%"
          height="100%"
          display="flex"
          gridGap="20px"
          justifyContent="space-between"
          alignItems="center"
        >
          <Users users={users}></Users>
          <ChatBox
            clientId={props.clientId}
            currentUser={props.currentUser}
          ></ChatBox>
        </Box>
      </Container>
    </>
  );
};

export default Individual;
