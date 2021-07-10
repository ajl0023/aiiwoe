import React, { useEffect, useState } from "react";
import { Box, Container } from "@material-ui/core";

import {
  makeStyles,
  ThemeProvider,
  withStyles,
} from "@material-ui/core/styles";
import style from "./ChatTable.module.scss";
import affogato from "../../images/cups/affogato.png";

const useStyles = makeStyles((theme) => ({
  chatTable: {
    width: "300px",
    height: "300px",
    background: "rgba(80, 41, 0, 0.7)",
    borderRadius: "50%",
    position: "relative",
  },
}));

const ChatTable = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    var radius = 200;
    var main = document.getElementById("test");

    var mainHeight = parseInt(
      window.getComputedStyle(main).height.slice(0, -2)
    );
    var theta = [
      Math.PI / 2,
      Math.PI / 4,
      2 * Math.PI,
      7 * (Math.PI / 4),
      (3 * Math.PI) / 2,
      5 * (Math.PI / 4),
      3 * (Math.PI / 4),
      Math.PI,
    ];
    var circleArray = [];

    for (var i = 0; i < 8; i++) {
      var circle = document.createElement("img");
      circle.src = affogato;
      circle.className = `${style["circle"]}`;
      circleArray.push(circle);
      circleArray[i].posx = Math.round(radius * Math.cos(theta[i])) + "px";
      circleArray[i].posy = Math.round(radius * Math.sin(theta[i])) + "px";
      circleArray[i].style.position = "absolute";
      circleArray[i].style.top =
        mainHeight / 2 - parseInt(circleArray[i].posy.slice(0, -2)) - 20 + "px";
      circleArray[i].style.left =
        mainHeight / 2 + parseInt(circleArray[i].posx.slice(0, -2)) - 20 + "px";
      main.appendChild(circleArray[i]);
    }
  }, []);
  const classes = useStyles();

  return (
    <Box
      id="test"
      display="flex"
      justifyContent="center"
      className={classes.chatTable}
    ></Box>
  );
};

export default ChatTable;
