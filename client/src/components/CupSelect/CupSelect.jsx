import { Box, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { cups } from "../../images/cups/cups";
import { getSocket } from "../../socketInstance";

const useStyles = makeStyles((theme) => ({
  chatTable: {
    borderRadius: "50%",
    width: "200px",
    height: "200px",
    background: "red",
  },
  containerHeader: {
    color: "white",
    padding: "5px 15px",
  },
  cupImage: {
    width: "40px",
  },
}));
let test = [];

const CupSelect = (props) => {
  let max;
  const location = useLocation();

  const classes = useStyles();
  const [taken, setTaken] = useState();
  const [newRoom, setNewRoom] = useState();
  useEffect(() => {
    const loc = location.pathname.split("/")[2];
    getSocket.emit("getUsers", loc, (roomData) => {
      const userObj = roomData.reduce((obj, user) => {
        obj[user.name] = user;
        return obj;
      }, {});

      setTaken(userObj);
    });
  }, [newRoom]);
  useEffect(() => {
    getSocket.on("selectUsers", (roomData, key, i) => {
      if (roomData.length >= 2) {
        setNewRoom(key);
      }
      const userObj = roomData.reduce((obj, user) => {
        obj[user.name] = user;
        return obj;
      }, {});

      setTaken(userObj);
    });
    getSocket.on("leaveSelect", (roomData) => {
      const userObj = roomData.reduce((obj, user) => {
        obj[user.name] = user;
        return obj;
      }, {});
      setTaken(userObj);
    });

    return () => {
      getSocket.off("selectUsers");
      getSocket.off("join");
      getSocket.off("leave");
    };
  }, []);

  return (
    <Box
      maxWidth="600px"
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box width="100%">
        <Box
          bgcolor="black"
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography
            variant="caption"
            noWrap
            className={classes.containerHeader}
          >
            Select an avatar
          </Typography>
          <Typography
            variant="caption"
            noWrap
            className={classes.containerHeader}
          >
            Users in Room : {taken ? Object.keys(taken).length : 0}
          </Typography>
        </Box>
        <Box
          padding="15px 20px"
          alignItems="center"
          bgcolor="white"
          display="flex"
          gridGap="15px"
          overflow="auto"
        >
          {cups.map((cup) => {
            if (taken && taken[cup.name]) {
              return (
                <img
                  key={cup.name}
                  style={{
                    opacity: "60%",
                    pointer: "none",
                  }}
                  className={classes.cupImage}
                  src={cup.default}
                  alt=""
                />
              );
            }

            return (
              <img
                key={cup.name}
                onClick={() => props.selectUser(cup)}
                className={classes.cupImage}
                src={cup.default}
                alt=""
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default CupSelect;
