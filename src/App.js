import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Layout from "./hoc/Layout";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();
  let routes = (
    <AnimatePresence location={location} key={location.key}>
      <Switch>
        <Route path="/work" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Switch>
    </AnimatePresence>
  );
  return (
    <div>
      <Layout>{routes}</Layout>
    </div>
  );
};

export default App;
