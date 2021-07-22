import { Box, CssBaseline, useMediaQuery } from "@material-ui/core";
import {
  createTheme,
  makeStyles,
  responsiveFontSizes,
  ThemeProvider,
  useTheme,
} from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import CupSelect from "./components/CupSelect/CupSelect";
import Group from "./components/Group/Group";
import Home from "./components/Home/Home";
import Individual from "./components/Individual/Individual";
import Navbar from "./components/Navbar/Navbar";
import background from "./images/background.png";
const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    height: "100vh",
  },
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
}));

const App = () => {
  const resize = useTheme();
  const matches = useMediaQuery(resize.breakpoints.up("sm"));
  const [currentUser, setCurrentUser] = useState();
  const [chatType, setChatType] = useState();

  const selectUser = (user) => {
    // setCurrChannel(channel);
    setCurrentUser(user);
  };
  const clearUser = () => {
    setCurrentUser();
  };
  const setChatTypeFunc = (type) => {
    setChatType(type);
  };

  const classes = useStyles();
  let theme = createTheme({
    typography: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
    },
    typingBubble: {
      width: "25px",
      height: "10px",
      position: "absolute",
      right: "-4px",
      top: "-5px",
      background: "white",
      borderRadius: "14px",

      alignItems: "center",
      justifyContent: "center",
      gap: "2px",
      "& > *": {
        background: "black",
        borderRadius: "50%",
        width: "4px",
        height: "4px",
      },
    },
  });
  theme = responsiveFontSizes(theme);
  useEffect(() => {}, []);
  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <Navbar></Navbar>
          <Box
            paddingTop="50.86px"
            display="flex"
            alignItems={matches ? "center" : "flex-start"}
            justifyContent="center"
            maxWidth="100vw"
            overflow="hidden"
            className={classes.container}
          >
            <Box
              position="fixed"
              width="100vw"
              height="100vh"
              className={classes.backDrop}
            ></Box>
            <Box
              justifyContent="center"
              display="flex"
              zIndex="2"
              maxWidth="1200px"
              width="100%"
              height="80%"
            >
              <CssBaseline />

              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => (
                    <Home
                      clearUser={clearUser}
                      setChatType={setChatTypeFunc}
                    ></Home>
                  )}
                ></Route>

                <Route path="/chat/group">
                  {currentUser ? (
                    <Group
                      setChatType={setChatType}
                      currentUser={currentUser}
                    ></Group>
                  ) : (
                    <Box
                      display="flex"
                      justifyContent="center"
                      padding="20px"
                      width="100%"
                    >
                      <CupSelect
                        chatType={chatType}
                        selectUser={selectUser}
                      ></CupSelect>
                    </Box>
                  )}
                </Route>
                <Route path="/chat/individual">
                  {currentUser ? (
                    <Individual
                      setChatType={setChatType}
                      currentUser={currentUser}
                    ></Individual>
                  ) : (
                    <Box
                      display="flex"
                      justifyContent="center"
                      padding="20px"
                      width="100%"
                    >
                      <CupSelect
                        chatType={chatType}
                        selectUser={selectUser}
                      ></CupSelect>
                    </Box>
                  )}
                </Route>
              </Switch>
            </Box>
          </Box>
        </ThemeProvider>
      </Router>
    </>
  );
};

export default App;
