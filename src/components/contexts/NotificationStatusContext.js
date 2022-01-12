// import React, { createContext, useContext, useState } from 'react'
// import { propTypes } from 'react-bootstrap/esm/Image';
// export const NotificationStatusContext = createContext();
// export const NotificationStatusContext = props => {
//     const [notifShown, setNotifShown] = useState();
//     const [notificationactive, setNotifactive] = useState(false);
//     const [settingsActive, SetsettingsActive] = useState(false);
//     const [InboxActive, SetInboxActive] = useState(false);
//     const [NavMenuActive, SetNavMenuActive] = useState(false);

//     function toggleNotification() {
//         setNotifactive(!notificationactive);
//     }
//     function toggleSettings() {
//         SetsettingsActive(!settingsActive);
//     }
//     function toggleInbox() {
//         SetInboxActive(!InboxActive);
//     }
//     function toggleNavMenu() {
//         SetNavMenuActive(!NavMenuActive);
//     }
//     return (

//         <>
//             <NotificationStatusContext.Provider>
//                 {props.children}
//             </NotificationStatusContext.Provider>

//         </>
//     )
// }
