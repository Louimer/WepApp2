import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <NavLink to="/">HomePage</NavLink>
      <NavLink to="/create">Create</NavLink>
      <NavLink to="/update">Update</NavLink>
    </nav>
  );
}
