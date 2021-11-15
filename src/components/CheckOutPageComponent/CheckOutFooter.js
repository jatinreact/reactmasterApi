import React from "react";
import { Link } from "react-router-dom";
import style from "./CheckOutPageComponent.module.css";

const footerLink = [
  { text: "Refund policy", path: "/" },
  { text: "Privacy policy", path: "/" },
  { text: "Terms of service", path: "/" },
];

const CheckOutFooter = () => {
  return (
    <div className="container">
      <div className={`${style.checkOut_footer}`}>
        {footerLink.map((link, index) => (
          <Link to={link.path} className={style.footer_link} key={index}>
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CheckOutFooter;
