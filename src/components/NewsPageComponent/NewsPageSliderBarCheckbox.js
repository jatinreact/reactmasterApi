import React from "react";
import { Form, } from "react-bootstrap";
import { sideBarCheckBoxLink } from "../Data/newsData";
import style from "./NewsPageComponent.module.css";

const NewsPageSliderBarCheckbox = () => {
  const handelCheckBox = (e) => {
    var myCheckbox = document.getElementsByName("my_checkbox");
    Array.prototype.forEach.call(myCheckbox, function (el) {
      el.checked = false;
    });
    e.target.checked = true;
  };
  return (
    <div className={style.sidebar_content_wrapper}>
      <p className={style.side_bar_title}>Home</p>
      <div>
        {sideBarCheckBoxLink.map((data, index) => (
          <div key={index} className={style.checkbox_container}>
            <Form.Check
              className={style.check_item}
              type={"checkbox"}
              id={data.text}
            >
              <Form.Check.Input
                type={"checkbox"}
                className={style.my_checkbox}
                name="my_checkbox"
                onClick={(e) => handelCheckBox(e)}
              />
              <label className={style.checkbox_label} htmlFor={data.text}>
                {data.text}
              </label>
            </Form.Check>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPageSliderBarCheckbox;
