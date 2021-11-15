import React from "react";

import { Form, FloatingLabel, Row, Col, Button } from "react-bootstrap";
import style from "./CheckOutPageComponent.module.css";
import { useForm } from "react-hook-form";

const ChcekOutForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const countryName = ["Albania", "Bangladesh", "India"];

  const onSubmit = (data) => console.log(data);
  return (
    <div className="container mt-4 mb-5 pt-3">
        <p className={`font-roboto fw-200 fs-19`}>Shipping address</p>
      <Form noValidate onSubmit={handleSubmit(onSubmit)}>
        {/* <Row className="mb-3"> */}
        <Row>
          {/* frist name input box */}
          <Form.Group as={Col} lg="6" className="mb-4">
            <FloatingLabel
              className={style.imput_wrapper}
              label="First name (optional)"
            >
              <Form.Control
                type="text"
                placeholder="First name (optional)"
                autoComplete="off"
                size="sm"
                {...register("firstName")}
              />
            </FloatingLabel>
          </Form.Group>

          {/* last name input box */}
          <Form.Group as={Col} lg="6" className="mb-4">
            <FloatingLabel className={style.imput_wrapper} label="Last name">
              <Form.Control
                type="text"
                placeholder="Last name"
                autoComplete="off"
                size="sm"
                {...register("lastName", {
                  required: true,
                  minLength: {
                    value: 3,
                  },
                  validate: (value) => {
                    return !!value.trim();
                  },
                })}
                isInvalid={errors.lastName}
              />
              <Form.Control.Feedback type="invalid" >
                Enter a last name
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>

          {/* Email Address Input Box */}
          <Form.Group as={Col} lg="12" className="mb-4">
            <FloatingLabel className={style.imput_wrapper} label="Address">
              <Form.Control
                type="text"
                placeholder="Address"
                autoComplete="off"
                size="sm"
                {...register("address", {
                  required: true,
                  pattern:
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                })}
                isInvalid={errors.address}
              />
              <Form.Control.Feedback type="invalid">
                Enter your address
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>

          {/* Apartment input box */}
          <Form.Group as={Col} lg="12" className="mb-4">
            <FloatingLabel
              className={style.imput_wrapper}
              label="Apartment, suite, etc. (optional)"
            >
              <Form.Control
                type="text"
                placeholder="Apartment, suite, etc. (optional)"
                autoComplete="off"
                size="sm"
                {...register("Apartment")}
              />
            </FloatingLabel>
          </Form.Group>

          {/* City input box */}
          <Form.Group as={Col} lg="12" className="mb-4">
            <FloatingLabel className={style.imput_wrapper} label="City">
              <Form.Control
                type="text"
                placeholder="City"
                autoComplete="off"
                size="sm"
                {...register("city", {
                  required: true,
                  validate: (value) => {
                    return !!value.trim();
                  },
                })}
                isInvalid={errors.city}
              />
              <Form.Control.Feedback type="invalid">
                Enter your city
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>

          {/* county select box */}
          <Form.Group as={Col} lg="6" className="mb-4">
            <FloatingLabel controlId="floatingSelect" label="Country/region">
              <Form.Select
                aria-label="Floating label select example"
                {...register("country")}
              >
                {countryName.map((country, index) => (
                  <option key={index}>{country}</option>
                ))}
              </Form.Select>
            </FloatingLabel>
          </Form.Group>

          {/* Postal code input box */}
          <Form.Group as={Col} lg="6" className="mb-4">
            <FloatingLabel className={style.imput_wrapper} label="Postal code">
              <Form.Control
                type="text"
                placeholder="Postal code"
                autoComplete="off"
                size="sm"
                {...register("postalCode")}
              />
              <Form.Control.Feedback type="invalid">
                Enter your city
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>

          {/* phone number input box */}
          <Form.Group as={Col} lg="12" className="mb-1">
            <FloatingLabel className={style.imput_wrapper} label="Phone">
              <Form.Control
                type="number"
                placeholder="Phone"
                autoComplete="off"
                size="sm"
                {...register("phone", {
                  required: true,
                  validate: (value) => {
                    return !!value.trim();
                  },
                })}
                isInvalid={errors.phone}
              />
              <Form.Control.Feedback type="invalid">
                Enter a valid phone number
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
        </Row>
        <Form.Check
          className={`mt-2 ${style.imput_wrapper} mb-4`}
          type={"checkbox"}
          id={`savefornext`}
        >
          <Form.Check.Input className="me-2 cursor-ponter" type={"checkbox"} />
          <Form.Check.Label className="cursor-ponter">
            Save this information for next time
          </Form.Check.Label>
        </Form.Check>
        <div className="d-sm-flex align-items-center">
        <Button type="submit" className={`${style.submit_btn}`}>Continue to shipping</Button>{" "}
        <p className="mb-0 text-sky cursor-ponter text-center ">Return to cart</p>
        </div>
      </Form>
    </div>
  );
};

export default ChcekOutForm;
