import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Requests from './components/Requests';
import Watch from './components/Watch';
import Gaming from './components/Gaming';
import Groups from './components/Groups';

import {
  Switch,
  Route,
} from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Body />
        </Route>
        <Route exact path="/home">
          <Body />
        </Route>
        <Route exact path="/request">
          <Requests />
        </Route>
        <Route exact path="/groups">
          <Groups />
        </Route>
        <Route exact path="/Gaming">
          <Gaming />
        </Route>
        <Route exact path="/watch">
          <Watch />
        </Route>
      </Switch>

    </>
  );
};
export default App;
