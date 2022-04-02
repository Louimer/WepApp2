//Christian
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FiEdit3 } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

export default function Nav() {
  return (
    <nav>
      <NavLink to="/">
        <h3 className="nav-icon">
          <FaHome size={30} />
        </h3>
      </NavLink>
      <NavLink to="/create">
        <h3 className="nav-icon">
          <FiEdit3 size={30} />
        </h3>
      </NavLink>
      <NavLink to="/groupcreate">
        <h3 className="nav-icon">
          <FiEdit size={30} />
        </h3>
      </NavLink>
      <NavLink to="/profile">
        <h3 className="nav-icon">
          <BsPerson size={30} />
        </h3>
      </NavLink>
    </nav>
  );
}