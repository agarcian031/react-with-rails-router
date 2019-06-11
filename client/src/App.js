import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/layout/Home";
import About from "./components/layout/About";
import NoMatch from "./components/layout/NoMatch";
import Navbar from './components/layout/Navbar';
import ProductsForm from './components/ProductsForm'
import ProductView from './components/ProductView'
import Products from './components/Products';
import { Container } from "semantic-ui-react";

const App = () => (
  <Fragment>
    <Navbar />
    <Container style={{padding: "30px 0"}}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/new" component={ProductsForm} />
        <Route exact path="/products/:id" component={ProductView} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
);

export default App;
