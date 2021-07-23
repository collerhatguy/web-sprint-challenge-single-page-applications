import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";
import "./reset.css"

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/pizza">
            <Form />
        </Route>
      </Switch>
    </>
  );
};
export default App;
