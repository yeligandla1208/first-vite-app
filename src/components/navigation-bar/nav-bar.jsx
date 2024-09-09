import { Link, NavLink } from "react-router-dom";
import "./navbar-css.css"
import { useContext } from "react";
import { UserDetails } from "../../navigations/navigation-static";

const NavBar = () => {
  const {darkTheme} = useContext(UserDetails)
    // const linkStyle = { border:"2px solid black ", color:"red" ,textDecoration:"none", margin:"10px"}
  return (
    <>

<nav className={`navbar navbar-expand-sm bg-${darkTheme ? "dark": "light"} navbar-light`}>
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink to={"/"}>Main</NavLink>
      </li>
      <li className="nav-item">
        
        <NavLink to={"about"}>About</NavLink>
      </li>
      <li className="nav-item">
        
        <NavLink to={"catagory"}>Categories</NavLink>
      </li>
      <li className="nav-item">
        
        <NavLink to={"products"}>products</NavLink>
      </li>
    </ul>
  </div>
</nav>

    </>
  );
};

export default NavBar;

