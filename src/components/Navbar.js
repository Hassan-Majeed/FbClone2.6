import React, { useState } from "react";
import {
  FaFacebook,
  FaSearch,
  FaHome,
  FaUserFriends,
  FaGripHorizontal,
  FaUsers,
  FaVideo,
  FaGamepad,
  FaFacebookMessenger,
  FaBell,
  FaAngleDown
} from "react-icons/fa";
import userImg from "../images/user6.jpg";

import {
  NavLink,
} from "react-router-dom";
import Notification from './Notification';
import Settings from "./Setttings";
import InboxNotification from './InboxNotification';
import NavSideMenu from "./NavSideMenu";
const Navbar = () => {
  const [notificationactive, setNotifactive] = useState(false);
  const [settingsActive, SetsettingsActive] = useState(false);
  const [InboxActive, SetInboxActive] = useState(false);
  const [NavMenuActive, SetNavMenuActive] = useState(false);

  function toggleNotification() {
    if (!notificationactive) setNotifactive(true);
    else setNotifactive(false);
  }
  function toggleSettings() {
    if (!settingsActive) SetsettingsActive(true);
    else SetsettingsActive(false);
  }
  function toggleInbox() {
    if (!InboxActive) SetInboxActive(true);
    else SetInboxActive(false);
  }
  function toggleNavMenu() {
    if (!NavMenuActive) SetNavMenuActive(true);
    else SetNavMenuActive(false);
  }
  return (
    <>
      <div className="main_nav fixed-top">
        <div className="row">
          <div className="col-lg-3 col-md-2 col-12">
            <div className="d-flex align-items-center ml-4 mr-4">
              <div className="fb_icon mr-2">
                <FaFacebook className="fbicon" />
              </div>
              <div className="searchBox">
                <FaSearch className="search_icon" />
                <input
                  className="fb_search"
                  type="text"
                  placeholder="Search Facebook"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6  col-md-5 col-12 ">
            <div className="d-flex justify-content-between align-items-center menu_box">
              <NavLink activeClassName="active_middle_tabs" exact to="/">
                <div data-hover="Home" className="mr-2 middletabs home_tab hovertext">
                  <span className="notify">5</span>
                  <FaHome className="middle_icons active_default" />
                </div>
              </NavLink >
              <NavLink activeClassName="active_middle_tabs" exact to="/request">
                <div data-hover="Friends" className="mr-2 middletabs friends_tab hovertext">
                  <span className="notify">1</span>
                  <FaUserFriends className="middle_icons" />
                </div>
              </NavLink  >
              <NavLink activeClassName="active_middle_tabs" exact to="/watch">
                <div data-hover="Watch" className="mr-2 middletabs groups_tab hovertext">
                  <span className="notify">2</span>
                  <FaVideo className="middle_icons" />
                </div>
              </ NavLink >
              <NavLink activeClassName="active_middle_tabs" exact to="/groups">
                <div data-hover="Groups" className="mr-2 middletabs watch_tab hovertext">
                  <span className="notify">1</span>
                  <FaUsers className="middle_icons" />
                </div>
              </NavLink >
              <NavLink activeClassName="active_middle_tabs" exact to="/Gaming" >
                <div data-hover="Gamming" className="mr-2 middletabs gamming_tab hovertext">
                  <span className="notify">15</span>
                  <FaGamepad className="middle_icons" />
                </div>
              </NavLink >
            </div>
          </div>
          <div className="col-lg-3 col-md-5 extra_options ">
            <div className="d-flex justify-content-end align-items-center pt-1">
              <div className="mr-2  d-flex align-items-center justify-content-between ">
                <img
                  src={userImg}
                  className="user_img rounded-circle mr-2"
                  alt="user_img"
                />
                <h6 className="mt-2">Hassan</h6>
              </div>
              <div className="mr-1 side_tabs text-center">
                <span className="d-block" onClick={toggleNavMenu} >
                  <span className="d-block text-center">
                    <FaGripHorizontal className="middle_icons" />
                  </span>
                </span>
                {/* ************** OnClick  InboxNotification Icons Toggle Notifications ************** */}
                {NavMenuActive ? <NavSideMenu /> : null}
              </div>
              <div className="mr-1 side_tabs">
                <span className="d-block" onClick={toggleInbox} >
                  <span className="d-block text-center">
                    <span className="notify-small">5</span>
                    <FaFacebookMessenger className="middle_icons" />
                  </span>
                </span>
                {/* ************** OnClick  InboxNotification Icons Toggle Notifications ************** */}
                {InboxActive ? <InboxNotification /> : null}
              </div>
              <div className="mr-1 side_tabs" >
                <span className="d-block" onClick={toggleNotification} >
                  <span className="d-block text-center">
                    <span className="notify-small">15</span>
                    <FaBell className="middle_icons" />
                  </span>
                  {/* ************** OnClick  Notification Icons Toggle Notifications ************** */}
                  {notificationactive ? <Notification /> : null}
                </span>
              </div>
              <div className="mr-2 side_tabs">
                <span className="text-center d-block" onClick={toggleSettings} >
                  <FaAngleDown className="middle_icons" />
                  {/* ************** OnClick  Settings DropDown Icons Toggle Notifications ************** */}
                  {settingsActive ? <Settings /> : null}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
