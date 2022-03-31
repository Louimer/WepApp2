import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdPostAdd } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { AiOutlineUsergroupAdd } from "react-icons/ai";

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
          <MdPostAdd size={30} />
        </h3>
      </NavLink>
      <NavLink to="/groupcreate">
        <h3 className="nav-icon">
          <AiOutlineUsergroupAdd size={30} />
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