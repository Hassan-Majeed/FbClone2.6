import React from "react";
import groupImg2 from "../images/groups2.jpg";
import groupImg3 from "../images/groups3.jpg";
import Contacts from "./Contacts";
function RightSide() {
    return (
        <>
            <div className="fixed_right">
                <div className="Sponsores right_side_scroll ">
                    <h5 className="mt-4 mb-4">Sponsored</h5>
                    <div className="d-flex align-items-center mt-2 mb-2">
                        <img src={groupImg2} className="Spons_img" alt="Sponsored Img" />
                        <div className="Spons_details">
                            <h5 className="mb-0">Lorem ipsum dolor sit amet.</h5>
                            <p className="mb-0">Ipsa similique voluptatum adipisci.</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center mt-2 mb-2">
                        <img src={groupImg3} className="Spons_img" alt="Sponsored Img" />
                        <div className="Spons_details">
                            <h5 className="mb-0">Write Beautiful Code Faster</h5>
                            <p className="mb-0">Excepturi harum maxime necessitatibus voluptate.</p>
                        </div>
                    </div>
                    <hr />
                    <Contacts />
                </div>
            </div>
        </>
    );
}

export default RightSide;