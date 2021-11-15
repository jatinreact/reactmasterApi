import React from "react";
import Login from "./Login";
import { useHistory } from "react-router";
import { Form } from "react-bootstrap";

const Forgotpass = (props) => {
  const { check, setCheck } = props;
  return (
    <div>
      <br />
      <h4>Reset Your Password</h4>
      <p className="changeFont">
        We will send you an email to reset your password
      </p>
      <Form.Label for="email" className="input-box-length">
        Email
      </Form.Label>
      <Form.Control
        type="email"
        className="email"
        placeholder="E-mail"
        required
      />
      <input
        type="submit"
        value="SUBMIT"
        class="btn btn-primary"
        style={{
          color: "white",
          backgroundColor: "black",
          borderRadius: "155px",
          fontWeight: "20px",
          width: "100px",
          textAlign: "center",
        }}
      />
      <span>or</span>&nbsp;
      <span onClick={() => setCheck(0)}>Cancel</span>
    </div>
  );
};

export default Forgotpass;