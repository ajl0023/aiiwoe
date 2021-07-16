import { Box, Container } from "@material-ui/core";
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
import logo from "./images/logo.png";
import { Link, useHistory, withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  logo: {
    width: "100px",
    cursor: "pointer",
  },
}));

const Navbar = () => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <Box
      position="absolute"
      top="0"
      width="100%"
      zIndex="3"
      bgcolor="#512905"
      padding="5px 15px"
    >
      <img
        onClick={() => {
          history.push("/");
        }}
        className={classes.logo}
        src={logo}
        alt=""
      />
    </Box>
  );
};

export default withRouter(Navbar);
