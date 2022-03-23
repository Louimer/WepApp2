import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <NavLink to="/">Homepage</NavLink>
      <NavLink to="/create">Create</NavLink>
      <NavLink to="/update">Update</NavLink>
    </nav>
  );
}
