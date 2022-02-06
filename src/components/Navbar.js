import React from "react";
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
  FaAngleDown,
  FaBars,
} from "react-icons/fa";
import userImg from "../images/user6.jpg";

import { NavLink } from "react-router-dom";
import Notification from "./Notification";
import Settings from "./Setttings";
import InboxNotification from "./InboxNotification";
import NavSideMenu from "./NavSideMenu";
import MobileNotifications from "./MobileNotifications"

const Navbar = (props) => {
  return (
    <>
      <div className="main_nav fixed-top">
        <div className="row">
          <div className="col-lg-3 col-md-2 col-12">
            <div className="d-flex align-items-center jusitify-content-center">
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
          <div className="col-lg-6  col-md-6 col-12 ">
            <div className="d-flex justify-content-between align-items-center menu_box">
              <NavLink activeClassName="active_middle_tabs" exact to="/home">
                <div
                  data-hover="Home"
                  className="mr-2 middletabs home_tab hovertext"
                >
                  <span className="notify">5</span>
                  <FaHome className="middle_icons active_default" />
                </div>
              </NavLink>
              <NavLink activeClassName="active_middle_tabs" exact to="/request">
                <div
                  data-hover="Friends"
                  className="mr-2 middletabs friends_tab hovertext"
                >
                  <span className="notify">1</span>
                  <FaUserFriends className="middle_icons" />
                </div>
              </NavLink>
              <NavLink activeClassName="active_middle_tabs" exact to="/watch">
                <div
                  data-hover="Watch"
                  className="mr-2 middletabs groups_tab hovertext"
                >
                  <span className="notify">2</span>
                  <FaVideo className="middle_icons" />
                </div>
              </NavLink>
              <NavLink activeClassName="active_middle_tabs" exact to="/groups">
                <div
                  data-hover="Groups"
                  className="mr-2 middletabs watch_tab hovertext"
                >
                  <span className="notify">1</span>
                  <FaUsers className="middle_icons" />
                </div>
              </NavLink>
              <NavLink activeClassName="active_middle_tabs" exact to="/Gaming">
                <div
                  data-hover="Gamming"
                  className="mr-2 middletabs gamming_tab hovertext"
                >
                  <span className="notify">15</span>
                  <FaGamepad className="middle_icons" />
                </div>
              </NavLink>
              <NavLink
                activeClassName="active_middle_tabs"
                className="d-lg-none d-md-none d-block"
                exact to="/mobileNotifications"
              >
                <div
                  data-hover="Notifications"
                  className="mr-2 middletabs Menu_tab hovertext"
                >
                   <span className="notify">2</span>
                  <FaBell className="middle_icons" />
                </div>
              </NavLink>
              <NavLink
                activeClassName="active_middle_tabs"
                className="d-lg-none d-md-none d-block"
                exact
                to="/Menu"
              >
                <div
                  data-hover="Menu"
                  className="mr-2 middletabs Menu_tab hovertext"
                >
                  <FaBars className="middle_icons" />
                </div>
              </NavLink>
              
            </div>
          </div>
          <div className="col-lg-3 col-md-4 extra_options ">
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
                <span className="d-block" onClick={props.toggleNavMenu}>
                  <span className="d-block text-center">
                    <FaGripHorizontal className="middle_icons" />
                  </span>
                </span>
                {/* ************** OnClick  InboxNotification Icons Toggle Notifications ************** */}
                {props.NavMenuActive ? <NavSideMenu /> : null}
              </div>
              <div className="mr-1 side_tabs">
                <span className="d-block" onClick={props.toggleInbox}>
                  <span className="d-block text-center">
                    <span className="notify-small">5</span>
                    <FaFacebookMessenger className="middle_icons" />
                  </span>
                </span>
                {/* ************** OnClick  InboxNotification Icons Toggle Notifications ************** */}
                {props.InboxActive ? <InboxNotification /> : null}
              </div>
              <div className="mr-1 side_tabs">
                <span className="d-block" onClick={props.toggleNotification}>
                  <span className="d-block text-center">
                    <span className="notify-small">15</span>
                    <FaBell className="middle_icons" />
                  </span>
                  {/* ************** OnClick  Notification Icons Toggle Notifications ************** */}
                  {props.notificationactive ? <Notification /> : null}
                </span>
              </div>
              <div className="mr-2 side_tabs">
                <span
                  className="text-center d-block"
                  onClick={props.toggleSettings}
                >
                  <FaAngleDown className="middle_icons" />
                  {/* ************** OnClick  Settings DropDown Icons Toggle Notifications ************** */}
                  {props.settingsActive ? <Settings /> : null}
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
