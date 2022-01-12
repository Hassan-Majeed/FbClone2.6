import {
    FaMoon, FaBahai, FaQuestionCircle
} from "react-icons/fa";
 
const NavSideMenu = () => {
    return (
        <>
            <div className="NavMenu" >
                <div className="d-flex align-items-center  Setting_features" >
                    <div className='sideIconBg d-block mr-2 flex-shrink-0'>
                        <FaBahai />
                    </div>
                    <div className='text-left'>
                        <h6 className="mb-0">Story</h6>
                        <p>Share a photo or writtting something.</p>
                    </div>
                </div>
                <div className="d-flex align-items-center  Setting_features" >
                    <div className='sideIconBg d-block mr-2 flex-shrink-0'>
                        <FaQuestionCircle />
                    </div>
                    <div className='text-left flex-1'>
                        <h6 className="mb-0">Room</h6>
                        <p>Video chat with any one on or off Facebook without any limits.</p>
                    </div>
                </div>
                <hr />
                <div className="d-flex align-items-center  Setting_features" >
                    <div className='sideIconBg d-block mr-2 flex-shrink-0'>
                        <FaMoon />
                    </div>
                    <div className='text-left'>
                        <h6 className="mb-0">Page</h6>
                        <p>Connect And Share with customers or fan.</p>
                    </div>
                </div>
                <div className="d-flex align-items-center  Setting_features" >
                    <div className='sideIconBg d-block mr-2 flex-shrink-0'>
                        <FaBahai />
                    </div>
                    <div className='text-left'>
                        <h6 className="mb-0">Ad</h6>
                        <p className='mb-0'>Advertise your business brands and organization.</p>
                    </div>
                </div>
                <div className="d-flex align-items-center Setting_features" >
                    <div className='sideIconBg d-block mr-2 flex-shrink-0'>
                        <FaQuestionCircle />
                    </div>
                    <div className='text-left'>
                        <h6 className="mb-0">Group</h6>
                        <p className='mb-0'>Connect with people who share your intrests.</p>
                    </div>
                </div>
                <div className="d-flex align-items-center  Setting_features" >
                    <div className='sideIconBg d-block mr-2 flex-shrink-0'>
                        <FaMoon />
                    </div>
                    <div className='text-left'>
                        <h6 className="mb-0">Event</h6>
                        <p className='mb-0'>Bring people together with public r private event.</p>
                    </div>
                </div>
                <div className="d-flex align-items-center  Setting_features" >
                    <div className='sideIconBg d-block mr-2 flex-shrink-0'>
                        <FaMoon />
                    </div>
                    <div className='text-left'>
                        <h6 className="mb-0">MarketPlace Listings</h6>
                        <p className='mb-0'> Sell items to people in your community.</p>
                    </div>
                </div><div className="d-flex align-items-center  Setting_features" >
                    <div className='sideIconBg d-block mr-2 flex-shrink-0'>
                        <FaMoon />
                    </div>
                    <div className='text-left'>
                        <h6 className="mb-0">Jobs</h6>
                        <p className='mb-0'>Post a job and reach nearby applicants for free.</p>
                    </div>
                </div>
            </div>

        </>
    )
}
export default NavSideMenu;