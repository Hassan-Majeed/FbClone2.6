import React from "react";

function ForgottenPass() {
  return (
    <>
      <div className="fb_nav bg-white d-md-block d-none ">
        <div className="d-md-flex d-block justify-content-between align-items-center" style={{backgroundColor:'white'}}>
          <img
            className="fb_logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLD4FW-JUBsZ73mM7nwfK4CGeXw2XpYbhfMg&usqp=CAU"
            alt="Logo"
          />
          <div className="d-md-flex d-block justify-content-between align-items-center">
            <input
              type="text"
              className="fb_nav_form mr-2 mb-2"
              placeholder="Email or phone"
            />
            <input
              type="text"
              className="fb_nav_form mr-2 mb-2"
              placeholder="Password"
            />
            <button className="btn btn-primary mr-2"> Log In </button>
            <a href="#" className="mr-4">
              Forgotten account?
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="forg_pass bg-white mt-5 mb-5">
          <h4>Find Your Account</h4>
          <hr />
          <p>
            Please enter your email address or mobile number to search for your
            account.
          </p>
          <input
            placeholder="Email address or mobile number"
            className="rec_inp_box"
          />
          <div className="options d-flex justify-content-end mt-3">
            <button className="btn btn-secondary mr-2">
              <b>Cancel</b>
            </button>
            <button className="btn btn-primary">
              <b>Search</b>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgottenPass;
