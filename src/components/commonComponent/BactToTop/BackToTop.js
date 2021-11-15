import React from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import style from "./BackToTop.module.css";
import { useState } from "react";

const BackToTop = () => {
  const [show, setShow] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      setShow(true);
    } else {
      setShow(false);
    }
  });

  const handelBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`${style.back_to_top} ${show ? "visible" : "invisible"}`}
      onClick={handelBackToTop}
    >
      <MdKeyboardArrowUp />
    </div>
  );
};

export default BackToTop;
