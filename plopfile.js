module.exports = function (plop) {
  // controller generator

  const template = `import { Box, Container } from "@material-ui/core";
import React, { useState } from "react";
import {
  makeStyles,
  ThemeProvider,
  withStyles,
} from "@material-ui/core/styles";
import { getSocket } from "../../socketInstance";

import ChatBox from "../ChatBox/ChatBox";
import ChatTable from "../ChatTable/ChatTable";
import CupSelect from "../CupSelect/CupSelect";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  chatTable: {
    borderRadius: "50%",
    width: "200px",
    height: "200px",
    background: "red",
  },
}));
const {{name}} = () => {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    getSocket.emit("join", "test");
  }, []);
  const classes = useStyles();
  const selectUser = (user) => {
    setCurrentUser(user);
  };
  return (
    <>
      {currentUser ? (
        <Container maxWidth="xl">
          <Box
            width="100%"
            height="100%"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <>
              <ChatTable></ChatTable>
              <ChatBox></ChatBox>
            </>
          </Box>
        </Container>
      ) : (
        <CupSelect selectUser={selectUser} />
      )}
      ;
    </>
  );
};

export default {{name}};
`;
  plop.setGenerator("controller", {
    description: "application controller logic",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "controller name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/Group/{{name}}/{{name}}.js",
        template: template,
      },
    ],
  });
};
