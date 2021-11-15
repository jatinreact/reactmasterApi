import React from "react";
import style from "./Slider.module.css";
import { Form } from "react-bootstrap";

import { MdKeyboardArrowRight } from "react-icons/md";

const SliderDropDown = () => {
  const [brand, setbrand] = useState("");
  const [model, setmodel] = useState("");
  const [year, setyear] = useState("");

  const datacard = [
    {
      id: "1111111",
      productTitle: "Sushila Autotechnik- SATuned",
      partsBrand: "Mercedes Benz",
      carVariant: "GLC class, GLE class",
      model: "x253, c292",
      price: "30000",
    },
    {
      id: "1111111",
      productTitle: "Sushila Autotechnik- SATuned",
      partsBrand: "Mercedes Car",
      carVariant: "GLC class, GLE class",
      model: "x253, c292",
      price: "10000",
    },
  ];

  return (
    <div>
      <div className={style.exhaust}>
        <div>
          <p className={"text-uppercase text-white me-4 mb-3 mb-md-0"}>
            find your exhaust:
          </p>
        </div>
        <div className={style.select}>
          <Form.Select
            className={"text-uppercase"}
            onChange={(e) => {
              setbrand(e.target.value);
              console.log("brand::::", e.target.value);
            }}
          >
            <option>BRAND</option>
            <option>Default select</option>
          </Form.Select>
          <Form.Select
            className={"text-uppercase"}
            value={model}
            onChange={(e) => {
              setmodel(e.target.value);
            }}
          >
            <option>Model</option>
            <option>Default select</option>
          </Form.Select>
          <Form.Select
            className={"text-uppercase"}
            value={year}
            onChange={(e) => {
              setyear(e.target.value);
            }}
          >
            <option>Year</option>
            <option>2021</option>
          </Form.Select>
        </div>
        <div>
          <MdKeyboardArrowRight
            className={`${style.arrow} text-white mt-3 mt-md-0`}
          />
        </div>
      </div>
    </div>
  );
};

export default SliderDropDown;
