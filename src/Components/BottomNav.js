import React from "react";
import { RiPlantLine } from "react-icons/ri";
import { GrAddCircle } from "react-icons/gr";

export default function BottomNav() {
  return (
    <ul className="navbar">
      <li className="nav-button">
        <RiPlantLine />
      </li>
      <li className="nav-button">
        <GrAddCircle />
      </li>
    </ul>
  );
}
