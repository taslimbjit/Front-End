import { NavLink } from "react-router-dom";
import classes from "../styles/Header.module.css";

export default function Header() {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            to="/hello"
            className={(navInfo) => (navInfo.isActive ? classes.active : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/posts"
            className={(navInfo) => (navInfo.isActive ? classes.active : "")}
          >
            Posts
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/signin"
            className={(navInfo) => (navInfo.isActive ? classes.active : "")}
          >
            Sign Up
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
