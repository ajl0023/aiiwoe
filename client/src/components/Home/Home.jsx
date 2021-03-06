import { Box, Button, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const useStyles = makeStyles((theme) => ({
  buttonMain: {
    "& > *": {
      width: "100%",
      margin: theme.spacing(1),
      backgroundColor: "rgb(186 167 156)",
    },
  },
  backDrop: {
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  contentContainer: {
    zIndex: "2",
  },
  buttonHeader: {
    textTransform: "uppercase",
  },
  link: {
    width: "100%",
    textDecoration: "none",

    display: "block",
  },
  description: {
    fontSize: "2em",
  },
  logo: {
    maxWidth: "70%",
    width: "400px",
    height: "auto",
  },
}));
const Home = (props) => {
  useEffect(() => {
    props.clearUser();
  }, []);
  const classes = useStyles();
  return (
    <Container className={classes.contentContainer}>
      <Box
        gridGap="20px"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        color="white"
      >
        <img className={classes.logo} src={logo} alt="" />
        <Typography align="center" className={classes.description}>
          Experience the complicated side of love, together.
        </Typography>
        <Box className={classes.buttonContainer}>
          <Typography className={classes.buttonHeader} align="center">
            Match me with a:
          </Typography>
          <Box className={classes.buttonMain}>
            <Link to="/chat/group" className={classes.link}>
              <Button
                onClick={() => {
                  props.setChatType("group");
                }}
                fullWidth
                variant="contained"
              >
                Group
              </Button>
            </Link>

            <Link to="/chat/individual" className={classes.link}>
              <Button fullWidth variant="contained">
                Individual
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
