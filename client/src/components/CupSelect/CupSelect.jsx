import { Box, Typography, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import affogato from "../../images/cups/affogato.png";
import { cups } from "../../images/cups/cups";
import { generateId } from "../../ably.js";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
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

const CupSelect = (props) => {
  const location = useLocation();

  const classes = useStyles();
  const [taken, setTaken] = useState();

  useEffect(() => {
    const chatType = location.pathname.split("/")[2];

    function getToken(token) {
      axios
        .post("/token", {
          token,
          type: chatType,
        })
        .then((data) => {
          generateId(data.data.token).presence.subscribe(function (
            presenceMsg
          ) {
            generateId(data.data.token).presence.get(function (err, members) {
              const userObj = members.reduce((obj, user) => {
                obj[user.data] = user;
                return obj;
              }, {});
              setTaken(userObj);
            });
          });
        });
    }
    getToken();
    return () => {
      generateId().unsubscribe();
      setTaken(null);
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
