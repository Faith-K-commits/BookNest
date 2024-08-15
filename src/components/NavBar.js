import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link className="brand-link">BookNest</Link>
      </div>
      <div className="navbar-links">
        <div className="center-links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/categories"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
          >
            Categories
          </NavLink>
        </div>
        <NavLink
          to="/add-book"
          className={({ isActive }) =>
            "nav-link right-link" + (isActive ? " active" : "")
          }
        >
          Add Book
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
