import "./App.scss";

import { ThemeProvider } from "./theme";
import Container from "@material-ui/core/Container";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rc from "./pages/Rc";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log(
      `%c ☁️ air-conditioner %c https://github.com/yuolvv/air-conditioner`,
      "color: white; background: #0078E7; padding:5px 0;",
      "padding:4px;border:1px solid #0078E7;"
    );
    console.log(
      `%c ☁️ @听风行 %c https://air.iyu.pub`,
      "color: white; background: #0078E7; padding:5px 0;",
      "padding:4px;border:1px solid #0078E7;"
    );
  }, []);
  return (
    <ThemeProvider>
      <Container maxWidth="sm">
        <Router>
          <Switch>
            <Route path="/rc">
              <Rc />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
