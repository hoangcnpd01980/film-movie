import React, { Fragment, useState } from "react";
import "./style.scss";
import SubMenuCategories from "./SubMenuCategories/index";
import { Nav, NavItem, NavLink, Container, Row } from "reactstrap";

const Menu = () => {
  return (
    <Fragment>
      <div className="menu">
        <Container fluid className="parent-menu">
          <Nav tabs>
            <NavItem>
              <ul className="menu__list">
                <li className="menu__list-item">
                  <NavLink>PHIM MỚI ZZ</NavLink>
                </li>
                <li className="menu__list-item">
                  <NavLink id="categories">THỂ LOẠI</NavLink>
                </li>
                <li className="menu__list-item">
                  <NavLink>QUỐC GIA</NavLink>
                </li>
                <li className="menu__list-item">
                  <NavLink>PHIM LẺ</NavLink>
                </li>
                <li className="menu__list-item">
                  <NavLink>PHIM BỘ</NavLink>
                </li>
                <li className="menu__list-item">
                  <NavLink>PHIM THUYẾT MINH</NavLink>
                </li>
                <li className="menu__list-item">
                  <NavLink>PHIM CHIẾU RẠP</NavLink>
                </li>
                <li className="menu__list-item">
                  <NavLink>TRAILER</NavLink>
                </li>
                <li className="menu__list-item">
                  <NavLink>TOP IMDB 2019</NavLink>
                </li>
              </ul>
            </NavItem>
          </Nav>
        </Container>
      </div>
      <Container className="mega-menu">
        <Row className="sub-menu">
          <SubMenuCategories />
        </Row>
      </Container>
    </Fragment>
  );
};

export default Menu;
