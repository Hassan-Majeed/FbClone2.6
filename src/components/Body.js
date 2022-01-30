import React from "react";
import Stories from "./Stories";
import LeftSide from "./LeftSide";
import Posts from "./Posts";
import RightSide from "./RightSide";

function Body(props) {
  
  return (
    <>
      <div className="body_wrapper" onClick={props.HideAllBoxes}>
        <div className="row">
          <div className="col-xl-3 col-lg-3   pl-4 d-none d-lg-block">
            <LeftSide className="mb-4" />
          </div>
          <div className="col-xl-6 col-lg-5  col-md-12 posts_scroll">
            {/* --------------------- stories Start  -------------------- */}
            <Stories />
            {/*  --------------------- stories End  --------------------- */}
            <Posts />
          </div>
          <div className="col-xl-3 col-lg-4   d-none d-lg-block">
            <RightSide />
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
