import { Box, Container, useMediaQuery } from "@material-ui/core";
import React, { useState } from "react";
import {
  makeStyles,
  ThemeProvider,
  useTheme,
  withStyles,
} from "@material-ui/core/styles";

import { useEffect } from "react";
import { cupObj } from "../../../images/cups/cups";

const useStyles = makeStyles((theme) => ({
  cup: {
    width: "10%",
    flexShrink: "0.5",
  },
  chatTable: {
    borderRadius: "50%",
    width: "200px",
    height: "200px",
    background: "red",
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
    <Box display={matches ? "none" : "flex"} gridGap="15px">
      {props.users.map((user) => {
        return (
          <>
            <img
              className={classes.cup}
              src={cupObj[user.data].default}
              alt=""
            />
            <img
              className={classes.cup}
              src={cupObj[user.data].default}
              alt=""
            />
          </>
        );
      })}
    </Box>
  );
};

export default UserBar;
