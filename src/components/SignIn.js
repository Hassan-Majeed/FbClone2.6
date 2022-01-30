import React from "react";
import CreateAccountModal from "./CreateAccountModal";
function SignIn() {
  return (
    <>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="fb-content">
              <h1 className="fb-name">Facebook</h1>
              <h3>
                Facebook helps you connect and share with the people in your
                life.
              </h3>
            </div>
          </div>
          <div className="col-md-6">
            <div className="Log_in">
              <h4 className="text-center mb-3">Log in to Facebook</h4>
              <input
                className="mb-2"
                placeholder="Email address or phone number"
                type="text"
              />
              <input placeholder="Password" className="mb-2" type="text" />
              <a href="/home" className="mb-2">
                Log In
              </a>
              <div className="text-center mt-2">
                <a href="ForgottenPass">Forgotten password?</a>
                <hr className="mb-4" />
                <button
                  className="main-btns"
                  type="button"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Create New Account
                </button>
                <CreateAccountModal />
              </div>
              <div />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
