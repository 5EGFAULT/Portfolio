import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavItem.css";

interface navitem {
  text: string;
  link: null | string;
  dropdownlist: null | Array<{ text: string; link: string }>;
}
interface props {
  navitem: navitem;
}

export default function NavItem({ navitem }: props) {
  const [opendrop, setopendrop] = useState(true);
  return (
    <div
      className="nav-item"
      onMouseEnter={() => {
        setopendrop(true);
      }}
      onMouseLeave={() => {
        setopendrop(false);
      }}
      onClick={() => {
        setopendrop(!opendrop);
      }}
    >
      <div className="nav-item-text">
        {navitem.link && (
          <Link to={navitem.link}>
            {navitem.text} <span className="bottomborder"></span>
          </Link>
        )}
        {!navitem.link && (
          <span>
            {navitem.text} <span className="bottomborder"></span>{" "}
          </span>
        )}

        {navitem.dropdownlist && opendrop && (
          <ul className="nav-item-dropdown">
            {navitem.dropdownlist.map((dropelement, idx) => {
              return (
                <li key={idx}>
                  <Link to={dropelement.link}>{dropelement.text}</Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
