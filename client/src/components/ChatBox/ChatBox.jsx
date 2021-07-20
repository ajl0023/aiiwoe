import {
  Box,
  Button,
  FormControl,
  InputLabel,
  TextField,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { cupObj } from "../../images/cups/cups";
import { getSocket } from "../../socketInstance";
import styles from "./ChatBox.module.scss";

const useStyles = makeStyles((theme) => ({
  chatBox: {
    background: "rgba(255, 255, 255, 0.5)",
    height: "100%",
  },
  cup: {
    width: "40px",
    height: "40px",
    objectFit: "contain",
  },
  mainInput: {
    display: "flex",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    "& .MuiInputBase-root": {},
  },
  sendButton: {
    "&.MuiButton-contained.Mui-disabled": {
      background: "rgba(255, 255, 255, 0.2)",
    },
  },
}));
let typing = true;
let timeout;
const ChatBox = (props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const classes = useStyles();
  const handleMsg = (e) => {
    if (typing) {
      getSocket.emit("typing", props.room, getSocket.id);
    }
    typing = false;

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      typing = true;
      getSocket.emit("finished typing", props.room);
    }, 1000);
    setInput(e.target.value);
  };
  const sendMsg = () => {
    getSocket.emit("sendMsg", {
      text: input,
      room: props.room,
      socketid: getSocket.id,
      currentUser: props.currentUser,
    });
    setInput("");
  };

  useEffect(() => {
    getSocket.on("sendMsg", (msg) => {
      setMessages((prev) => {
        return [...prev, msg];
      });
    });
  }, []);

  return (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
      width="500px"
      alignItems={matches ? "space-between" : "center"}
    >
      <Box
        className={classes.chatBox}
        width="100%"
        position="relative"
        height="100%"
      >
        <Box height="100%" overflow="auto" className={classes.messageContainer}>
          {messages.map((msg, i) => {
            return (
              <Box
                key={i}
                gridGap="5px"
                alignItems="center"
                display="flex"
                flexDirection={
                  msg.socketid === getSocket.id ? "row" : "row-reverse"
                }
                justifyContent="start"
                className={
                  msg.socketid === getSocket.id
                    ? classes.messageOut
                    : classes.messageIn
                }
                padding="5px 15px"
              >
                <img
                  className={classes.cup}
                  src={cupObj[msg.currentUser.name].default}
                  alt=""
                />
                <Box
                  position="relative"
                  padding="5px 15px"
                  bgcolor={msg.socketid === getSocket.id ? "white" : "#c06c48"}
                >
                  <li>{msg.text}</li>
                  <div
                    className={
                      styles[
                        msg.socketid === getSocket.id
                          ? "arrow-right"
                          : "arrow-left"
                      ]
                    }
                  ></div>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" width="100%">
        <FormControl variant="filled" fullWidth>
          <InputLabel
            style={{ paddingLeft: "20px" }}
            htmlFor="outlined-adornment-amount"
          >
            Type Here...
          </InputLabel>
          <TextField
            onKeyUp={(e) => {
              if (e.code === "Enter") {
                sendMsg(e);
              }
            }}
            className={classes.mainInput}
            value={input}
            variant="filled"
            onChange={handleMsg}
            id="outlined-adornment-amount"
          />
        </FormControl>

        <Button
          className={classes.sendButton}
          disabled={input.length === 0}
          onClick={sendMsg}
          variant="contained"
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default ChatBox;
