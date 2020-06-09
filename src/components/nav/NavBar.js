import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

const NavBar = (props) => {
  const handleLogout = () => {
    props.clearUser();
    props.history.push("/");
  };

  // return (

  // )
};
