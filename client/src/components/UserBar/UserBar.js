import { Box, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { cupObj } from "../../images/cups/cups";
import { clientId } from "../../ably";
const useStyles = makeStyles((theme) => ({
  cup: {
    flexShrink: "0.5",
  },
  chatTable: {
    borderRadius: "50%",
    width: "200px",
    height: "200px",
    background: "red",
  },
  typingBubble: {
    width: "25px",
    height: "10px",
    position: "absolute",
    right: "-4px",
    top: "-5px",
    background: "white",
    borderRadius: "14px",

    alignItems: "center",
    justifyContent: "center",
    gap: "2px",
    "& > *": {
      background: "black",
      borderRadius: "50%",
      width: "4px",
      height: "4px",
    },
  },
}));
const UserBar = (props) => {
  const [currentUser, setCurrentUser] = useState();
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  useEffect(() => {}, []);
  const classes = useStyles();
  const selectUser = (user) => {
    setCurrentUser(user);
  };
  return (
    <Box width="100%" display={matches ? "none" : "flex"} gridGap="15px">
      {props.users.map((user) => {
        return (
          <React.Fragment key={user.data}>
            <Box
              width="10%"
              display="flex"
              position="relative"
              flexDirection="column"
            >
              <Box
                display={
                  props.typingUsers[user.clientId] && user.clientId !== clientId
                    ? "flex"
                    : "none"
                }
                className={classes.typingBubble}
              >
                <div></div>
                <div></div>
                <div></div>
              </Box>
              <img
                className={classes.cup}
                src={cupObj[user.data].default}
                alt=""
              />
            </Box>
          </React.Fragment>
        );
      })}
    </Box>
  );
};

export default UserBar;
