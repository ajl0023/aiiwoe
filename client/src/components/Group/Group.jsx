import { Box, Grid, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import React, { useEffect, useMemo, useState } from "react";
import { generateId } from "../../ably.js";
import ChatBox from "../ChatBox/ChatBox";
import ChatTable from "../ChatTable/ChatTable";
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
  const [typingUsers, setTypingUsers] = useState({});
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  useEffect(() => {
    generateId().presence.enter(props.currentUser.name);
  }, [props.currentUser.name]);
  useEffect(() => {}, []);
  useEffect(() => {
    props.setChatType("group");
    const channel = generateId();
    const copy = {};
    let timeout;
    channel.subscribe((data) => {
      if (data.name === "typing") {
        setTypingUsers((prev) => {
          copy[data.data] = true;
          return copy;
        });
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          setTypingUsers({});
        }, 1200);
      }
    });

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
          spacing={1}
          container
          alignItems="center"
        >
          <Grid xs={12} sm={6} item>
            <ChatTable clientId={props.clientId} users={users}></ChatTable>

            <UserBar typingUsers={typingUsers} users={users}></UserBar>
          </Grid>
          <Grid
            container
            alignItems={matches ? "center" : "flex-start"}
            justifyContent="center"
            style={{ height: "100%" }}
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
