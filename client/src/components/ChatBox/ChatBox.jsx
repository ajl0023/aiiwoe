import {
  Box,
  Button,
  FormControl,
  InputLabel,
  TextField,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import React, { useEffect, useMemo, useState } from "react";
import { clientId, generateId } from "../../ably";
import { cupObj } from "../../images/cups/cups";
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
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  sendButton: {
    "&.MuiButton-contained.Mui-disabled": {
      background: "rgba(255, 255, 255, 0.2)",
    },
  },
}));

const ChatBox = (props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const channel = useMemo(() => {
    return generateId();
  });
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const classes = useStyles();
  const handleMsg = (e) => {
    setInput(e.target.value);
  };
  const sendMsg = () => {
    channel.publish("message sent", { text: input, ...props.currentUser });

    setInput("");
  };
  useEffect(() => {
    // getSocket.on("sendMessage", (msg) => {
    //
    // });

    channel.subscribe(function (msg) {
      setMessages((prev) => {
        const copy = [...prev];
        copy.push(msg);
        return copy;
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
                  msg.clientId === clientId ? "row" : "row-reverse"
                }
                justifyContent="start"
                className={
                  msg.clientId === clientId
                    ? classes.messageOut
                    : classes.messageIn
                }
                padding="5px 15px"
              >
                <img
                  className={classes.cup}
                  src={cupObj[msg.data.name].default}
                  alt=""
                />
                <Box
                  position="relative"
                  padding="5px 15px"
                  bgcolor={msg.clientId === clientId ? "white" : "#c06c48"}
                >
                  <li>{msg.data.text}</li>
                  <div
                    className={
                      styles[
                        msg.clientId === clientId ? "arrow-right" : "arrow-left"
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
