import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Layout from "./hoc/Layout";

const App = () => {
  let routes = <Route path="/" component={Home} />;
  return (
    <div>
      <Layout>{routes}</Layout>
    </div>
  );
};

export default App;
