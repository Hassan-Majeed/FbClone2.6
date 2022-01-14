import React, { useState } from "react";
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

  //*********** States Of Toggling Menues In Navbar  *********************

  const [notificationactive, setNotifactive] = useState(false);
  const [settingsActive, SetsettingsActive] = useState(false);
  const [InboxActive, SetInboxActive] = useState(false);
  const [NavMenuActive, SetNavMenuActive] = useState(false);

  //**********************  Function Of Toggling Nav Menu ****************

  function toggleNotification() {
    setNotifactive(!notificationactive);
    SetsettingsActive(false);
    SetInboxActive(false);
    SetNavMenuActive(false);
  }

  function toggleSettings() {
    SetsettingsActive(!settingsActive);
    setNotifactive(false);
    SetInboxActive(false);
    SetNavMenuActive(false);
  }

  function toggleInbox() {
    SetInboxActive(!InboxActive);
    setNotifactive(false);
    SetsettingsActive(false);
    SetNavMenuActive(false);
  }

  function toggleNavMenu() {
    SetNavMenuActive(!NavMenuActive);
    setNotifactive(false);
    SetsettingsActive(false);
    SetInboxActive(false);
  }

  // If User Click On Body all tabs are closed

  function HideAllBoxes() {
    setNotifactive(false);
    SetsettingsActive(false);
    SetInboxActive(false);
    SetNavMenuActive(false);
  }

  return (
    <>

      <Navbar
        notificationactive={notificationactive}
        toggleNotification={toggleNotification}
        settingsActive={settingsActive}
        toggleSettings={toggleSettings}
        InboxActive={InboxActive}
        toggleInbox={toggleInbox}
        NavMenuActive={NavMenuActive}
        toggleNavMenu={toggleNavMenu}
      />
      <Switch>
        <Route exact path="/">
          <Body
            HideAllBoxes={HideAllBoxes}
          />
        </Route>
        <Route exact path="/home">
          <Body
            HideAllBoxes={HideAllBoxes}
          />
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
