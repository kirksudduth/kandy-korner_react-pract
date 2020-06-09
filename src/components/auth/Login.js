import React, { useState } from "react";
import KandyManager from "../../modules/KandyManager";
import { withRouter } from "react-router-dom";

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    isSupervisor: false,
  });

  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };

  const checkUser = (event) => {
    event.preventDefault();
    KandyManager.getEmployeeByUsername(credentials.username).then(
      (employee) => {
        if (credentials.username !== employee[0].username) {
          window.alert("You don't work here!");
        } else if (
          credentials.username === employee[0].username &&
          credentials.password === employee[0].password &&
          employee[0].isSupervisor === true
        ) {
          credentials.isSupervisor = true;
          handleLogin();
        } else if (
          credentials.username === employee[0].username &&
          credentials.password === employee[0].password
        ) {
          handleLogin();
        } else if (
          credentials.username === employee[0].username &&
          credentials.password !== employee[0].password
        ) {
          window.alert("THAT'S THE WRONG PASSWORD, YA BIG DOOFUS.");
        }
      }
    );
  };

  const handleLogin = () => {
    props.setUser(credentials);
    props.history.push("/products");
  };

  return (
    <>
      <h1>Ma Houchens' Kandy Kounter</h1>
      <form onSubmit={checkUser}>
        <fieldset>
          <h3>Sign in, Sweetie!</h3>
          <div className="formgrid">
            <label htmlFor="inputUsername">Username: </label>
            <input
              onChange={handleFieldChange}
              type="text"
              id="username"
              placeholder="Username"
              required=""
              autoFocus=""
            />
            <label htmlFor="inputPassword">Password: </label>
            <input
              onChange={handleFieldChange}
              type="password"
              id="password"
              placeholder="Password"
              required=""
            />
          </div>
          <button type="submit">Sign in</button>
        </fieldset>
      </form>
    </>
  );
};

export default withRouter(Login);
