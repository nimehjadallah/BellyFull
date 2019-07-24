import React from "react";
import "./index.css";

function LoginBtns(props) {
    return (
      <div>
        <div className="btnContainer text-center">
          <button className="btn loginBtns signIn" onClick={props.handleSignInClick}>
            Sign In
          </button>
          <button className="btn loginBtns register" onClick={props.handleRegisterClick}>
            Register
          </button>
        </div>
      </div>
    );
  }

export default LoginBtns