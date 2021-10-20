import { useState } from "react";
import { Link } from "react-router-dom";
import "./MenuItem.css";

interface props {
  text: string;
  link: string;
  isselected: boolean;
}

export default function MenuItem({ text, link, isselected }: props) {
  return (
    <div className={isselected ? "menu-item selected" : "menu-item"}>
      <div></div>
      <div className="menu-item-text">
        <Link to={link}>{text}</Link>
      </div>
    </div>
  );
}
