import React, { useState } from "react";
import ApplicationViews from "./components/ApplicationViews";
import NavBar from "./components/nav/NavBar";
import Login from "./components/auth/Login";
import { withRouter } from "react-router-dom";
import "./Kandy.css";

const Kandy = (props) => {
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  const [hasUser, setHasUser] = useState(isAuthenticated());
  const setUser = (user) => {
    sessionStorage.setItem("credentials", JSON.stringify(user));
    setHasUser(isAuthenticated());
  };

  const clearUser = () => {
    sessionStorage.clear();
    setHasUser(isAuthenticated());
  };

  return (
    <>
      {!hasUser && <Login setUser={setUser} hasUser={hasUser} {...props} />}
      {hasUser && (
        <>
          <NavBar clearUser={clearUser} />
          <ApplicationViews
            clearUser={clearUser}
            hasUser={hasUser}
            setUser={setUser}
          />
        </>
      )}
    </>
  );
};

export default Kandy;
