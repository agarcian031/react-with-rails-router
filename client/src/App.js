import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/layout/Home";
import About from "./components/layout/About";
import NoMatch from "./components/layout/NoMatch";
import { Container } from "semantic-ui-react";

const App = () => (
  <Fragment>
    <Container style={{padding: "30px 0"}}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
);

export default App;
