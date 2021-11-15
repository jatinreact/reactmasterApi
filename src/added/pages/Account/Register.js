import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageBanner from "../../../components/commonComponent/PageBanner/PageBanner";
import { useHistory } from "react-router";
import "./Register.css";
import { Form } from "react-bootstrap";

// import axios
import axios from "axios";

const Register = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const history = useHistory();

  const RegisternUser = () => {
    history.push("/user-details");

    let url = "https://lambhoghini.herokuapp.com/api/v1.1/auth";
    let temp = {
      firstname,
      lastname,
      username,
      email,
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
    <div>
      <PageBanner title="Create Account" dontShowTitle={true} menu={true} />
      <div className="formpar">
        <div style={{ padding: "10px 0" }}>
          <fieldset className="form">
            <legend>
              <p style={{ fontFamily: "Oswald" }}>Your Personal Details:</p>
            </legend>
            <hr />
            <div>
              <div className="col-sm-2 boxok">
                <span>
                  <label for="fname">
                    <span className="redStar">*</span>First name
                  </label>
                </span>
              </div>
              <div className="col-sm-10 boxok">
                <input
                  value={firstname}
                  onChange={(e) => {
                    setfirstname(e.target.value);
                  }}
                  type="text"
                  className="ip"
                  id="fname"
                  name="fname"
                  placeholder="First Name"
                  required
                />
              </div>
            </div>
            <div>
              <div className="col-sm-2 boxok">
                <label for="fname">
                  <span className="redStar">*</span>Last name
                </label>
              </div>
              <div className="col-sm-10 boxok">
                <input
                  value={lastname}
                  onChange={(e) => {
                    setlastname(e.target.value);
                  }}
                  type="text"
                  className="ip"
                  id="lname"
                  name="lname"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>

            <div>
              <div className="col-sm-2 boxok">
                <label for="fname">
                  <span className="redStar">*</span>User name
                </label>
              </div>
              <div className="col-sm-10 boxok">
                <input
                  value={username}
                  onChange={(e) => {
                    setusername(e.target.value);
                  }}
                  type="text"
                  className="ip"
                  id="lname"
                  name="lname"
                  placeholder="User Name"
                  required
                />
              </div>
            </div>

            <div>
              <div className="col-sm-2 boxok">
                <label for="fname">
                  <span className="redStar">*</span>E-mail
                </label>
              </div>
              <div className="col-sm-10 boxok">
                <input
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  type="email"
                  className="ip"
                  id="email"
                  name="email"
                  placeholder="E-mail"
                  required
                />
              </div>
            </div>
            <div>
              <div className="col-sm-2 boxok">
                <label for="fname">
                  <span className="redStar">*</span>Password
                </label>
              </div>
              <div className="col-sm-10 boxok">
                <input
                  value={password}
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                  type="password"
                  className="ip"
                  id="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
            </div>
          </fieldset>
          <div style={{ padding: "40px" }}>
            <button
              name="submitcreate"
              id="button-account"
              type="submit"
              className="btnreg"
              onClick={RegisternUser}
            >
              <span>
                <i
                  class="fa fa-user left"
                  style={{
                    color: "white",
                    weight: "200px",
                    paddingRight: "10px",
                  }}
                ></i>
                Create
              </span>
            </button>
            <span>or</span>
            <span
              href="#"
              className="return"
              onClick={() => history.push("/products")}
            >
              Return To Store
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
