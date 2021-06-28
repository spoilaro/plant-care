import React from "react";
import { RiPlantLine } from "react-icons/ri";
import { IoIosAddCircleOutline } from "react-icons/io";
import { NavLink } from "react-router-dom";

export default function BottomNav() {
  return (
    <ul className="navbar">
      <li className="nav-button">
        <NavLink to="/" className="link">
          <RiPlantLine />
        </NavLink>
      </li>
      <li className="nav-button">
        <IoIosAddCircleOutline />
      </li>
    </ul>
  );
}
