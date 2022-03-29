import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdPostAdd } from "react-icons/md";
import { CgUser } from "react-icons/cg";
import { CgUserList } from "react-icons/cg";

export default function Nav() {
  return (
    <nav>
      <NavLink to="/">
        <h3 className="nav-icon">
          <FaHome />
        </h3>
      </NavLink>
      <NavLink to="/create">
        <h3 className="nav-icon">
          <MdPostAdd />
        </h3>
      </NavLink>
      <NavLink to="/groupcreate">
        <h3 className="nav-icon">
          <CgUserList />
        </h3>
      </NavLink>
      <NavLink to="/profile">
        <h3 className="nav-icon">
          <CgUser />
        </h3>
      </NavLink>
    </nav>
  );
}
