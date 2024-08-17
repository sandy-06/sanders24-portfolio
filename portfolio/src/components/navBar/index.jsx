//import React from 'react';
import { FaReact } from "react-icons/fa";
//import { Link } from "react-router-dom";
import navMenus from "./config";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className=" navbar__container">
          <link to={"/"} className="navbar__container__logo">
            <FaReact size={30} />
          </link>
          <ul className="navbar__container__menu">
            {
                navMenus.map((item, key) => (
                    <li key={key} className="navbar__container__menu__item">
                        <a to={item.to}>{item.label}</a>
                    </li>
                ))
            }
            
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
