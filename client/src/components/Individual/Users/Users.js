import { Box, Container, Typography } from "@material-ui/core";
import React, { useState } from "react";
import {
  makeStyles,
  ThemeProvider,
  withStyles,
} from "@material-ui/core/styles";
import { cupObj } from "../../../images/cups/cups";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  cup: {
    width: "60px",
  },
}));
const Users = (props) => {
  useEffect(() => {}, []);
  const classes = useStyles();
  return (
    <Box height="100%" width="100%">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        bgcolor="rgba(255, 255, 255, 0.5)"
      >
        {props.users.map((user, i) => {
          return (
            <Box
              key={user.data}
              color="white"
              padding="5px 15px"
              display="flex"
              gridGap="15px"
              width="100%"
              alignItems="center"
              borderBottom={
                i !== props.users.length - 1 ? "1px solid black" : ""
              }
            >
              <img
                className={classes.cup}
                src={cupObj[user.data].default}
                alt=""
              />
              <Typography>{user.data}</Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Users;
