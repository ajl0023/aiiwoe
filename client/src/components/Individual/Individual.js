import { Box, Grid, Hidden, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import React, { useEffect, useMemo, useState } from "react";
import { generateId } from "../../ably.js";
import { useSubscribe } from "../../App.js";
import ChatBox from "../ChatBox/ChatBox";
import UserBar from "../UserBar/UserBar";
import Users from "./Users/Users";
const useStyles = makeStyles((theme) => ({
  chatTable: {
    borderRadius: "50%",
    width: "200px",
    height: "200px",
    background: "red",
  },
}));
const Individual = (props) => {
  const { users, typingUsers } = useSubscribe(props);
  const [currentUser, setCurrentUser] = useState();
  const theme = useTheme();
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  useEffect(() => {
    generateId().presence.enter(props.currentUser.name);
  }, [props.currentUser.name]);

  return (
    <>
      <Grid
        container
        width="100%"
        height="100%"
        display="flex"
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
        style={{ padding: "30px 15px" }}
      >
        <Grid
          justifyContent="center"
          item
          style={{ height: matches ? "80%" : "" }}
          container
          xs={12}
          sm={4}
          alignItems="flex-start"
        >
          <Hidden xsDown>
            <Box display="flex" width="100%">
              <Users typingUsers={typingUsers} users={users}></Users>
            </Box>
          </Hidden>

          <UserBar typingUsers={typingUsers} users={users}></UserBar>
        </Grid>
        <Grid
          container
          alignItems={matches ? "center" : "flex-start"}
          justifyContent="center"
          style={{ height: matches ? "80%" : "100%" }}
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
