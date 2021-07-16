import React, { useState, useEffect } from "react";
import Home from "./components/Home/Home";
import Group from "./components/Group/Group";
import Individual from "./components/Individual/Individual";
import "./App.css";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Box, CssBaseline } from "@material-ui/core";
import background from "./images/background.png";
import CupSelect from "./components/CupSelect/CupSelect";
import Navbar from "./components/Navbar/Navbar";

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
  const [currentUser, setCurrentUser] = useState();
  const [chatType, setChatType] = useState();
  const [clientId, setClientId] = useState();
  const [currChannel, setCurrChannel] = useState([]);
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
  const getClientId = (id) => {
    setClientId(id);
  };
  const classes = useStyles();
  let theme = createTheme({
    typography: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
    },
  });
  theme = responsiveFontSizes(theme);
  useEffect(() => {}, []);
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Box
          paddingTop="50.86px"
          display="flex"
          alignItems="center"
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
          >
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Switch>
                <Route exact path="/">
                  <Home
                    clearUser={clearUser}
                    setChatType={setChatTypeFunc}
                  ></Home>
                </Route>
                {currentUser ? (
                  <>
                    <Route path="/chat/group">
                      <Group
                        setChatType={setChatType}
                        clientId={clientId}
                        currentUser={currentUser}
                      ></Group>
                    </Route>
                    <Route path="/chat/individual">
                      <Individual
                        setChatType={setChatType}
                        clientId={clientId}
                        currentUser={currentUser}
                      ></Individual>
                    </Route>
                  </>
                ) : (
                  <Box
                    display="flex"
                    justifyContent="center"
                    padding="20px"
                    width="100%"
                  >
                    <CupSelect
                      getClientId={getClientId}
                      currChannel={currChannel}
                      chatType={chatType}
                      selectUser={selectUser}
                    ></CupSelect>
                  </Box>
                )}
              </Switch>
            </ThemeProvider>
          </Box>
        </Box>
      </Router>
    </>
  );
};

export default App;
