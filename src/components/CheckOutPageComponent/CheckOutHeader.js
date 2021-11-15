import React from "react";
import { Breadcrumb, FloatingLabel, Form } from "react-bootstrap";
import style from "./CheckOutPageComponent.module.css";
import { Link, Route } from "react-router-dom";

const CheckOutHeader = () => {
  return (
    <div className="checkout_header container">
      <p className={`${style.logo} d-none d-lg-block`} >LAMBORGHINI</p>
      <div className={style.my_breadcrumb}>
        <Breadcrumb className="align-items-center">
          <Breadcrumb.Item
            className={`${style.my_breadcrumb_item} ${style.frist_child}`}
            href="#"
          >
            Cart
          </Breadcrumb.Item>
          <Breadcrumb.Item className={style.my_breadcrumb_item} href="#">
            Information
          </Breadcrumb.Item>
          <Breadcrumb.Item className={style.my_breadcrumb_item}>
            Shipping
          </Breadcrumb.Item>
          <Breadcrumb.Item className={style.my_breadcrumb_item}>
            Payment
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div>
        <div className="d-flex align-items-center justify-content-between flex-wrap mb-2">
          <p className={`font-roboto fw-200 fs-19 mb-0`}>Contact information</p>
          <p className="font-sans fs-14">
            Already have an account?{" "}
            <Link to="/account/login"><span className="text-sky cursor-ponter mb-0" > Log in</span></Link>
          </p>
        </div>
        <form>
          <FloatingLabel
            className={style.imput_wrapper}
            controlId="emailorMobile"
            label="Email or mobile"
          >
            <Form.Control
              type="text"
              placeholder="Email or mobile phone number"
              autoComplete="off"
              size="sm"
            />
          </FloatingLabel>
          <Form.Check
            className={`mt-2 ${style.imput_wrapper}`}
            type={"checkbox"}
            id={`check-api`}
          >
            <Form.Check.Input
              className="me-2 cursor-ponter"
              type={"checkbox"}
            />
            <Form.Check.Label className="cursor-ponter">
              Email me with news and offers
            </Form.Check.Label>
          </Form.Check>
        </form>
      </div>
    </div>
  );
};

export default CheckOutHeader;
