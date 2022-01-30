import React from "react";
import { useState } from "react";
import GroupsData from "./GroupsData";
import {
     FaChevronCircleRight,
     FaRegThumbsUp,
     FaComment,
     FaShare,
     FaGlobeAmericas,
     FaEllipsisH,
} from "react-icons/fa";
function Groups(props) {
     const [like, setLike] = useState(false);
     const [share, setshare] = useState(false);
     return (
          <>
               <div className="row no-gutters"  onClick={props.HideAllBoxes}>
                    <div className="col-lg-3 col-md-3 d-md-block d-lg-block d-none">
                    </div>
                    <div className="col-lg-9 col-md-9 col-12">
                         <div className="Post_center group_posts">
                              {GroupsData.map((Group) => {
                                   return (
                                        <div key={Group.id} className="user__posts group_user  mt-3 mb-3 p-2">
                                             <div className="post_header d-flex  justify-content-between">
                                                  <div className="post_details d-flex  align-items-center">
                                                       <img
                                                            src={Group.avatar}
                                                            className="post_user_img rounded-circle mr-4"
                                                            alt="user_img"
                                                       />
                                                       <div className="PostuserName">
                                                            <h5 className="group_names user">{Group.userName} <FaChevronCircleRight className="group_pointer" /> {Group.groupName}   </h5>
                                                            <p>
                                                                 {Group.PostedTime} <FaGlobeAmericas className="ml-2" />
                                                            </p>
                                                       </div>
                                                  </div>
                                                  <div className="post_settings">
                                                       <FaEllipsisH className="mr-3" />
                                                  </div>
                                             </div>
                                             <div className="post_content">
                                                  <p className="mt-2">{Group.postText}</p>
                                                  { //Check if Video url is empty then show image if it is available.
                                                       (Group.postedVideo === '')
                                                            ? <img src={Group.postImg} alt="posted_img" />
                                                            :
                                                            //else show video 
                                                            <video
                                                                 controls
                                                                 autoPlay={true}
                                                                 height="100%"
                                                                 width="100%"
                                                                 src={Group.postedVideo} />
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
          </>
     )
}
export default Groups;