import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "theme-ui";
import theme from "./theme";

import Home from "./pages/Home";

import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Switch>
            <Route path="/" children={<Home />} />
            {/* <Route path="/:mail-id" children={<Message />} /> */}
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
