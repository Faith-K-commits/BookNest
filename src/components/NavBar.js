import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/" className="brand-link">
          BookNest
        </NavLink>
      </div>
      <div className="navbar-links">
        <div className="center-links">
          <NavLink to="/" className="nav-link" activeclassname="active-link">
            Home
          </NavLink>
          <NavLink
            to="/categories"
            className="nav-link"
            activeclassname="active-link"
          >
            Categories
          </NavLink>
        </div>
        <NavLink
          to="/add-book"
          className="nav-link right-link"
          activeclassname="active-link"
        >
          Add Book
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
