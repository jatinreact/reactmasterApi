import React from "react";
import { Form } from "react-bootstrap";
import "./NewsCOmment.css";

const NewsComment = () => {
  return (
    <div>
      <h4>LEAVE A COMMENT</h4>
      <p className="publishpara">Your Email Address will Not be Published</p>
      <Form>
        <div className="row">
          <div className="col-lg-6">
            <div>
              <Form.Label>Your Name</Form.Label>
            </div>
            <div>
              <Form.Control
                type="name"
                placeholder="Enter Name"
                required
              ></Form.Control>
            </div>
          </div>
          <div className="col-lg-6">
            <div>
              <Form.Label>Your Email</Form.Label>
            </div>
            <div>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                required
              ></Form.Control>
            </div>
          </div>
        </div>
        <div>
          <Form.Label>Message</Form.Label>
        </div>
        <div>
          <Form.Control
            as="textarea"
            placeholder="Enter Message..."
            rows={4}
          ></Form.Control>
        </div>
        <button className="submitcomment" type="submit">
          Post Comment
        </button>
      </Form>
    </div>
  );
};

export default NewsComment;