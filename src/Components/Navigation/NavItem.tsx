import { Link } from "react-router-dom";
import "./NavItem.css";

interface props {
  text: string;
  link: string;
}

export default function NavItem({ text, link }: props) {
  return (
    <div className="nav-item">
      <div className="nav-item-text">
        <Link to={link}>
          {text}
          <span className="bottomborder"></span>
        </Link>
      </div>
    </div>
  );
}
