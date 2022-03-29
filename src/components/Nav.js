import { NavLink } from "react-router-dom";
import homeIcon from "../assets/homeIcon.svg";
import createIcon from "../assets/createIcon.svg";
import profileIcon from "../assets/profileIcon.svg";
import groupCreateIcon from "../assets/groupCreateIcon.svg";

export default function Nav() {
  return (
    <nav>
      <NavLink to="/">
        <img className="nav-icon" src={homeIcon} alt="Home Icon" />
      </NavLink>
      <NavLink to="/create">
        <img className="nav-icon" src={createIcon} alt="Create Icon" />
      </NavLink>
      <NavLink to="/groupcreate">
        <img
          className="nav-icon"
          src={groupCreateIcon}
          alt="Group Create Icon"
        />
      </NavLink>
      <NavLink to="/profile">
        <img className="nav-icon" src={profileIcon} alt="Profile Icon" />
      </NavLink>
    </nav>
  );
}
