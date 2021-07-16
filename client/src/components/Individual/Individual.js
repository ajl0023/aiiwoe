import { Box, Container, Grid, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import ChatBox from "../ChatBox/ChatBox";
import Users from "./Users/Users";
import { generateId } from "../../ably.js";
import UserBar from "../UserBar/UserBar";
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
  const classes = useStyles();
  useEffect(() => {
    generateId().presence.enter(props.currentUser.name);
  }, [props.currentUser.name]);

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
      <Grid
        container
        width="100%"
        height="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        spacing={3}
        style={{ padding: "30px 15px" }}
      >
        <Grid
          justifyContent="center"
          item
          style={{ height: "80%" }}
          container
          xs={12}
          sm={4}
          alignItems="flex-start"
        >
          <Hidden xsDown>
            <Box height="100%" display="flex" width="100%">
              <Users users={users}></Users>
            </Box>
          </Hidden>

          <UserBar users={users}></UserBar>
        </Grid>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          style={{ height: "80%" }}
          item
          xs={12}
          sm={8}
        >
          <ChatBox
            clientId={props.clientId}
            currentUser={props.currentUser}
          ></ChatBox>
        </Grid>
      </Grid>
    </>
  );
};

export default Individual;
