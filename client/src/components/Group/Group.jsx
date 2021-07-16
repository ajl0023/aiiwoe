import { Box, Container, Grid, Hidden } from "@material-ui/core";
import React, { useState } from "react";
import {
  makeStyles,
  ThemeProvider,
  withStyles,
} from "@material-ui/core/styles";
import { getSocket } from "../../socketInstance";

import ChatBox from "../ChatBox/ChatBox";
import ChatTable from "../ChatTable/ChatTable";
import CupSelect from "../CupSelect/CupSelect";
import { useEffect } from "react";
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
const Group = (props) => {
  const [users, setUsers] = useState([]);
  const [room, setRoom] = useState();
  useEffect(() => {
    generateId().presence.enter(props.currentUser.name);
  }, [props.currentUser.name]);
  useEffect(() => {
    props.setChatType("group");
    const channel = generateId();
    channel.presence.subscribe((msg) => {
      channel.presence.get((err, members) => {
        const usersCopy = [...users];

        usersCopy.push(...members);
        setUsers(usersCopy);
      });
    });
    return () => {
      channel.detach();
    };
  }, []);
  const classes = useStyles();

  return (
    <>
      <Box
        width="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding="30px 15px"
      >
        <Grid
          style={{ height: "100%" }}
          spacing={2}
          container
          alignItems="center"
        >
          <Grid xs={12} sm={6} item>
            <ChatTable clientId={props.clientId} users={users}></ChatTable>

            <UserBar users={users}></UserBar>
          </Grid>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            style={{ height: "80%" }}
            xs={12}
            sm={6}
            item
          >
            <ChatBox
              clientId={props.clientId}
              currentUser={props.currentUser}
            ></ChatBox>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Group;
