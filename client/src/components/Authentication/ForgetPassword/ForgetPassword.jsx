import React from "react";
import "./ForgetPassword.css";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    console.log("Continue button clicked");
    navigate("/otp");
  };
  return (
    <div className="container1">
      <div className="content">
        <div className="formContainer">
          <div className="LoginTitle">
            {" "}
            <h1>Forget Password</h1>{" "}
            <a href="/">
              <img className="LoginLogo" src="/public/logo.png" alt="lock" />
            </a>
          </div>
          <div className="LoginContent">
            <form className="LoginForm">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control FormInput"
                  id="email"
                  placeholder="Enter email"
                />
              </div>
              <div className="Links">
                <div className="form-group">
                  <a href="/login">Sign in</a>
                </div>
                <div className="form-group">
                  <a href="/register">Register</a>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleContinue}
              >
                Send OTP
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
