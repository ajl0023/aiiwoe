import React, { useEffect, useRef, useState } from "react";
import { Box, Container, useMediaQuery } from "@material-ui/core";

import {
  makeStyles,
  ThemeProvider,
  useTheme,
  withStyles,
} from "@material-ui/core/styles";
import style from "./ChatTable.module.scss";
import { cupObj } from "../../images/cups/cups";
import { useMemo } from "react";

const useStyles = makeStyles((theme) => ({
  chatTable: {
    width: "400px",

    background: "rgba(80, 41, 0, 0.7)",
    borderRadius: "50%",
    position: "relative",
    "&::before": {
      content: "''",
      display: "block",
      paddingBottom: "100%",
    },
  },
}));

const ChatTable = (props) => {
  const [circleArr, setCircleArr] = useState([]);
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up("sm"));

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
  const containerRef = useRef();

  const classes = useStyles();
  const cupPos = useMemo(() => {});
  const circleRef = useRef([]);
  function resize() {
    setCircleArr(() => {
      var mainHeight = containerRef.current
        ? parseInt(
            window.getComputedStyle(containerRef.current).height.slice(0, -2)
          )
        : 0;
      circleRef.current = [];
      var radius = containerRef.current.offsetWidth / 2 + 20;

      let circleArray = circleRef.current;
      for (var i = 0; i < props.users.length; i++) {
        var circle = { style: {} };
        circle.src = cupObj[props.users[i].data].default;
        circle.name = props.users[i].data;
        circleArray.push(circle);
        circleArray[i].posx = Math.round(radius * Math.cos(theta[i])) + "px";
        circleArray[i].posy = Math.round(radius * Math.sin(theta[i])) + "px";
        circleArray[i].style.position = "absolute";
        circleArray[i].style.top =
          mainHeight / 2 -
          parseInt(circleArray[i].posy.slice(0, -2)) -
          40 +
          "px";
        circleArray[i].style.left =
          mainHeight / 2 +
          parseInt(circleArray[i].posx.slice(0, -2)) -
          20 +
          "px";
      }
      return circleArray;
    });
  }
  useEffect(() => {
    resize();
    window.onresize = () => {
      resize();
    };
  }, [props.users]);

  return (
    <Box paddingRight="40px">
      <Box
        display={matches ? "flex" : "none"}
        justifyContent="center"
        alignItems="center"
      >
        <Box
          ref={containerRef}
          display="flex"
          justifyContent="center"
          className={classes.chatTable}
        >
          {circleArr.map((ele) => {
            return (
              <img
                key={ele.name}
                className={`${style["circle"]}`}
                src={ele.src}
                style={{
                  ...ele.style,
                }}
                alt=""
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default ChatTable;
