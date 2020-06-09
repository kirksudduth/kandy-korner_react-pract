import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

const NavBar = (props) => {
  const handleLogout = () => {
    props.clearUser();
    props.history.push("/");
  };

  return (
    <>
      <header>
        <h1 className="site-title">Don't Accept Candy from Strangers.</h1>
        <nav>
          <ul className="container">
            <li>
              <NavLink
                className="nav-link"
                activeClassName="selected"
                exact
                to="/products"
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-link"
                activeClassName="selected"
                exact
                to="/employees"
              >
                Employees
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-link"
                activeClassName="selected"
                exact
                to="/locations"
              >
                Locations
              </NavLink>
            </li>
            <li>
              <span className="nav-link" onClick={handleLogout}>
                Logout
              </span>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default withRouter(NavBar);
