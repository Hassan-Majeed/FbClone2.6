import userImg from "../images/user6.jpg";
import {
    FaVideo, FaChevronRight, FaMoon, FaBookOpen, FaBahai, FaQuestionCircle
} from "react-icons/fa";

const Settings = () => {
    return (
        <>
            <div className="Settings" >
                <div className='d-flex align-items-center myProfile'>
                    <img src={userImg} className="rounded-circle" alt="avatar" style={{ width: "55px", height: "55px" }} />
                    <div className='profile_details ml-2'>
                        <h5>Hassan Majeed</h5>
                        <h6>See Your Profile</h6>
                    </div>
                </div>
                <hr />
                <div className="d-flex align-items-center Setting_features" >
                    <div className='sideIconBg d-block'>
                        <FaVideo />
                    </div>
                    <div className='text-left'>
                        <h6 className="mb-0">Giv Feedback</h6>
                        <p className="mb-0" style={{ inlineSize: "max-content" }}>Help Us Impremove The New Facebook</p>
                    </div>
                </div>
                <hr />
                <div className="d-flex align-items-center justify-content-between Setting_features" >
                    <span className='d-flex align-items-center'>
                        <div className='sideIconBg d-block mr-2'>
                            <FaBahai />
                        </div>
                        <div className='text-left' style={{ lineHeight: "1" }}>
                            <h6 className="mb-0">Settings & privacy</h6>
                        </div>
                    </span>
                    <FaChevronRight style={{ fontSize: "22px" }} />
                </div>
                <div className="d-flex align-items-center justify-content-between Setting_features" >
                    <span className='d-flex align-items-center'>
                        <div className='sideIconBg d-block mr-2'>
                            <FaQuestionCircle />
                        </div>
                        <div className='text-left' style={{ lineHeight: "1" }}>
                            <h6 className="mb-0">Helps & support</h6>
                        </div>
                    </span>
                    <FaChevronRight style={{ fontSize: "22px" }} />
                </div>
                <div className="d-flex align-items-center justify-content-between Setting_features" >
                    <span className='d-flex align-items-center'>
                        <div className='sideIconBg d-block mr-2'>
                            <FaMoon />
                        </div>
                        <div className='text-left' style={{ lineHeight: "1" }}>
                            <h6 className="mb-0">Display & accessibility</h6>
                        </div>
                    </span>
                    <FaChevronRight style={{ fontSize: "22px" }} />
                </div>
                <div className="d-flex align-items-center Setting_features" >
                    <div className='sideIconBg d-block mr-2'>
                        <FaBookOpen />
                    </div>
                    <div className='text-left' style={{ lineHeight: "1" }}>
                        <h6 className="mb-0">Log Out</h6>
                    </div>
                </div>
                <div className="text-left privicy_links">
                    <a href="./">Privacy</a>
                    <a href="./">Terms</a>
                    <a href="./">Advertising</a>
                    <a href="./">Ad choices</a>
                    <a href="./">Cookies</a>
                    <a href="./">More</a>
                    <p href="./">Meta © 2021</p>
                </div>
            </div>

        </>
    )
}
export default Settings;