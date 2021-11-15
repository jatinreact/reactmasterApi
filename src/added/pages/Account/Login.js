import React from "react";
import PageBanner from "../../../components/commonComponent/PageBanner/PageBanner";
import "./Login.css";
import { Form } from "react-bootstrap";
import Forgotpass from "./Forgotpass";
import LoginMainComponent from "./LoginMainComponent";
import { useState } from "react";

const Login = () => {
  const [check, setCheck] = useState(0);
  return (
    <div className="fulll">
      <PageBanner title="Account" dontShowTitle={true} menu={true} />
      <div style={{ padding: "100px" }}>
        <h2 className="ACC">Account</h2>
        <br />
        <div className="main">
          <div className="toRegister">
            <h3>
              <b>New Customer</b>
            </h3>
            <h7>
              <b>Register Account</b>
            </h7>
            <br />
            <br />
            <p className="changeFont">
              By creating an account you will be able to shop faster, be up to
              date on an order's <br />
              status, and keep track of the orders you have previously made.
            </p>
            <a
              href="register"
              id="button-account"
              class="btn btn-primary"
              style={{
                color: "white",
                backgroundColor: "black",
                textAlign: "center",
                borderRadius: "155px",
              }}
            >
              CONTINUE
            </a>
          </div>
          <div className="loginEntry">
            <h3>Returning Customer</h3>
            <h7 className="changeFont">
              <b>I am a returning Customer</b>
            </h7>
            <br />
            {check == 0 ? (
              <div>
                <LoginMainComponent check={check} setCheck={setCheck} />
              </div>
            ) : (
              <div>
                <Forgotpass check={check} setCheck={setCheck} />
              </div>
            )}
            <h4>Continue as a guest</h4>
            <br />
            <a
              href="/"
              id="button-account"
              class="btn btn-primary"
              style={{
                color: "white",
                backgroundColor: "black",
                borderRadius: "155px",
                fontWeight: "20px",
                height: "40px",
                textAlign: "center",
              }}
            >
              LET'S GO
            </a>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;