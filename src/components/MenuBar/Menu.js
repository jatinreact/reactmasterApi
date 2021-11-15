import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { MdSearch, MdMenu, MdClose } from "react-icons/md";
import style from "./MenuBar.module.css";
import { menus } from "./../Data/MenuList";
import { Link } from "react-router-dom";
import logo from "./../../images/Logo.png";
// import { CardContext } from "./../../App";
import { SmallMenu } from "./SmallMenu";

const Menu = ({ bg }) => {
  const [menuList] = useState(menus);
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [searchtext, setSearchText] = useState("");

  // const [cardProductLength] = useContext(CardContext);

  return (
    <Container
      className={`${bg === "white" ? "product_page_menu" : null} ${
        style.my_menu
      }`}
    >
      <Navbar expand="md">
        <Navbar.Brand href="/">
          <img height="55" className={style.logo} src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle className="shadow-none" aria-controls="basic-navbar-nav">
          <MdMenu />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-auto">
            {menuList.map((menu, index) => {
              return menu.dropdown ? (
                <NavDropdown
                  key={index}
                  title={menu.text}
                  className={`${menu.active ? "active_menu" : ""}`}
                >
                  {menu.dropdownList.length > 0 &&
                    menu.dropdownList.map((dropdown, index) => (
                      <NavDropdown.Item
                        as={Link}
                        to={dropdown.path}
                        key={index}
                      >
                        {dropdown.text}
                      </NavDropdown.Item>
                    ))}
                </NavDropdown>
              ) : (
                <Nav.Link
                  key={index}
                  className={menu.active ? "active_menu" : ""}
                  as={Link}
                  to={menu.path}
                >
                  {menu.text}
                </Nav.Link>
              );
            })}
          </Nav>
          <div className="d-flex pb-3 pb-md-0">
            <div className={style.icon}>
              <div
                className={`${style.serach_wrapepr} d-flex align-items-center`}
              >
                <input
                  type="text"
                  value={searchtext}
                  onChange={(e) => setSearchText(e.target.value)}
                  className={`${style.search_box} ${
                    showSearchBox ? "d-blcok" : "d-none"
                  }`}
                />
                {showSearchBox ? (
                  <MdClose onClick={() => setShowSearchBox(false)} />
                ) : (
                  <MdSearch onClick={() => setShowSearchBox(true)} />
                )}
              </div>
              <MdMenu />
              <SmallMenu />  
            </div>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Menu;
