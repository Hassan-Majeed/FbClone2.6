import {
    FaSearch, FaRegSun, FaVideo, FaEdit, FaCompress
} from "react-icons/fa";
import InboxData from './InboxData';
const InboxNotification = () => {
    return (
        <>
            <div className="inbox" >
                <div className="d-flex justify-content-between align-items-center p-2">
                    <h4><b>Messenger</b></h4>
                    <div className='d-flex justify-content-between align-items-center'>
                        <FaRegSun className='mr-2' />
                        <FaVideo className='mr-2' />
                        <FaCompress className='mr-2' />
                        <FaEdit className='mr-2' />
                    </div>
                </div>
                <div className='searchMessage mb-2'>
                    <FaSearch className='search_messenger' />
                    <input type="text" placeholder='Search Messenger' />
                </div>
                {
                    InboxData.map((messenger) => {
                        return (
                            <>
                                <div className="d-flex align-items-center hoverEffect" >
                                    <img className="rounded-circle mr-2" src={messenger.avatar} alt="profile" style={{ width: "50px", height: "50px" }} />
                                    <div className="notificationDetails">
                                        <p className="mb-0"><b>{messenger.UserName}</b></p>
                                        <p className="mb-0">{messenger.message}</p>
                                        <p>{messenger.notificationTime}</p>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}
export default InboxNotification;