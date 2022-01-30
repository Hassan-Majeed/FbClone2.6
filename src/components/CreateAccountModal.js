import React from "react";
import { FaWindowClose } from "react-icons/fa";
function CreateAccountModal() {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body signUp">
              <div className="d-flex justify-content-between">
                <sapn className="d-block">
                  <h4 className="text-left">
                    <b>Sign Up</b>
                  </h4>
                  <p className="text-left">It's quick and easy.</p>
                </sapn>
                <FaWindowClose data-dismiss="modal" type="button" />
              </div>
              <hr />
              <form action="" method="">
                <div className="row">
                  <div className="col-md-6 pl-0 no_padding_right">
                    <input
                      placeholder="First Name"
                      className="inp_box"
                      type="text"
                    />
                  </div>
                  <div className="col-md-6 pr-0 no_padding_left">
                    <input
                      placeholder="Last Name"
                      type="text"
                      className="inp_box"
                    />
                  </div>
                  <input
                    placeholder="Mobile Number or Email Address"
                    className="inp_box number"
                    type="number"
                  />
                  <input
                    placeholder="New Password"
                    className="inp_box"
                    type="password"
                  />
                </div>
                <label>Date of birth </label>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <select className="select_box" name="cars" id="cars">
                      <option value="">01</option>
                      <option value="">02</option>
                      <option value="">03</option>
                      <option value="">04</option>
                      <option value="">05</option>
                      <option value="">06</option>
                      <option value="">07</option>
                      <option value="">08</option>
                      <option value="">09</option>
                      <option value="">10</option>
                      <option value="">11</option>
                      <option value="">12</option>
                    </select>
                  </div>
                  <div>
                    <select className="select_box" name="cars" id="cars">
                      <option value="">Jan</option>
                      <option value="">02</option>
                      <option value="">03</option>
                      <option value="">04</option>
                      <option value="">05</option>
                      <option value="">06</option>
                      <option value="">07</option>
                      <option value="">08</option>
                      <option value="">09</option>
                      <option value="">10</option>
                      <option value="">11</option>
                      <option value="">12</option>
                    </select>
                  </div>
                  <div>
                    <select className="select_box" name="cars" id="cars">
                      <option value="">2021</option>
                      <option value="">02</option>
                      <option value="">03</option>
                      <option value="">04</option>
                      <option value="">05</option>
                      <option value="">06</option>
                      <option value="">07</option>
                      <option value="">08</option>
                      <option value="">09</option>
                      <option value="">10</option>
                      <option value="">11</option>
                      <option value="">12</option>
                    </select>
                  </div>
                </div>
                <label className="mt-2">Gender </label>
                <div className="d-flex align-items-center">
                  <div className="gender">
                    <h6>Male</h6>
                    <input type="radio" />
                  </div>
                  <div className="gender">
                    <h6>Female</h6>
                    <input type="radio" />
                  </div>
                  <div className="gender">
                    <h6>Custom</h6>
                    <input type="radio" />
                  </div>
                </div>
                <p className="mt-2 details">
                  By clicking Sign Up, you agree to our{" "}
                  <a href="#">Terms, Data Policy </a> and{" "}
                  <a href="#"> Cookie Policy. </a>You may receive SMS
                  notifications from us and can opt out at any time.
                </p>
                <div className="text-center">
                  <button className="signup_btn">Sign Up </button>
                  <div className="mt-3">
                    <a href="./">Already have an account?</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateAccountModal;
