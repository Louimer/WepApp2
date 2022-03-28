import { NavLink } from "react-router-dom";
import homeIcon from "../assets/homeIcon.png";

export default function Nav() {
  return (
    <nav>
      <NavLink to="/">
        <img src={homeIcon} alt="Home Icon" />
      </NavLink>
      <NavLink to="/create">Create</NavLink>
      <NavLink to="/update">Update</NavLink>
      <NavLink to="/profile">Profil</NavLink>
    </nav>
  );
}
