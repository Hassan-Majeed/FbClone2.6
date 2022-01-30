import React from "react";
import FriendRequest from "./FriendRequest";
import KnownPeopleData from "./KnownPeopleData";
import FriendRequestSidebox from "./Sidebox";

function Requests(props) {
  return (
    <>
      <div className="row no-gutters" onClick={props.HideAllBoxes}>
        <div className="col-lg-3 col-md-3 d-md-block d-lg-block d-none">
          <FriendRequestSidebox
            homeIcon="FaBahai"
            home="Home"
            CustomLists="Custom Lists"
            Birthdays="Birthdays"
            AllFriends="All Friends"
            FriendRequests="Friend Requests"
            Suggestions="Suggestions"
          />
        </div>
        <div className="col-lg-9 col-md-9 col-12">
          <div className="requests_wrapper">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6>
                <b>Friend requests</b>
              </h6>
              <h6>
                <a href="./request">See all</a>
              </h6>
            </div>
            <FriendRequest />
          </div>
          <div className="req_you_know p-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6>
                <b>People you may know</b>
              </h6>
              <h6>
                <a href="/request">See all</a>
              </h6>
            </div>
            <div className="row">
              {KnownPeopleData.map((peopleData) => {
                return (
                  <div
                    key={peopleData.id}
                    className="col-lg-3 col-md-6 col-6 mb-2 noPadding"
                  >
                    <div key={peopleData.id} className="request_box">
                      <div className="request_img">
                        <img src={peopleData.friendAvatar} alt="images" />
                      </div>
                      <div className="req_details p-3">
                        <div className="req_name">
                          <h5>{peopleData.friendName}</h5>
                        </div>
                        <div className="mutual_friends_details">
                          <div className="mb-1 d-flex align-items-center">
                            <div className="mutual_imgs">
                              <img
                                className="rounded-circle"
                                src={peopleData.mutualAvatar1}
                                alt="images"
                              />
                              <img
                                className="rounded-circle mutualfriend_img2"
                                src={peopleData.mutualAvatar2}
                                alt="images"
                              />
                            </div>
                            <small className="ml-3"> 30 mutual friends</small>
                          </div>
                          <button className="request_btns add_friend_btn">
                            Add Friend
                          </button>
                          <button className="request_btns delete_btn">
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Requests;
