import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <nav className="header">
      <div className="header__logodiv">
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
        </Link>
      </div>

      <div className="header__search">
        <input type="text" className="header__searchBar" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionTextOne">Hello</span>
            <span className="header__optionTextTwo">Sign In</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionTextOne">Returns</span>
            <span className="header__optionTextTwo">Orders</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionTextOne">Your</span>
            <span className="header__optionTextTwo">Prime</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
