import notificationData from "./notificationData";
import { FaRegSun } from "react-icons/fa";
const mobileNotifications = () => {
  return (
    <>
      <div className="notifications w-100 h-auto mt-5 rounded-0 overflow-hidden">
        <div className="d-flex justify-content-between align-items-center p-2   pb-4">
          <h4>Notifications</h4>
          <FaRegSun />
        </div>
         
        <div className="d-flex justify-content-between align-items-center p-2">
          <h4>New</h4>
          <a href="./MobileNotifications">See All</a>
        </div>
        {notificationData.map((notif) => {
          return (
            <div
              key={notif.id}
              className="d-flex justify-content-between align-items-center hoverEffect"
            >
              <img
                className="rounded-circle mr-2"
                src={notif.avatar}
                alt="profile"
                style={{ width: "50px", height: "50px" }}
              />
              <div className="notificationDetails">
                <p className="mb-0">
                  <b>{notif.UserName}</b> {notif.notificationDetails}
                </p>
                <p className="notify_time mb-0">{notif.notificationTime}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default mobileNotifications;
