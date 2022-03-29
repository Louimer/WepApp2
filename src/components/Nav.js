import { NavLink } from "react-router-dom";
import homeIcon from "../assets/homeIcon.png";
import createIcon from "../assets/createIcon.png";
import profileIcon from "../assets/profileIcon.png";

export default function Nav() {
  return (
    <nav>
      <NavLink to="/">
        <img src={homeIcon} alt="Home Icon" />
      </NavLink>
      <NavLink to="/create">
        <img src={createIcon} alt="Create Icon" />
      </NavLink>
      <NavLink to="/profile">
        <img src={profileIcon} alt="Create Icon" />
      </NavLink>
    </nav>
  );
}
