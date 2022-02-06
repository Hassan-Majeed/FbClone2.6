import React from "react";
import {
  FaSearch,
  FaCog,
  FaChevronCircleDown,
  FaHome,
  FaHeartbeat,
  FaRegClock,
  FaRegHandshake,
  FaGamepad,
  FaUsers,
  FaVideo,
  FaFlag,
  FaRegCalendarAlt,
  FaQuestionCircle,
  FaAngleDown,
  FaCircle,
  FaEllipsisH
} from "react-icons/fa";
import suggestedContent from "../images/iphone.jfif";
import userImg from "../images/user6.jpg";

function Menu() {
  return (
    <>
      <div className="menu_wrapper p-2">
        <div className="d-flex justify-content-between align-items-center mt-1 mb-2">
          <h5 className="mb-0">Menu</h5>
          <div className="d-flex align-items-center">
            <span className="d-block mr-2">
              <FaCog className="light_blue" />
            </span>
            <span className="d-block">
              <FaSearch className="light_blue" />
            </span>
          </div>
        </div>
        <div className="your-profile mt-4 mb-4">
          <div className="d-flex align-items-center">
            <img
              src={userImg}
              alt="avatar"
              className="mr-2  my-avatar rounded-circle"
            />
            <div>
              <h4 className="mb-0">Hassan Majeed</h4>
              <p className="mb-0">See Your Profile</p>
            </div>
          </div>
        </div>
        <div className="suggested-content shadow position-relative rounded mb-1 bg-wite p-2">
          <span className="content-opt1 position-absolute   d-flex justify-content-center align-items-center">
            <FaEllipsisH />
          </span>
          <img
            src={suggestedContent}
            alt="avatar"
            className="mr-1 rounded img-fluid"
            className="light_blue"
          />
          <span className="content-opt2  position-absolute   d-flex justify-content-center align-items-center">
            <FaHome className="light_blue" />
          </span>
          <div className="suggestion-details mt-3">
            <p className="mb-0">Suggested For You</p>
            <h6 className="mb-0">
              <b>Iphone</b>
            </h6>
            <p className="mb-0">Listed on friday in Dubai</p>
          </div>
        </div>
        <div className="navigated-tabs d-flex align-items-center bg-wite shadow">
          <span className="d-block mr-2">
            <FaSearch className="light_blue" />
          </span>
          <span className="d-block">
            <h6 className="mb-0">
              <b>Find Friends</b>
            </h6>
          </span>
        </div>
        <div className="navigated-tabs d-flex align-items-center bg-wite shadow">
          <span className="d-block mr-2">
            <FaVideo className="light_blue" />
          </span>
          <span className="d-block">
            <h6 className="mb-0">
              <b>Videos on Watch</b>
            </h6>
            <p className="mb-0">
              <FaCircle className="mr-1 text-danger" /> 9 new videos
            </p>
          </span>
        </div>
        <div className="navigated-tabs d-flex align-items-center bg-wite shadow">
          <span className="d-block mr-2">
            <FaHeartbeat className="light_blue" />
          </span>
          <span className="d-block">
            <h6 className="mb-0">
              <b>Covid 19 Information Center</b>
            </h6>
          </span>
        </div>
        <div className="navigated-tabs d-flex align-items-center bg-wite shadow">
          <span className="d-block mr-2">
            <FaUsers className="light_blue" />
          </span>
          <span className="d-block">
            <h6 className="mb-0">
              <b>Groups</b>
            </h6>
          </span>
        </div>
        <div className="navigated-tabs d-flex align-items-center bg-wite shadow">
          <span className="d-block mr-2">
            <FaHome className="light_blue" />
          </span>
          <span className="d-block">
            <h6 className="mb-0">
              <b>Marketplace</b>
            </h6>
          </span>
        </div>
        <div className="navigated-tabs d-flex align-items-center bg-wite shadow">
          <span className="d-block mr-2">
            <FaRegClock className="light_blue" />
          </span>
          <span className="d-block">
            <h6 className="mb-0">
              <b>Memories</b>
            </h6>
            <p className="mb-0">1 on This Day</p>
          </span>
        </div>
        <div className="navigated-tabs d-flex align-items-center bg-wite shadow">
          <span className="d-block mr-2">
            <FaFlag className="light_blue" />
          </span>
          <span className="d-block">
            <h6 className="mb-0">
              <b>Pages</b>
            </h6>
          </span>
        </div>
        <div className="navigated-tabs d-flex align-items-center bg-wite shadow">
          <span className="d-block mr-2">
            <FaRegCalendarAlt className="light_blue" />
          </span>
          <span className="d-block">
            <h6 className="mb-0">
              <b>Events</b>
            </h6>
          </span>
        </div>
        <div className="navigated-tabs d-flex align-items-center bg-wite shadow">
          <span className="d-block mr-2">
            <FaGamepad className="light_blue" />
          </span>
          <span className="d-block">
            <h6 className="mb-0">
              <b>Gamming</b>
            </h6>
            <p className="mb-0">
              {" "}
              <FaCircle className="mr-1 text-danger" /> 2 new
            </p>
          </span>
        </div>
        <button className="see_more_req mt-3 mb-3">
          See more <FaChevronCircleDown className="light_blue" />
        </button>
      </div>
      <div className="d-flex align-items-center justify-content-between bg-wite shadow p-4 border-top border-bottom">
        <span className="d-block">
          <FaRegHandshake className="light_blue" />
        </span>
        <span className="d-block">
          <h6 className="mb-0">
            <b>Community resources</b>
          </h6>
        </span>
        <span className="d-block">
          <FaAngleDown className="light_blue" />
        </span>
      </div>
      <div className="d-flex align-items-center justify-content-between bg-wite shadow p-4 border-top border-bottom">
        <span className="d-block">
          <FaQuestionCircle className="light_blue" />
        </span>
        <span className="d-block">
          <h6 className="mb-0">
            <b>Help & Support</b>
          </h6>
        </span>
        <span className="d-block">
          <FaAngleDown className="light_blue" />
        </span>
      </div>
      <div className="d-flex align-items-center justify-content-between bg-wite shadow p-4 border-top border-bottom">
        <span className="d-block">
          <FaCog className="light_blue" />
        </span>
        <span className="d-block">
          <h6 className="mb-0">
            <b>Setings & Privacy</b>
          </h6>
        </span>
        <span className="d-block">
          <FaAngleDown className="light_blue" />
        </span>
      </div>

      <a href="/" className="logout w-100 text-center">
        Logout
      </a>
    </>
  );
}
export default Menu;
