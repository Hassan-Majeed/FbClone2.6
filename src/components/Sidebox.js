import React from "react";
import {
  FaBahai,
  FaUserFriends,
  FaGift,
  FaChevronRight,
  FaUserPlus,
  FaUserMinus
} from "react-icons/fa";
function Sidebox(props) {
  return <>
    <div className="friend_side_tab">
      <div className="d-flex justify-content-between align-items-center p-2 mb-1">
        <h4>
          <b>Friends</b>
        </h4>
        <div className="friend_settings d-flex justify-content-center align-items-center setting_wrapper">
          <FaBahai className="friend_setting_icon" />
        </div>
      </div>
      <div className="side_box p-2 friends_sidebox justify-content-between  d-flex align-items-center">
        <div className="d-flex justify-content-between align-items-center">
          <div
            style={{ backgroundColor: "#129af6" }}
            className="setting_wrapper  mr-2 d-flex justify-content-center align-items-center"
          >
            <FaUserFriends style={{ color: "#fff" }} />
          </div>
          <h6 className="mb-0">{props.home}</h6>
        </div>
      </div>
      <div className="side_box p-2 friends_sidebox justify-content-between  d-flex align-items-center">
        <div className="d-flex justify-content-between align-items-center">
          <div className="setting_wrapper mr-2 d-flex justify-content-center align-items-center">
            <FaUserPlus className="light_blue" />
          </div>

          <h6 className="mb-0">{props.FriendRequests}</h6>
        </div>
        <FaChevronRight style={{ fontSize: "22px" }} />
      </div>
      <div className="side_box p-2 friends_sidebox justify-content-between  d-flex align-items-center">
        <div className="d-flex justify-content-between align-items-center">
          <div className="setting_wrapper mr-2 d-flex justify-content-center align-items-center">
            <FaUserPlus className="light_blue" />
          </div>
          <h6 className="mb-0">{props.Suggestions}</h6>
        </div>
        <FaChevronRight style={{ fontSize: "22px" }} />
      </div>
      <div className="side_box p-2 friends_sidebox justify-content-between  d-flex align-items-center">
        <div className="d-flex justify-content-between align-items-center">
          <div className="setting_wrapper mr-2 d-flex justify-content-center align-items-center">
            <FaUserMinus className="light_blue" />
          </div>

          <h6 className="mb-0">{props.AllFriends}</h6>
        </div>
        <FaChevronRight style={{ fontSize: "22px" }} />
      </div>
      <div className="side_box p-2 friends_sidebox justify-content-between  d-flex align-items-center">
        <div className="d-flex justify-content-between align-items-center">
          <div className="setting_wrapper mr-2 d-flex justify-content-center align-items-center">
            <FaGift className="light_blue" />
          </div>

          <h6 className="mb-0">{props.Birthdays}</h6>
        </div>
        <FaChevronRight style={{ fontSize: "22px" }} />
      </div>
      <div className="side_box p-2 friends_sidebox justify-content-between  d-flex align-items-center">
        <div className="d-flex justify-content-between align-items-center">
          <div className="setting_wrapper mr-2 d-flex justify-content-center align-items-center">
            <FaUserPlus className="light_blue" />
          </div>

          <h6 className="mb-0">{props.CustomLists}</h6>
        </div>
        <FaChevronRight style={{ fontSize: "22px" }} />
      </div>
    </div>
  </>
}
export default Sidebox;