import React from "react";
import { FaChevronCircleDown } from "react-icons/fa";
import FriendRequestData from "./FriendRequestData";
function FriendRequest() {
  return (
    <>
      <div className="row ">
        {FriendRequestData.map((requests) => {
          return (
            <div key={requests.id} className="col-lg-3 col-md-6 col-6 mb-2 noPadding">
              <div className="request_box">
                <div className="request_img">
                  <img src={requests.friendAvatar} alt="" />
                </div>
                <div className="req_details p-3">
                  <div className="req_name">
                    <h5>{requests.friendName}</h5>
                  </div>
                  <div className="mutual_friends_details">
                    <div className="mb-1 d-flex align-items-center">
                      <div className="mutual_imgs">
                        <img
                          className="rounded-circle"
                          src={requests.mutualAvatar1}
                          alt="images"
                        />
                        <img
                          className="rounded-circle mutualfriend_img2"
                          src={requests.mutualAvatar2}
                          alt="images"
                        />
                      </div>
                      <small className="ml-3">{requests.mutualFriends}</small>
                    </div>
                    <button className="request_btns">Confirm</button>
                    <button className="request_btns delete_btn">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button className="see_more_req mt-3 mb-3">
        See More <FaChevronCircleDown />
      </button>
    </>
  );
}

export default FriendRequest;
