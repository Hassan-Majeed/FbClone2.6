import React from "react";
import { FaSmile, FaImages, FaUserTag, FaMicrophoneAlt, FaMapMarkerAlt, FaEllipsisH } from "react-icons/fa";

function Postmodal() {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModalLong"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content p-2">
            <div>
              <h4 className="text-center mb-0 mt-1">Create Post</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="d-flex align-items-center">
              <img src="https://media.istockphoto.com/photos/young-caucasian-man-work-on-laptop-making-notes-picture-id1276837755?b=1&k=20&m=1276837755&s=170667a&w=0&h=AbUQZjTmPLO7FFV3aRPJNUfU7qkuDgZyxO3wrdk4XdM=" className="my_avitar" alt="Avitar" />
              <div className="user_details">
                <h6><b>Hassan Majeed</b></h6>
                <select className="selectpicker">
                  <option value="fa-align-left">&#xf2bd;  Friends</option>
                  <option value="fa-align-right">&#xf038;  Only You</option>
                  <option value="fa-leanpub">&#xf212; Public</option>
                </select>
              </div>
            </div>
            <div className="modal-body">
              <textarea placeholder="What's on your mind ?" rows={5}></textarea>
            </div>
            <div className="d-flex justify-content-between align-items-center p-4">
              <input type="color" className="input_color" />
              <FaSmile style={{ fontSize: "25px", color: "#94999f" }} />
            </div>
            <div className="modalfooter d-flex justify-content-between align-items-center">
              <div>
                <h6 className="mb-0">Add To Your Post</h6>
              </div>
              <div>
                <FaImages className="mr-2" style={{ fontSize: "25px", color: "#45bd62" }} />
                <FaUserTag className="mr-2" style={{ fontSize: "25px", color: "#1877f2" }} />
                <FaSmile className="mr-2" style={{ fontSize: "25px", color: "#f7b928" }} />
                <FaMapMarkerAlt className="mr-2" style={{ fontSize: "25px", color: "#f02849" }} />
                <FaMicrophoneAlt className="mr-2" style={{ fontSize: "25px", color: "#606770" }} />
                <FaEllipsisH />
              </div>
            </div>
            <button className="post"><b>Post</b></button>
          </div>
        </div>
        {/* Modal End */}
      </div>
    </>
  );
}

export default Postmodal;
