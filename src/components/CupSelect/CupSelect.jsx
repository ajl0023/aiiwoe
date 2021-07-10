import { Box, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import affogato from "../../images/cups/affogato.png";
import { cups } from "../../images/cups/cups";

const useStyles = makeStyles((theme) => ({
  chatTable: {
    borderRadius: "50%",
    width: "200px",
    height: "200px",
    background: "red",
  },
  containerHeader: {
    width: "100%",
    background: "black",
    color: "white",
  },
  cupImage: {
    width: "40px",
  },
}));
const CupSelect = (props) => {
  const classes = useStyles();
  return (
    <Box maxWidth="600px" width="100%" display="flex" justifyContent="center">
      <Box width="100%">
        <Typography className={classes.containerHeader} align="left">
          Select an avatar
        </Typography>
        <Box
          padding="15px 20px"
          alignItems="center"
          bgcolor="white"
          display="flex"
          gridGap="15px"
        >
          {cups.map((cup) => {
            return (
              <img
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
