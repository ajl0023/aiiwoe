import React from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  Input,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@material-ui/core";

import {
  makeStyles,
  ThemeProvider,
  withStyles,
} from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  chatBox: {
    background: "white",
    height: "500px",
    opacity: "50%",
  },
}));
const ChatBox = () => {
  const classes = useStyles();

  return (
    <div>
      <Box height="100%" display="flex" justifyContent="space-between">
        <Box
          className={classes.chatBox}
          width="500px"
          position="relative"
          height="100%"
        >
          <Box
            position="absolute"
            display="flex"
            justifyContent="space-between"
            bottom="0"
            width="100%"
          >
            <FormControl fullWidth>
              <InputLabel htmlFor="outlined-adornment-amount">
                Amount
              </InputLabel>
              <OutlinedInput
                labelWidth={60}
                id="outlined-adornment-amount"
                labelWidth={90}
              />
            </FormControl>

            <Button variant="contained">Send</Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default ChatBox;
