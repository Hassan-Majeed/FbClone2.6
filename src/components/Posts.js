import React from "react";

import userImg6 from "../images/user6.jpg";
import PostData from "./PostData";
import Postmodal from "./Postmodal";
import Room from "./Room";
import { useState } from "react";
import {
  FaPhotoVideo,
  FaVideo,
  FaMehRollingEyes,
  FaRegThumbsUp,
  FaComment,
  FaShare,
  FaGlobeAmericas,
  FaEllipsisH
} from "react-icons/fa";
function Posts() {
  const [like, setLike] = useState(false);
  const [share, setshare] = useState(false);

  return (
    <>
      <div className="Post_center">
        <div className="createposts mt-4 mb-3">
          <div className="d-flex justify-content-center align-items-center">
            <img
              src={userImg6}
              className="post_user_img rounded-circle mr-4"
              alt="user_Img"
            />
            <input
              type="text"
              data-toggle="modal"
              data-target="#exampleModalLong"
              placeholder="Whats On Your Mind?"
              className="type_post"
            />
            <Postmodal />
          </div>
          <hr />
          <div className="more_options d-flex justify-content-between align-items-center">
            <div className="Livevideo">
              <span className="d-flex justify-content-between align-items-center">
                <FaVideo className="mr-1 extra_opt_icons" />
                <h6>Live video</h6>
              </span>
            </div>
            <div className="Photo_Video">
              <span className="d-flex justify-content-between align-items-center">
                <FaPhotoVideo className="mr-1 extra_opt_icons" />
                <h6>Photo/Video</h6>
              </span>
            </div>
            <div className="Feeling_Activity">
              <span className="d-flex justify-content-between align-items-center">
                <FaMehRollingEyes className="mr-1 extra_opt_icons" />
                <h6>Feeling/Activity</h6>
              </span>
            </div>
          </div>
        </div>

        {/*------------------------------------------- Room Start -------------------------------------------*/}
        <Room />
        {/*------------------------------------------- Room End -------------------------------------------*/}

        {/*------------------------------------------- postsStart -------------------------------------------*/}
        {PostData.map((posts) => {
          return (
            <div key={posts.id} className="user_posts mt-3 mb-3 p-2">
              <div className="post_header d-flex  justify-content-between">
                <div className="post_details d-flex  align-items-center">
                  <img
                    src={posts.avatar}
                    className="post_user_img rounded-circle mr-4"
                    alt="user_img"
                  />
                  <div className="PostuserName">
                    <h5 className="user">{posts.userName}</h5>
                    <p>
                      {posts.PostedTime} <FaGlobeAmericas className="ml-2" />
                    </p>
                  </div>
                </div>
                <div className="post_settings">
                  <FaEllipsisH className="mr-3" />
                </div>
              </div>
              <div className="post_content">
                <p className="mt-2">{posts.postText}</p>
                { //Check if Video url is empty then show image if it is available.
                  (posts.postedVideo === '')
                    ? <img src={posts.postImg} alt="posted_img" />
                    :
                    //else show video 
                    <video
                      controls
                      autoPlay={true}
                      height="100%"
                      width="100%"
                      src={posts.postedVideo} />
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
        {/*------------------------------------------- postsEnds -------------------------------------------*/}

      </div>
    </>
  );
}

export default Posts;
