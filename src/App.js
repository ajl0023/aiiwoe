import React from "react";
import Home from "./components/Home/Home";
import Chat from "./components/Chat/Chat";
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
const useStyles = makeStyles((theme) => ({
  container: {
    width: "100vw",
    height: "100vh",
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
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
  const classes = useStyles();
  let theme = createTheme({
    typography: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
    },
  });
  theme = responsiveFontSizes(theme);
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
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
        <Router>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {
              <>
                <Switch>
                  <Route exact path="/">
                    <Home></Home>
                  </Route>
                  <Route path="/chat">
                    <Chat></Chat>
                  </Route>
                </Switch>
              </>
            }
          </ThemeProvider>
        </Router>
      </Box>
    </Box>
  );
};

export default App;
