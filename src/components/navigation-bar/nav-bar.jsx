import { Link, NavLink } from "react-router-dom";
import "./navbar-css.css"

const NavBar = () => {
    // const linkStyle = { border:"2px solid black ", color:"red" ,textDecoration:"none", margin:"10px"}
  return (
    <>
      <ul className="nav">
        <li className="nav-item">         
          <NavLink to={"/"}>Main</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"about"}>About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"category"}>Categories</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"products"}>products</NavLink>
        </li>
        
      </ul>
    </>
  );
};

export default NavBar;

