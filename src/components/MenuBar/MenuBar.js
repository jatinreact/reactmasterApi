import React from "react";
import Menu from "./Menu";
import style from "./MenuBar.module.css";

const MenuBar = () => {
  return (
    <div className={style.menu__bar}>
      <Menu />
    </div>
  );
};

export default MenuBar;
