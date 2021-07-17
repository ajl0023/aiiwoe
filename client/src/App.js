import { Box, CssBaseline } from "@material-ui/core";
import {
  createTheme,
  makeStyles,
  responsiveFontSizes,
  ThemeProvider,
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
import { generateId } from "./ably";
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
export function useSubscribe(props) {
  const [typingUsers, setTypingUsers] = useState({});
  const [users, setUsers] = useState([]);

  useEffect(() => {
    props.setChatType("group");
    const channel = generateId();
    const copy = {};
    let timeout;
    channel.subscribe((data) => {
      if (data.name === "typing") {
        setTypingUsers((prev) => {
          copy[data.data] = true;
          return copy;
        });
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          setTypingUsers({});
        }, 1200);
      }
    });

    channel.presence.subscribe((msg) => {
      channel.presence.get((err, members) => {
        const usersCopy = [...users];

        usersCopy.push(...members);
        setUsers(usersCopy);
      });
    });
    return () => {
      channel.detach();
    };
  }, []);
  return { users, typingUsers };
}

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
        <ThemeProvider theme={theme}>
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
              height="100%"
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
                      clientId={clientId}
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
                        getClientId={getClientId}
                        currChannel={currChannel}
                        chatType={chatType}
                        selectUser={selectUser}
                      ></CupSelect>
                    </Box>
                  )}
                </Route>
                <Route path="/chat/individual">
                  {currentUser ? (
                    <Individual
                      useSubscribe={useSubscribe}
                      setChatType={setChatType}
                      clientId={clientId}
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
                        getClientId={getClientId}
                        currChannel={currChannel}
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
