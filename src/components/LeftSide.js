import React from "react";
import groupImg from "../images/groups.jpg";
import groupImg1 from "../images/groups1.jpg";
import userImg6 from "../images/user6.jpg";

import {
  FaHome,
  FaRegClock,
  FaUserFriends,
  FaTags,
  FaUsers,
  FaVideo,
  FaFlag,
  FaRegCalendarAlt,
  FaAngleDown,
  FaShoppingBag
} from "react-icons/fa";
function LeftSide() {
  return (
    <>
      <div className="fixed_left">
        <div className="left_side_scroll">
          <div className="side_box userprofile  d-flex align-items-center">
            <img
              src={userImg6}
              className="post_user_img rounded-circle mr-2 side_profile"
              alt="userImg"
            />
            <h6 className="mb-0">User Name</h6>
          </div>
          <div className="side_box Friends  d-flex align-items-center">
            <FaUserFriends className="mr-2 light_blue" />
            <h6 className="mb-0">Friends</h6>
          </div>
          <div className="side_box Groups  d-flex align-items-center">
            <FaUsers className="mr-2 light_blue" />
            <h6 className="mb-0">Groups</h6>
          </div>
          <div className="side_box Marketplace  d-flex align-items-center">
            <FaHome className="mr-2 light_blue" />
            <h6 className="mb-0">Marketplace</h6>
          </div>
          <div className="side_box Watch  d-flex align-items-center">
            <FaVideo className="mr-2 light_blue" />
            <h6 className="mb-0">Watch</h6>
          </div>
          <div className="side_box Memories  d-flex align-items-center">
            <FaRegClock className="mr-2 light_blue" />
            <h6 className="mb-0">Memories</h6>
          </div>
          <div className="side_box Saved  d-flex align-items-center">
            <FaTags className="mr-2" style={{ color: "#5f6fdb" }} />
            <h6 className="mb-0">Saved</h6>
          </div>
          <div className="side_box Pages  d-flex align-items-center">
            <FaFlag className="mr-2" style={{ color: "#1877f2" }} />
            <h6 className="mb-0">Pages</h6>
          </div>
          <div className="side_box Events  d-flex align-items-center">
            <FaRegCalendarAlt className="mr-2" style={{ color: "#f24f6c" }} />
            <h6 className="mb-0">Events</h6>
          </div>
          <div className="side_box Jobs  d-flex align-items-center">
            <FaShoppingBag className="mr-2" style={{ color: "#e38528" }} />
            <h6 className="mb-0">Jobs</h6>
          </div>
          <div className="side_box See_more  d-flex align-items-center">
            <div className="see_more_icon">
              <FaAngleDown />
            </div>
            <h6 className="mb-0">See more</h6>
          </div>
          <hr />
          <div className="d-flex align-items-center justify-content-between pl-2 short_cut_edit">
            <h6 className="mb-0">Your shortcuts</h6>
            <a className="shortCuts" href="./">
              Edit
            </a>
          </div>
          <div className="side_box  d-flex align-items-center">
            <img src={groupImg} className="groupProfile  mr-2 " alt="userImg" />
            <h6 className="mb-0">Every morning is a new beginning</h6>
          </div>
          <div className="side_box  d-flex align-items-center mt-2">
            <img src={groupImg1} className="groupProfile  mr-2 " alt="userImg" />
            <h6 className="mb-0">Hard workers</h6>
          </div>
          <div className="side_links mt-4">
            <a href="./">Privacy</a>
            <a href="./">Terms</a>
            <a href="./">Advertising</a> <br />
            <a href="./">Ad choices</a>
            <a href="./">Cookies</a>
            <a href="./">More</a>
            <p href="./">Meta © 2021</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftSide;
