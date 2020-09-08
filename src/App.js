import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Layout from "./hoc/Layout";

const App = () => {
  let routes = (
    <Switch>
      <Route path="/work" component={Projects} />
      <Route path="/about" component={About} />
      <Route path="/" component={Home} />
    </Switch>
  );
  return (
    <div>
      <Layout>{routes}</Layout>
    </div>
  );
};

export default App;
