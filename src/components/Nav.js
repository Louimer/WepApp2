import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <NavLink to="/">Homepage</NavLink>
      <NavLink to="/signin">Sign in</NavLink>
      <NavLink to="/create">Create</NavLink>
      <NavLink to="/update">Update</NavLink>
      <NavLink to="/profile">Profil</NavLink>
    </nav>
  );
}
