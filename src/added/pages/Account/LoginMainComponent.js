import React, { useState } from "react";
import Login from "./Login";
import Forgotpass from "./Forgotpass";
import { useHistory } from "react-router";
import { Form } from "react-bootstrap";
import "./Login.css";
import axios from "axios";

const LoginMainComponent = (props) => {
  const { check, setCheck } = props;
  const history = useHistory();

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const LoginUser = () => {
    let url = "https://lambhoghini.herokuapp.com/api/v1.1/auth/Login";
    let temp = {
      username,
      password,
    };
    axios
      .post(url, temp)
      .then(
        (res) => {
          history.push("/");
        },

        (error) => {
          console.log("data response error:::", error);
        }
      )
      .catch((e) => {
        console.log("data response error:::", e);
      });
  };

  return (
    <div onSubmit={() => alert("Signed in Successfully")}>
      <label for="email" className="changeFont input-box-length">
        User Name
      </label>
      <input
        type="text"
        value={username}
        onChange={(e) => {
          setusername(e.target.value);
        }}
        className="changeFont"
        placeholder="user"
        required
      />
      <label for="password" className="changeFont input-box-length">
        Password
      </label>
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setpassword(e.target.value);
        }}
        className="changeFont"
        placeholder="Password"
        required
      />
      <p onClick={() => setCheck(1)} className="changeFont">
        Forgot Your Password?
      </p>
      <input
        type="submit"
        value="SIGN IN"
        class="btn btn-primary"
        style={{
          color: "white",
          backgroundColor: "black",
          borderRadius: "155px",
          fontWeight: "20px",
          width: "100px",
          textAlign: "center",
        }}
        onClick={LoginUser}
      />
      <span>or</span>
      <span
        href="#"
        className="return"
        onClick={() => history.push("/products")}
      >
        Return To Store
      </span>
      <br />
      <br />
    </div>
  );
};

export default LoginMainComponent;
