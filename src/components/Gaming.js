import React from "react";
import { useState } from "react";
import GamingData from "./GamingData";
import {
  FaSearch,
  FaBahai,
  FaHome,
  FaRegEye,
  FaUserPlus,
  FaWpexplorer,
  FaSave,
  FaPlayCircle,
  FaRegThumbsUp,
  FaComment,
  FaShare,
  FaGlobeAmericas,
  FaEllipsisH,

} from "react-icons/fa";

function Gaming() {
  const [like, setLike] = useState(false);
  const [share, setshare] = useState(false);
  return (
    <>
      <div className="row">
        <div className="col-lg-3 col-md-3 d-md-block d-lg-block d-none">
          <div className="friend_side_tab">
            <div className="d-flex justify-content-between align-items-center p-2 mb-1">
              <h4>
                <b>Gaming</b>
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
                  <FaSearch style={{ color: "#fff" }} />
                </div>
                <h6 className="mb-0">Search Video</h6>
              </div>
            </div>
            <div className="side_box p-2 friends_sidebox justify-content-between  d-flex align-items-center">
              <div className="d-flex justify-content-between align-items-center">
                <div className="setting_wrapper mr-2 d-flex justify-content-center align-items-center">
                  <FaHome className="light_blue" />
                </div>
                <h6 className="mb-0">Home</h6>
              </div>
            </div>
            <div className="side_box p-2 friends_sidebox justify-content-between  d-flex align-items-center">
              <div className="d-flex justify-content-between align-items-center">
                <div className="setting_wrapper mr-2 d-flex justify-content-center align-items-center">
                  <FaUserPlus className="light_blue" />
                </div>
                <h6 className="mb-0">Live</h6>
              </div>
            </div>
            <div className="side_box p-2 friends_sidebox justify-content-between  d-flex align-items-center">
              <div className="d-flex justify-content-between align-items-center">
                <div className="setting_wrapper mr-2 d-flex justify-content-center align-items-center">
                  <FaRegEye className="light_blue" />
                </div>
                <h6 className="mb-0">Show</h6>
              </div>
            </div>
            <div className="side_box p-2 friends_sidebox justify-content-between  d-flex align-items-center">
              <div className="d-flex justify-content-between align-items-center">
                <div className="setting_wrapper mr-2 d-flex justify-content-center align-items-center">
                  <FaWpexplorer className="light_blue" />
                </div>
                <h6 className="mb-0">Explore</h6>
              </div>
            </div>
            <div className="side_box p-2 friends_sidebox justify-content-between  d-flex align-items-center">
              <div className="d-flex justify-content-between align-items-center">
                <div className="setting_wrapper mr-2 d-flex justify-content-center align-items-center">
                  <FaSave className="light_blue" />
                </div>
                <h6 className="mb-0">Saved Videos</h6>
              </div>
            </div>
            <hr />
            <div className="side_box p-2 friends_sidebox justify-content-between  d-flex align-items-center">
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="mb-0">Your Watch List</h6>
              </div>
              <a href="./app.js">Manage</a>
            </div>
            <div className="side_box p-2 friends_sidebox justify-content-between  d-flex align-items-center">
              <div className="d-flex justify-content-between align-items-center">
                <div className="setting_wrapper mr-2 d-flex justify-content-center align-items-center">
                  <FaPlayCircle className="light_blue" />
                </div>
                <h6 className="mb-0">Latest Videos</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-md-8 col-12">
          <div className="container">
            <div className="Post_center group_posts">
              {GamingData.map((Gaming) => {
                return (
                  <div key={Gaming.id} className="user__posts gamimng_user  mt-3 mb-3 p-2">
                    <div className="post_header d-flex  justify-content-between">
                      <div className="post_details d-flex  align-items-center">
                        <img
                          src={Gaming.avatar}
                          className="post_user_img rounded-circle mr-4"
                          alt="user_img"
                        />
                        <div className="PostuserName">
                          <h5 className="group_names user">{Gaming.userName}  {Gaming.liveStatus}   </h5>
                          <p>
                            {Gaming.PostedTime} <FaGlobeAmericas className="ml-2" />
                          </p>
                        </div>
                      </div>
                      <div className="post_settings">
                        <FaEllipsisH className="mr-3" />
                      </div>
                    </div>
                    <div className="post_content">
                      <p className="mt-2">{Gaming.postText}</p>
                      { //Check if Video url is empty then show image if it is available.
                        (Gaming.postedVideo === '')
                          ? <img src={Gaming.postImg} alt="posted_img" />
                          :
                          //else show video 
                          <video
                            controls
                            autoPlay={true}
                            height="100%"
                            width="100%"
                            src={Gaming.postedVideo} />
                      }
                    </div>
                    <div className="post_operations">
                      <hr className="mt-4 mb-1" />
                      <div className="operations d-flex justify-content-between align-items-center ">
                        <span onClick={() => setLike(!like)}
                          className={like ? "toggled_like_comment_share" : "d-block"}>
                          <div className="like d-flex align-items-center">
                            <FaRegThumbsUp />
                            <h5 className="mb-0 pl-2">Like</h5>
                          </div>
                        </span>
                        <div className="comment d-flex align-items-center">
                          <FaComment />
                          <h5 className="mb-0 pl-2">Comment</h5>
                        </div>
                        <span onClick={() => setshare(!share)}
                          className={share ? "toggled_like_comment_share" : "d-block"}>
                          <div className="share d-flex align-items-center">
                            <FaShare />
                            <h5 className="mb-0 pl-2">Share</h5>
                          </div>
                        </span>
                      </div>
                      <hr className="mt-2 mb-1" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Gaming;