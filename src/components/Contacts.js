import React from "react";
import {
  FaPhotoVideo,
  FaSearch,
  FaEllipsisH,
  FaPlus,
  FaCog,
  FaWindowClose,
  FaVideo,
  FaMinus,
  FaPlusCircle,
  FaRegImage,
  FaGift,
  FaRegThumbsUp,
  FaSmile
} from "react-icons/fa";
import ContactData from "./ContactData";
import GroupContacts from "./GroupContacts";
import { useState } from 'react';

function Contacts() {
  const [msgState, setmsgState] = useState(false);
  const [grouppmsgState, groupsetmsgState] = useState(false);

  const [name, setUserName] = useState("");
  const [chatAvatar, setchatAvatar] = useState("");

  const [groupUsername, setgroupUsername] = useState("");
  const [groupchatAvatar, setgroupchatAvatar] = useState("");

  const showMessages = (e) => setmsgState(true);
  /**** Getting UserName And avatars In chatbox ****/
  const getUserName = (e) => {
    const key = e.target.getAttribute('data-key');
    ContactData.forEach(data => {
      if (data.id === parseInt(key)) {
        setUserName(data.UserName)
        setchatAvatar(data.UserProfile)
      }
    })
    showMessages()
  }

  const showgroupMessages = (e) => groupsetmsgState(true);
  const getGroupUserName = (e) => {
    const key = e.target.getAttribute('data-key');
    GroupContacts.forEach(data => {
      if (data.id === parseInt(key)) {
        setgroupUsername(data.groupName)
        setgroupchatAvatar(data.avatar)
      }
    })
    showgroupMessages()
  }

  const hidemessage = () => {
    setmsgState(false)
    groupsetmsgState(false)
  }

  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);

  };

  return (
    <>
      <div className="contacts ">
        <div className="cont_details d-flex align-items-center justify-content-between">
          <h5 className="mb-0">Contacts</h5>
          <div className="contact_options d-flex align-items-center justify-content-between">
            <FaPhotoVideo className="mr-3" />
            <FaSearch className="mr-3" />
            <FaEllipsisH className="mr-2" />
          </div>
        </div>
        <div className="contact_list mt-3">
          {ContactData.map((contact) => {
            return (
              <div key={contact.id} id="msg" data-key={contact.id} onClick={getUserName} className="message_box d-flex align-items-center ">
                <img
                  src={contact.UserProfile}
                  className="messege_person rounded-circle mr-3"
                  alt="Message person"
                  data-key={contact.id}
                />
                <h4 className="mb-0" data-key={contact.id}>{contact.UserName}</h4>
              </div>
            );
          })}
        </div>
        <div className="Group_conversation">
          <h4 className="mb-3">Group conversations</h4>
          {GroupContacts.map((groupCont) => {
            return (
              <div key={groupCont.id} onClick={getGroupUserName} data-key={groupCont.id} className="message_box d-flex align-items-center">
                <img
                  src={groupCont.avatar}
                  className="messege_person rounded-circle mr-3"
                  alt="Message person"
                  data-key={groupCont.id}
                />
                <h4 className="mb-0" data-key={groupCont.id}>{groupCont.groupName}</h4>
              </div>
            );
          })}
          <div className="side_box message_box See_more  d-flex align-items-center">
            <div className="see_more_icon">
              <FaPlus />
            </div>
            <h6 className="mb-0">Create New Group </h6>
          </div>
        </div>
      </div>
      {msgState ?
        // If the state of message is true then show messages
        <div className="msg_wrapper">
          <div className={isActive ? "minimize_msg" : "msg_box"}>
            <div className="msg_box_header d-flex justify-content-between align-items-center">
              <div className="User_name d-flex align-items-center">
                <img src={chatAvatar} className="mr-2" style={{ width: "20px", height: "20px", borderRadius: "50%" }} alt="avitar" />
                <h6 className="mb-0">{name}</h6>
              </div>
              <div className="msg_Settings">
                <FaVideo className="mr-2 msg_Settings_icons" />
                <FaCog className="mr-2 msg_Settings_icons" />
                <FaMinus className="mr-2 msg_Settings_icons" onClick={handleToggle} />
                <FaWindowClose className="msg_Settings_icons" onClick={hidemessage} />
              </div>
            </div>
            <div className={isActive ? "d-none" : "msg_screen"}>
              <div
                className=" d-flex  align-items-end"
                style={{ paddingRight: "25px" }}
              >
                <div>
                  <img src={chatAvatar} className="avatars rounded-circle" alt="user_avatar" />
                </div>
                <div>
                  <span className="recieved_msg ml-2 p-2 mb-2">
                    What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                    printing and typesett printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy
                  </span>
                </div>
              </div>
              <span className="sent_msg p-2 mb-2">
                What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                printing and typesett printing and typesetting industry. Lorem Ipsum
                has been the industry's standard dummy
              </span>
            </div>
            <div className="chat_features d-flex justify-content-between align-items-center">
              <div className="chats_icons d-flex align-items-center">
                <FaPlusCircle className="mr-2 msg_Settings_icons" />
                <FaRegImage className="mr-2 msg_Settings_icons" />
                <FaGift className="mr-2 msg_Settings_icons" />
                <FaCog className="msg_Settings_icons" />
              </div>
              <div className="typewritter">
                <textarea type="text" placeholder="Aa" />
                <FaSmile className="emoji msg_Settings_icons" />
              </div>
              <div className="direct_emoji msg_Settings_icons ml-1 mb-2">
                <FaRegThumbsUp />
              </div>
            </div>
          </div>
        </div>
        :
        // Hide it
        null
      }
      {grouppmsgState ?
        // If the state of Group message is true then show messages
        <div className="msg_wrapper">
          <div className={isActive ? "minimize_msg" : "msg_box"}>
            <div className="msg_box_header d-flex justify-content-between align-items-center">
              <div className="User_name d-flex align-items-center">
                <img src={groupchatAvatar} className="mr-2" style={{ width: "20px", height: "20px", borderRadius: "50%" }} alt="avitar" />
                <h6 className="mb-0">{groupUsername}</h6>
              </div>
              <div className="msg_Settings">
                <FaVideo className="mr-2 msg_Settings_icons" />
                <FaCog className="mr-2 msg_Settings_icons" />
                <FaMinus className="mr-2 msg_Settings_icons" onClick={handleToggle} />
                <FaWindowClose className="msg_Settings_icons" onClick={hidemessage} />
              </div>
            </div>
            <div className={isActive ? "d-none" : "msg_screen"}>
              <div
                className=" d-flex  align-items-end"
                style={{ paddingRight: "25px" }}
              >
                <div>
                  <img
                    src={groupchatAvatar}
                    className="avatars rounded-circle"
                    alt="user_avatar"
                  />
                </div>
                <div>
                  <span className="recieved_msg ml-2 p-2 mb-2">
                    What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                    printing and typesett printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy
                  </span>
                </div>
              </div>
              <span className="sent_msg p-2 mb-2">
                What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                printing and typesett printing and typesetting industry. Lorem Ipsum
                has been the industry's standard dummy
              </span>
            </div>
            <div className="chat_features d-flex justify-content-between align-items-center">
              <div className="chats_icons d-flex align-items-center">
                <FaPlusCircle className="mr-2 msg_Settings_icons" />
                <FaRegImage className="mr-2 msg_Settings_icons" />
                <FaGift className="mr-2 msg_Settings_icons" />
                <FaCog className="msg_Settings_icons" />
              </div>
              <div className="typewritter">
                <textarea type="text" placeholder="Aa" />
                <FaSmile className="emoji msg_Settings_icons" />
              </div>
              <div className="direct_emoji msg_Settings_icons ml-1 mb-2">
                <FaRegThumbsUp />
              </div>
            </div>
          </div>
        </div>
        :
        // Hide it 
        null
      }
    </>
  );
}

export default Contacts;
