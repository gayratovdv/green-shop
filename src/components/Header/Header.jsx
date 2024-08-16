import React from "react";
import Container from "../Container/Container";
import myRoutes from "./route";
import { Link } from "react-router-dom";
import Images from "../../utils/images";
import "./header.css"

const Header = () => {
  return (
    <header>
      <Container>
        <nav className="navbar">
          <div className="navbar__left">
            <Link to='/'><img src={Images.logo} alt="Logo" /></Link>
          </div>
          <ul className="navbar__list">
            {myRoutes.map((item) => (
              <Link to={item.path}>{item.component}</Link>
            ))}
          </ul>
          <div className="navbar__right">
            <i className="navbar__right--icon" class="fa-solid fa-magnifying-glass"></i>
            <i className="navbar__right--icon" class="fa-solid fa-cart-shopping"></i>
            <button className="navbar__right--btn">
              <i className="navbar__right--btn-icon" class="fa-solid fa-arrow-right-from-bracket"></i>
              Login
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
