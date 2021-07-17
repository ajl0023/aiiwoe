import { Box, Grid, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import React, { useEffect, useMemo, useState } from "react";
import { generateId } from "../../ably.js";
import ChatBox from "../ChatBox/ChatBox";
import ChatTable from "../ChatTable/ChatTable";
import UserBar from "../UserBar/UserBar";
import { useSubscribe } from "../../App.js";
const useStyles = makeStyles((theme) => ({
  chatTable: {
    borderRadius: "50%",
    width: "200px",
    height: "200px",
    background: "red",
  },
}));
const Group = (props) => {
  const { users, typingUsers } = useSubscribe(props);
  const [room, setRoom] = useState();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  useEffect(() => {
    generateId().presence.enter(props.currentUser.name);
  }, [props.currentUser.name]);
  useEffect(() => {}, []);

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
            <ChatTable
              typingUsers={typingUsers}
              clientId={props.clientId}
              users={users}
            ></ChatTable>

            <UserBar typingUsers={typingUsers} users={users}></UserBar>
          </Grid>
          <Grid
            container
            alignItems={matches ? "center" : "flex-start"}
            justifyContent="center"
            style={{ height: matches ? "80%" : "100%" }}
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
